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
    <div className="mesh-charcoal grain flex min-h-screen items-center justify-center px-4">
      <div className="relative z-10 max-w-md text-center">
        <div className="font-display text-[10rem] leading-none text-champagne">404</div>
        <h2 className="mt-2 font-display text-2xl text-offwhite">
          This corner of the house isn't built yet.
        </h2>
        <p className="mt-3 text-sm text-offwhite/60">
          Let's walk you back to the front door.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-champagne px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-champagne-soft"
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
    <div className="mesh-charcoal flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-offwhite">Something didn't load.</h1>
        <p className="mt-2 text-sm text-offwhite/60">
          The frame slipped. Try again — or head back to the entrance.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-champagne px-5 py-3 text-sm font-semibold text-charcoal"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-offwhite/30 px-5 py-3 text-sm text-offwhite"
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
      { title: "Nicwin — Windows & Doors that quiet the world" },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#0A0A0B" },
      { property: "og:site_name", content: SITE.fullName },
      { property: "og:title", content: "Nicwin — Always looking for the better." },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
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
    <html lang="en" className="dark">
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
