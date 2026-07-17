import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppBubble } from "@/components/site/WhatsAppBubble";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-[color:var(--paper)] px-4">
      <div className="relative z-10 max-w-md text-center">
        <div className="font-display text-[10rem] leading-none text-[color:var(--nicwin-red)]">404</div>
        <h2 className="mt-2 font-display text-2xl text-[color:var(--ink)]">
          This corner of the house isn't built yet.
        </h2>
        <p className="mt-3 text-sm text-[color:var(--ink-soft)]">
          Let's walk you back to the front door.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-[color:var(--nicwin-red)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--nicwin-red-dark)]"
          >
            Go home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[color:var(--paper)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-[color:var(--ink)]">Something didn't load.</h1>
        <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
          The frame slipped. Try again — or head back to the entrance.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-[color:var(--nicwin-red)] px-5 py-3 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-[color:var(--ink)]/20 px-5 py-3 text-sm text-[color:var(--ink)]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.fullName,
  description: SITE.description,
  telephone: SITE.phones[0].tel,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nayachitkat, Rikhiya Dumma Border Road, Near-Navoday School Rikhiya",
    addressLocality: "Deoghar",
    addressRegion: "Jharkhand",
    postalCode: "814113",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:30-18:30",
  slogan: SITE.tagline,
  areaServed: "IN",
  sameAs: SITE.socials.map((s) => s.href),
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nicwin — Always looking for the better." },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#E31E24" },
      { property: "og:site_name", content: SITE.fullName },
      { property: "og:title", content: "Nicwin — Always looking for the better." },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nicwin — Always looking for the better." },
      { name: "description", content: "Premium uPVC, Aluminium and Steel windows and doors. Engineered for Indian monsoons. Designed for silence, light, and security." },
      { property: "og:description", content: "Premium uPVC, Aluminium and Steel windows and doors. Engineered for Indian monsoons. Designed for silence, light, and security." },
      { name: "twitter:description", content: "Premium uPVC, Aluminium and Steel windows and doors. Engineered for Indian monsoons. Designed for silence, light, and security." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d89ee429-c12e-44ed-8471-0c38997c02ba/id-preview-6e07e447--c3f04641-dd6d-482b-9765-df5e37edf668.lovable.app-1783951719198.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d89ee429-c12e-44ed-8471-0c38997c02ba/id-preview-6e07e447--c3f04641-dd6d-482b-9765-df5e37edf668.lovable.app-1783951719198.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Sora:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppBubble />
    </QueryClientProvider>
  );
}
