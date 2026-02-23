"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const slides = [
  { id: 1, label: "Slide 1", video: "/slide-1.mp4", source: "Molecular Modeling, Washington University, 1970s", link: "/about", linkLabel: "About" },
  { id: 2, label: "Slide 2", image: "/slide-2.webp", source: "Robert Hooke, Drawings of Cork Structure, Micrographia, 1665", headline: "Health. Continuous.", description: "Our goal is not only to treat disease, but to make health sustainable and continuous.", link: "/health", linkLabel: "Health" },
  { id: 3, label: "Slide 3", image: "/slide-3.webp", source: "Norman Borlaug standing in wheat field, 1960s", headline: "Production Is\nNot Enough.", description: "The future will not be built by producing more, but by transforming food into intelligent and resilient systems.", link: "/food", linkLabel: "Food" },
  { id: 4, label: "Slide 4", image: "/slide-4.webp", source: "The Pasteur Boom—High Times for Hydrophobists, 1885-Dec-23", headline: "Waiting Is Not\na Strategy.", description: "Disease research should no longer depend on multi-year cycles.", link: "/research", linkLabel: "Research" },
  { id: 5, label: "Slide 5", image: "/slide-5.webp", source: "Genevieve Work in Receiving Room at Dearborn laboratory facility, Circa 1924", headline: "A Better Science\nIs Possible.", description: "Varl accelerates discovery and transforms disease management into a systematic, continuous process.", link: "/science", linkLabel: "Science" },
];

const TOTAL = slides.length;
const extendedSlides = [...slides, ...slides, ...slides];
const OFFSET = TOTAL;

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(OFFSET);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);


  const playActiveVideos = useCallback((realIndex: number) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      const slideRealIndex = i % TOTAL;
      if (slideRealIndex === realIndex) {
        if (v.ended) v.currentTime = 0;
        v.play();
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, []);

  const moveTo = useCallback((domIndex: number, animate: boolean) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[domIndex] as HTMLElement;
    if (!card) return;

    const containerWidth = trackRef.current.parentElement?.clientWidth ?? 0;
    const pos = card.offsetLeft - containerWidth / 2 + card.clientWidth / 2;

    trackRef.current.style.transition = animate
      ? "transform 700ms ease-in-out"
      : "none";
    trackRef.current.style.transform = `translateX(-${pos}px)`;

    indexRef.current = domIndex;
  }, []);

  const handleTransitionEnd = useCallback(() => {
    const idx = indexRef.current;
    const realIndex = idx % TOTAL;

    if (idx >= OFFSET + TOTAL) {
      const mapped = OFFSET + (idx - OFFSET) % TOTAL;
      moveTo(mapped, false);
    } else if (idx < OFFSET) {
      const mapped = OFFSET + TOTAL - (OFFSET - idx) % TOTAL;
      moveTo(mapped === OFFSET + TOTAL ? OFFSET : mapped, false);
    }

    playActiveVideos(realIndex);
  }, [moveTo, playActiveVideos]);

  const goNext = useCallback(() => {
    moveTo(indexRef.current + 1, true);
  }, [moveTo]);

  const goPrev = useCallback(() => {
    moveTo(indexRef.current - 1, true);
  }, [moveTo]);

  // Auto advance every 42 seconds
  useEffect(() => {
    const interval = setInterval(goNext, 42000);
    return () => clearInterval(interval);
  }, [goNext]);

  useEffect(() => {
    requestAnimationFrame(() => {
      moveTo(OFFSET, false);
      playActiveVideos(0);
    });
  }, [moveTo, playActiveVideos]);

  useEffect(() => {
    const handleResize = () => moveTo(indexRef.current, false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [moveTo]);

  const isDragging = useRef(false);
  const dragBasePos = useRef(0);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getCurrentTranslateX = useCallback(() => {
    if (!trackRef.current) return 0;
    const style = getComputedStyle(trackRef.current);
    const matrix = new DOMMatrix(style.transform);
    return matrix.m41;
  }, []);

  const snapToNearest = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const containerWidth = track.parentElement?.clientWidth ?? 0;
    const currentX = getCurrentTranslateX();

    let closestIdx = OFFSET;
    let closestDist = Infinity;

    for (let i = 0; i < extendedSlides.length; i++) {
      const card = track.children[i] as HTMLElement;
      if (!card) continue;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const targetX = -(cardCenter - containerWidth / 2);
      const dist = Math.abs(currentX - targetX);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    }

    isDragging.current = false;
    moveTo(closestIdx, true);
  }, [getCurrentTranslateX, moveTo]);

  useEffect(() => {
    const container = trackRef.current?.parentElement;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX);
      const dy = Math.abs(e.deltaY);
      if (dx < 3 || dy > dx * 1.5) return;

      e.preventDefault();

      if (!isDragging.current) {
        isDragging.current = true;
        dragBasePos.current = getCurrentTranslateX();
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
      }

      dragBasePos.current -= e.deltaX * 1.5;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${dragBasePos.current}px)`;
      }

      if (snapTimer.current) clearTimeout(snapTimer.current);
      snapTimer.current = setTimeout(snapToNearest, 120);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };
  }, [getCurrentTranslateX, snapToNearest]);

  return (
    <section className="w-full overflow-hidden py-16">
      <div className="relative">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex gap-6"
          style={{ willChange: "transform" }}
        >
          {extendedSlides.map((slide, index) => {
            return (
              <div
                key={`${slide.id}-${index}`}
                className="relative aspect-[3/2] w-[1300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-white dark:bg-neutral-800"
              >
                {slide.video ? (
                  <Link href={slide.link || "#"} className="relative block h-full w-full">
                    <div className="absolute inset-0 z-[1] bg-black/15"></div>
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={slide.video}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-start justify-start pl-20 pt-28"
                      style={{ transform: "translateZ(0)" }}
                    >
                      <h2
                        className="text-7xl leading-tight tracking-tight text-white"
                        style={{ fontWeight: 400 }}
                      >
                        To Design<br />a Treatment.
                      </h2>
                      {slide.linkLabel && (
                        <span
                          className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
                          style={{ fontWeight: 450 }}
                        >
                          {slide.linkLabel}
                          <ArrowUpRight size={16} strokeWidth={1.5} />
                        </span>
                      )}
                    </div>
                    {slide.source && (
                      <span className="absolute bottom-3 left-4 z-[2] text-xs text-white/60">
                        {slide.source}
                      </span>
                    )}
                  </Link>
                ) : slide.image ? (
                  <Link href={slide.link || "#"} className="relative block h-full w-full overflow-hidden">
                    <div className="absolute inset-0 z-[1] bg-black/15"></div>
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="h-full w-full scale-110 object-cover"
                    />
                    {slide.headline && (
                      <div className="absolute inset-0 z-[2] flex flex-col items-start justify-start pl-20 pt-28">
                        <h2
                          className="text-7xl leading-tight tracking-tight text-white drop-shadow-lg"
                          style={{ fontWeight: 400 }}
                        >
                          {slide.headline.split("\n").map((line: string, i: number) => (
                            <span key={i}>
                              {line}
                              {i < slide.headline.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                        </h2>
                        {slide.description && (
                          <p className="mt-6 max-w-lg text-xl text-white/90 drop-shadow-md" style={{ fontWeight: 450 }}>
                            {slide.description}
                          </p>
                        )}
                        {slide.link && (
                          <span
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
                            style={{ fontWeight: 450 }}
                          >
                            {slide.linkLabel}
                            <ArrowUpRight size={16} strokeWidth={1.5} />
                          </span>
                        )}
                      </div>
                    )}
                    {slide.source && (
                      <span className="absolute bottom-3 left-4 z-[2] text-xs text-white/60">
                        {slide.source}
                      </span>
                    )}
                  </Link>
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                      {slide.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex w-[1300px] max-w-full justify-end gap-3 pt-6">
        <button
          onClick={goPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-gray-300 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
        </button>
        <button
          onClick={goNext}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-gray-300 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600"
        >
          <ArrowRight size={20} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
