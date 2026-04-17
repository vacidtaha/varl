"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const GA_ID = "G-49QCJ0VMF5";

function loadGA4() {
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

function removeGA4() {
  const script = document.getElementById("ga4-script");
  if (script) script.remove();

  document.cookie.split(";").forEach((c) => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_ga") || name.startsWith("_gid")) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });

  window.dataLayer = undefined;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("varl-cookie-consent");

    if (consent === "accepted") {
      loadGA4();
      return;
    }

    if (consent === "declined") return;

    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem("varl-cookie-consent", "accepted");
    loadGA4();
    setVisible(false);
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem("varl-cookie-consent", "declined");
    removeGA4();
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-[2px]" />
      <div className="fixed top-0 z-[9999] w-full bg-[#f5f5f7] shadow-lg dark:bg-[#1d1d1f]">
        <div className="flex items-center justify-between gap-4 px-5 py-2.5 lg:px-8">
          <p className="text-[11px] leading-relaxed text-[#6e6e73] lg:text-xs dark:text-[#86868b]">
            This website uses cookies to improve your experience, analyze site traffic, and understand how our pages are used. Cookies are active unless you choose to decline.{" "}
            <Link
              href="/cookies"
              className="underline underline-offset-2 font-semibold"
              style={{ color: "#06c" }}
            >
              Cookie Policy
            </Link>
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={decline}
              className="rounded-full px-4 py-1.5 text-[11px] text-[#6e6e73] transition-colors hover:text-[#1d1d1f] lg:text-xs dark:text-[#86868b] dark:hover:text-[#f5f5f7]"
              style={{ fontWeight: 500 }}
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="rounded-full bg-[#1d1d1f] px-4 py-1.5 text-[11px] text-white transition-colors hover:bg-[#333336] lg:text-xs dark:bg-[#f5f5f7] dark:text-[#1d1d1f] dark:hover:bg-[#e8e8ed]"
              style={{ fontWeight: 500 }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
