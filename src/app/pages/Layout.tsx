import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Suspense, useEffect } from "react";
import { PageLoader } from "../components/PageLoader";
import { initPostHog, trackPageview } from "../../lib/posthog";

// Init PostHog once
initPostHog();

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top + track pageview on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageview();
  }, [pathname]);

  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader visible />}>
        <Outlet />
      </Suspense>
    </>
  );
}
