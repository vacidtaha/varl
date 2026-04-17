"use client";

import { useEffect } from "react";

/**
 * Globally swallows unhandled `ErrorEvent` rejections that come from
 * WebGL / 3dmol / external script loading — these surface as
 * "[object ErrorEvent]" in Next.js dev overlay but never affect the app.
 */
export default function ErrorSuppressor() {
  useEffect(() => {
    const swallowRejection = (e: PromiseRejectionEvent) => {
      const reason = e.reason;
      if (reason instanceof ErrorEvent || reason instanceof Event || reason == null) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    };
    const swallowError = (e: ErrorEvent) => {
      const src = (e.filename || "").toLowerCase();
      if (src.includes("3dmol") || src.includes("rcsb")) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    };
    window.addEventListener("unhandledrejection", swallowRejection, true);
    window.addEventListener("error", swallowError, true);
    return () => {
      window.removeEventListener("unhandledrejection", swallowRejection, true);
      window.removeEventListener("error", swallowError, true);
    };
  }, []);

  return null;
}
