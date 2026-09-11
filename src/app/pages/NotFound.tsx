import { useEffect } from "react";
import { track } from "../../lib/posthog";
import { useTranslation } from "../components/LanguageContext";
import { ErrorPage } from "../components/ErrorPage";

export default function NotFound() {
  const t = useTranslation("error_404");

  useEffect(() => {
    track("error_404_viewed", { path: window.location.pathname });
  }, []);

  return (
    <ErrorPage
      code={t.code}
      headline={t.headline}
      body={t.body}
      primaryLabel={t.cta}
      primaryHref="/"
    />
  );
}
