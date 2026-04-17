"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  { id: 1, label: "Molecular modeling visualization from Washington University, 1970s", video: "/slide-1.mp4", source: "Molecular Modeling, Washington University, 1970s", link: "/science", linkLabel: "Science" },
  { id: 2, label: "Cork cell structure drawing by Robert Hooke from Micrographia, 1665", image: "/slide-2.webp", source: "Robert Hooke, Drawings of Cork Structure, Micrographia, 1665", headline: "Health. Continuous.", description: "Our goal is not only to treat disease, but to make health sustainable and continuous.", link: "/health", linkLabel: "Health" },
  { id: 3, label: "Norman Borlaug standing in a wheat field, 1960s", image: "/slide-3.webp", source: "Norman Borlaug standing in wheat field, 1960s", headline: "Production Is\nNot Enough.", description: "The future will not be built by producing more, but by transforming food into intelligent and resilient systems.", link: "/food", linkLabel: "Food" },
  { id: 4, label: "Genevieve Work in the receiving room at Dearborn laboratory, circa 1924", image: "/slide-5.webp", source: "Genevieve Work in Receiving Room at Dearborn laboratory facility, Circa 1924", headline: "The Work Behind\nthe Work.", description: "Every breakthrough starts with someone who refused to accept the limits of what was known.", link: "/about", linkLabel: "About" },
];

const TOTAL = slides.length;
const extendedSlides = [...slides, ...slides, ...slides];
const OFFSET = TOTAL;

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(OFFSET);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);


  const playActiveVideos = useCallback(() => {
    const activeIdx = indexRef.current;
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === activeIdx) {
        const slide = extendedSlides[i];
        if (slide.video && !v.src) v.src = slide.video;
        if (v.ended) v.currentTime = 0;
        v.play().catch(() => {});
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

    playActiveVideos();
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
      playActiveVideos();
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

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let lastTouchX = 0;
    let touchMoving = false;
    let locked: "h" | "v" | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      lastTouchX = touchStartX;
      touchStartTime = Date.now();
      touchMoving = false;
      locked = null;
      dragBasePos.current = getCurrentTranslateX();
      if (trackRef.current) trackRef.current.style.transition = "none";
    };

    const handleTouchMove = (e: TouchEvent) => {
      const curX = e.touches[0].clientX;
      const dx = curX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;

      if (!locked) {
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
          locked = Math.abs(dx) >= Math.abs(dy) ? "h" : "v";
        }
        return;
      }

      if (locked === "v") return;

      e.preventDefault();
      touchMoving = true;
      lastTouchX = curX;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${dragBasePos.current + dx}px)`;
      }
    };

    const handleTouchEnd = () => {
      if (!touchMoving) { locked = null; return; }

      const dx = lastTouchX - touchStartX;
      const dt = Date.now() - touchStartTime;
      const velocity = Math.abs(dx) / dt;
      const swipeThreshold = 30;

      if (Math.abs(dx) > swipeThreshold || velocity > 0.3) {
        if (dx < 0) {
          moveTo(indexRef.current + 1, true);
        } else {
          moveTo(indexRef.current - 1, true);
        }
      } else {
        snapToNearest();
      }

      locked = null;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };
  }, [getCurrentTranslateX, snapToNearest]);

  return (
    <section className="w-full overflow-hidden py-10 lg:py-16">
      <div className="relative">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex gap-4 lg:gap-6"
          style={{ willChange: "transform" }}
        >
          {extendedSlides.map((slide, index) => {
            return (
              <div
                key={`${slide.id}-${index}`}
                className="relative aspect-[3/4] w-[calc(100vw-64px)] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-white lg:aspect-[3/2] lg:w-[1300px] lg:rounded-3xl dark:bg-neutral-800"
              >
                {slide.video ? (
                  <Link href={slide.link || "#"} className="relative block h-full w-full">
                    <div className="absolute inset-0 z-[1] bg-black/15"></div>
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={index >= OFFSET && index < OFFSET + TOTAL ? slide.video : undefined}
                      loop
                      muted
                      playsInline
                      autoPlay={index >= OFFSET && index < OFFSET + TOTAL}
                      preload={index >= OFFSET && index < OFFSET + TOTAL ? "auto" : "none"}
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[3] flex flex-col items-start justify-start p-5 lg:p-0 lg:pl-20 lg:pt-28"
                      style={{ transform: "translateZ(0)" }}
                    >
                      <h2
                        className="text-[22px] leading-[1.2] tracking-tight text-white lg:text-7xl lg:leading-tight"
                        style={{ fontWeight: 400 }}
                      >
                        To Design<br />a Treatment.
                      </h2>
                      {slide.linkLabel && (
                        <span
                          className="pointer-events-auto mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-[11px] text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 lg:mt-8 lg:px-6 lg:py-2.5 lg:text-sm"
                          style={{ fontWeight: 450 }}
                        >
                          {slide.linkLabel}
                          <ArrowUpRight size={14} strokeWidth={1.5} />
                        </span>
                      )}
                    </div>
                    {slide.source && (
                      <span className="absolute bottom-2 left-3 z-[3] text-[8px] text-white/40 lg:bottom-3 lg:left-4 lg:text-xs lg:text-white/60">
                        {slide.source}
                      </span>
                    )}
                  </Link>
                ) : slide.image ? (
                  <Link href={slide.link || "#"} className="relative block h-full w-full overflow-hidden">
                    <div className="absolute inset-0 z-[1] bg-black/15"></div>
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      fill
                      className="scale-110 object-cover"
                      sizes="(max-width: 1024px) calc(100vw - 64px), 1300px"
                    />
                    {slide.headline && (
                      <div className="absolute inset-0 z-[3] flex flex-col items-start justify-start p-5 lg:p-0 lg:pl-20 lg:pt-28">
                        <h2
                          className="text-[22px] leading-[1.2] tracking-tight text-white drop-shadow-lg lg:text-7xl lg:leading-tight"
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
                          <p className="mt-2 text-[11px] leading-relaxed text-white/80 drop-shadow-md lg:mt-6 lg:max-w-lg lg:text-xl lg:text-white/90" style={{ fontWeight: 450 }}>
                            {slide.description}
                          </p>
                        )}
                        {slide.link && (
                          <span
                            className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-[11px] text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 lg:mt-8 lg:px-6 lg:py-2.5 lg:text-sm"
                            style={{ fontWeight: 450 }}
                          >
                            {slide.linkLabel}
                            <ArrowUpRight size={14} strokeWidth={1.5} />
                          </span>
                        )}
                      </div>
                    )}
                    {slide.source && (
                      <span className="absolute bottom-2 left-3 z-[3] text-[8px] text-white/40 lg:bottom-3 lg:left-4 lg:text-xs lg:text-white/60">
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

      <div className="mx-auto hidden justify-end gap-3 pt-6 lg:flex lg:w-[1300px]">
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
