import posthog from "posthog-js";

let initialized = false;

export function initPostHog() {
  if (initialized || typeof window === "undefined") return;

  const key = import.meta.env.NEXT_PUBLIC_POSTHOG_KEY as string | undefined;
  const host =
    (import.meta.env.NEXT_PUBLIC_POSTHOG_HOST as string | undefined) ??
    "https://eu.i.posthog.com";

  if (!key) return;

  posthog.init(key, {
    api_host: host,
    defaults: "2026-01-30",
    autocapture: false,
    capture_pageview: false, // tracked manually in Layout for SPA
    capture_pageleave: true,
  });

  initialized = true;
}

export function trackPageview() {
  try {
    posthog.capture("$pageview");
  } catch {
    // never block the UI
  }
}

export function track(event: string, properties?: Record<string, unknown>) {
  try {
    posthog.capture(event, properties);
  } catch {
    // never block the UI
  }
}
