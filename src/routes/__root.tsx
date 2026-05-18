import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import "@/lib/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-display text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the future</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page does not exist in the XXICS network.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something interrupted the signal</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing the connection.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "XXICS — 21st century school" },
      {
        name: "description",
        content:
          "XXICS is a futuristic school that prepares teenagers for real life — combining AI, emotional intelligence, creativity and modern learning formats.",
      },
      { name: "author", content: "XXICS" },
      { property: "og:title", content: "XXICS — 21st century school" },
      {
        property: "og:description",
        content:
          "A new kind of school: AI mentor, modern formats, real-life skills. Built for the internet generation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "XXICS — 21st century school" },
      { name: "description", content: "XXICS Future School offers a visionary online education platform for teenagers, blending AI, emotional intelligence, and practical skills." },
      { property: "og:description", content: "XXICS Future School offers a visionary online education platform for teenagers, blending AI, emotional intelligence, and practical skills." },
      { name: "twitter:description", content: "XXICS Future School offers a visionary online education platform for teenagers, blending AI, emotional intelligence, and practical skills." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ba9a41d2-120c-412b-8ea4-ee8baa33191d/id-preview-c536e911--befc75d8-7316-4a63-8f57-a9a084d4406b.lovable.app-1778805290022.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ba9a41d2-120c-412b-8ea4-ee8baa33191d/id-preview-c536e911--befc75d8-7316-4a63-8f57-a9a084d4406b.lovable.app-1778805290022.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" />
        <script src="https://files.bpcontent.cloud/2026/05/18/07/20260518070422-B73JZVFY.js" defer />
        {/* Position Botpress chat button on the left so it doesn't overlap scroll-to-top */}
        <style>{`
          #bp-web-widget-container,
          .bpw-floating-button,
          [class*="bpw-widget-btn"],
          [id*="bp-web-widget"] {
            left: 1.5rem !important;
            right: auto !important;
          }
        `}</style>
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { i18n } = useTranslation();

  useEffect(() => {
    const update = () => {
      const lng = i18n.resolvedLanguage || "en";
      document.documentElement.setAttribute("lang", lng);
    };
    update();
    i18n.on("languageChanged", update);
    return () => { i18n.off("languageChanged", update); };
  }, [i18n]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </QueryClientProvider>
  );
}
