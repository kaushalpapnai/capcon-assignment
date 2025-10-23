"use client";

import { PropsWithChildren, useRef } from "react";
import Link from "next/link";

type ScrollerProps = {
  actionLabel?: string;
  actionHref?: string;
  className?: string;
  containerClassName?: string;
  gap?: number; // must match track gap
};

export default function HorizontalScroller({
  actionLabel = "Shop",
  actionHref = "#",
  className = "",
  containerClassName = "",
  gap = 16, // smaller default for compact mobile
  children,
}: PropsWithChildren<ScrollerProps>) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const width = card ? card.getBoundingClientRect().width : 280;
    const delta = dir === "next" ? width + gap : -width - gap;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className={`bg-white ${className}`}>
      <div className={`mx-auto max-w-[1300px] px-3 md:px-6 ${containerClassName}`}>
        {/* Controls: hide on small, show on md+ */}
        <div className="mb-3 hidden items-center justify-end md:flex md:mb-6">
          <div className="flex items-center gap-3">
            {actionLabel && (
              <Link
                href={actionHref}
                className="text-sm font-medium text-gray-800 underline underline-offset-4 hover:opacity-80"
              >
                {actionLabel}
              </Link>
            )}
            <button
              aria-label="Previous"
              onClick={() => scrollBy("prev")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy("next")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Track: gap must equal "gap" above */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-6 [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollBehavior: "smooth" }}
        >
          <style jsx>{`div::-webkit-scrollbar{display:none}`}</style>
          {children}
        </div>
      </div>
    </section>
  );
}
