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
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
  });

  initialized = true;
}

export function track(event: string, properties?: Record<string, unknown>) {
  try {
    posthog.capture(event, properties);
  } catch {
    // never block the UI
  }
}
