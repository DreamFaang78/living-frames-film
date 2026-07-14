import * as THREE from "three";
import { buildJoint } from "./buildJoint";

type Cleanup = () => void;

export async function mountJointScene(canvas: HTMLCanvasElement): Promise<Cleanup> {
  // Lazy import WebGPU entry so it never runs at SSR / non-WebGPU boot.
  const WebGPUMod = await import("three/webgpu");
  const renderer = new WebGPUMod.WebGPURenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  await renderer.init();

  const parent = canvas.parentElement!;
  const size = () => ({
    w: parent.clientWidth,
    h: parent.clientHeight,
  });

  const initial = size();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(initial.w, initial.h, false);
  renderer.setClearColor(0xffffff, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, initial.w / initial.h, 0.1, 100);
  camera.position.set(0, 0, 6.2);

  // Studio lighting
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(3, 4, 5);
  const rim = new THREE.DirectionalLight(0x8ab4f8, 1.2); // brand-blue rim
  rim.position.set(-4, 2, -3);
  const fill = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(key, rim, fill);

  const joint = buildJoint();
  scene.add(joint);

  // Interaction state
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let dragging = false;
  let lastPointer = { x: 0, y: 0 };
  let lastInteractAt = 0;
  const CLAMP = THREE.MathUtils.degToRad(25);

  const onPointerDown = (e: PointerEvent) => {
    dragging = true;
    lastPointer = { x: e.clientX, y: e.clientY };
    canvas.setPointerCapture(e.pointerId);
    lastInteractAt = performance.now();
  };
  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastPointer.x;
    const dy = e.clientY - lastPointer.y;
    lastPointer = { x: e.clientX, y: e.clientY };
    target.y = THREE.MathUtils.clamp(target.y + dx * 0.005, -CLAMP, CLAMP);
    target.x = THREE.MathUtils.clamp(target.x + dy * 0.004, -CLAMP, CLAMP);
    lastInteractAt = performance.now();
  };
  const onPointerUp = (e: PointerEvent) => {
    dragging = false;
    try {
      canvas.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };
  const onKey = (e: KeyboardEvent) => {
    const step = THREE.MathUtils.degToRad(4);
    if (e.key === "ArrowLeft") target.y = Math.max(-CLAMP, target.y - step);
    else if (e.key === "ArrowRight") target.y = Math.min(CLAMP, target.y + step);
    else if (e.key === "ArrowUp") target.x = Math.max(-CLAMP, target.x - step);
    else if (e.key === "ArrowDown") target.x = Math.min(CLAMP, target.x + step);
    else return;
    lastInteractAt = performance.now();
  };

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointercancel", onPointerUp);
  canvas.addEventListener("keydown", onKey);
  canvas.tabIndex = 0;

  const onResize = () => {
    const { w, h } = size();
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(onResize);
  ro.observe(parent);

  let raf = 0;
  const start = performance.now();
  let running = true;

  const tick = () => {
    if (!running) return;
    const now = performance.now();
    const t = (now - start) / 1000;
    const idleFor = now - lastInteractAt;

    // Ambient idle motion resumes ~2s after last interaction
    if (idleFor > 2000 && !dragging) {
      const decay = Math.min(1, (idleFor - 2000) / 1500);
      target.y = THREE.MathUtils.lerp(target.y, Math.sin(t * 0.5) * 0.28, 0.02 * decay);
      target.x = THREE.MathUtils.lerp(target.x, Math.sin(t * 0.35) * 0.12, 0.02 * decay);
    }

    // Spring toward target
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;
    joint.rotation.x = current.x;
    joint.rotation.y = current.y;

    renderer.renderAsync(scene, camera);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    ro.disconnect();
    canvas.removeEventListener("pointerdown", onPointerDown);
    canvas.removeEventListener("pointermove", onPointerMove);
    canvas.removeEventListener("pointerup", onPointerUp);
    canvas.removeEventListener("pointercancel", onPointerUp);
    canvas.removeEventListener("keydown", onKey);
    scene.traverse((obj) => {
      const anyObj = obj as unknown as {
        geometry?: { dispose?: () => void };
        material?: unknown;
      };
      anyObj.geometry?.dispose?.();
      const m = anyObj.material;
      if (Array.isArray(m)) m.forEach((mm) => (mm as { dispose?: () => void }).dispose?.());
      else if (m) (m as { dispose?: () => void }).dispose?.();
    });
    renderer.dispose();
  };
}
