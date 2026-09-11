import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import { track } from "../../lib/posthog";
import { useTranslation } from "../components/LanguageContext";
import { ErrorPage } from "../components/ErrorPage";

/**
 * Root-level errorElement — the last-resort net for anything the "*" 404
 * route doesn't cover: an unhandled render crash in a page component, or a
 * failure in Layout itself. Catching it here (rather than only inside
 * Layout) means it also survives a Layout crash, at the cost of the Header
 * not being mounted — acceptable since this page carries its own way back.
 */
export default function RouteError() {
  const error = useRouteError();
  const t404 = useTranslation("error_404");
  const t500 = useTranslation("error_boundary");
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const t = is404 ? t404 : t500;

  useEffect(() => {
    console.error("[RouteError]", error);
    track(is404 ? "error_404_viewed" : "error_boundary_triggered", {
      path: window.location.pathname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorPage
      code={t.code}
      headline={t.headline}
      body={t.body}
      primaryLabel={t.cta}
      primaryHref="/"
      secondaryLabel={!is404 ? t500.retry : undefined}
      secondaryOnClick={!is404 ? () => window.location.reload() : undefined}
    />
  );
}
