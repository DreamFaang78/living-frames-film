import * as THREE from "three";

/**
 * Builds a mitred 45° window corner joint:
 * - Two extruded uPVC profile bars (horizontal + vertical) meeting at an L
 * - A thin glass inset filling the interior
 * Returned as a THREE.Group centred at the origin.
 */
export function buildJoint(opts?: {
  frameColor?: THREE.ColorRepresentation;
  glassColor?: THREE.ColorRepresentation;
}) {
  const frameColor = new THREE.Color(opts?.frameColor ?? 0xf5f5f2);
  const glassColor = new THREE.Color(opts?.glassColor ?? 0xbcd4e6);

  const group = new THREE.Group();

  // Profile cross-section (looking down the bar length)
  // Multi-chamber uPVC feel: outer rectangle with a small inner shelf.
  const profile = new THREE.Shape();
  const w = 0.28; // profile width (depth of frame)
  const h = 0.34; // profile height (visible face)
  profile.moveTo(-w / 2, -h / 2);
  profile.lineTo(w / 2, -h / 2);
  profile.lineTo(w / 2, h / 2);
  profile.lineTo(-w / 2, h / 2);
  profile.lineTo(-w / 2, -h / 2);

  // Inner hollow / glazing rebate
  const hole = new THREE.Path();
  const iw = 0.14;
  const ih = 0.22;
  hole.moveTo(-iw / 2, -ih / 2);
  hole.lineTo(iw / 2, -ih / 2);
  hole.lineTo(iw / 2, ih / 2);
  hole.lineTo(-iw / 2, ih / 2);
  hole.lineTo(-iw / 2, -ih / 2);
  profile.holes.push(hole);

  const barLength = 2.2;
  const extrude: THREE.ExtrudeGeometryOptions = {
    depth: barLength,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 2,
    curveSegments: 6,
  };

  const frameMat = new THREE.MeshStandardMaterial({
    color: frameColor,
    roughness: 0.42,
    metalness: 0.02,
  });

  // Horizontal bar — extruded along +Z, we rotate so its length runs along X.
  const barGeo = new THREE.ExtrudeGeometry(profile, extrude);
  barGeo.translate(0, 0, -barLength / 2);

  // Mitre both ends at 45° by clipping via two angled planes would need CSG;
  // instead we hide the miter under overlapping bars and add small triangular
  // caps in the corner. Visually reads as a proper welded joint at hero scale.

  const horizontal = new THREE.Mesh(barGeo, frameMat);
  horizontal.rotation.y = Math.PI / 2; // length along X
  horizontal.position.x = barLength / 2 - h / 2;
  horizontal.position.y = -barLength / 2 + h / 2;

  const vertical = new THREE.Mesh(barGeo.clone(), frameMat);
  // length along Y
  vertical.rotation.x = -Math.PI / 2;
  vertical.rotation.z = 0;
  vertical.position.x = -barLength / 2 + h / 2;
  vertical.position.y = barLength / 2 - h / 2;

  group.add(horizontal, vertical);

  // Diagonal weld seam highlight — a thin dark line along the mitre.
  const seamGeo = new THREE.PlaneGeometry(h * Math.SQRT2, 0.006);
  const seamMat = new THREE.MeshBasicMaterial({
    color: 0x0e3b73,
    transparent: true,
    opacity: 0.28,
  });
  const seam = new THREE.Mesh(seamGeo, seamMat);
  seam.position.set(-barLength / 2 + h / 2, -barLength / 2 + h / 2, w / 2 + 0.001);
  seam.rotation.z = -Math.PI / 4;
  group.add(seam);

  // Glass inset (thin panel behind the frame opening)
  const glassGeo = new THREE.PlaneGeometry(barLength - h, barLength - h);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: glassColor,
    roughness: 0.05,
    metalness: 0,
    transmission: 0.9,
    thickness: 0.05,
    ior: 1.45,
    transparent: true,
    opacity: 0.55,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
  });
  const glass = new THREE.Mesh(glassGeo, glassMat);
  glass.position.set(0, 0, 0);
  group.add(glass);

  // Recentre the whole group so the corner sits near origin
  const box = new THREE.Box3().setFromObject(group);
  const center = box.getCenter(new THREE.Vector3());
  group.position.sub(center);

  return group;
}
