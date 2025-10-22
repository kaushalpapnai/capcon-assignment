import Image from "next/image";
import hero_image from "../../../images/hero.png";

export default function Hero() {
  return (
    <section className="relative">
      {/* space for fixed header */}
      <div className="h-16" />

      {/* Announcement strip */}
      <div className="sticky top-16 z-30 w-full border-b border-black/5 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto px-4 py-2 text-center bg-gray-100">
          <p className="text-[13px] font-semibold text-gray-900">Hello Nike App</p>
          <p className="mt-0.5 text-[12px] text-gray-600">
            Download the app to access everything Nike.{" "}
            <a href="#" className="underline hover:opacity-80">
              Get Your Great
            </a>
          </p>
        </div>
      </div>

      {/* Full-bleed hero media */}
      <div className="relative mx-auto max-w-[1300px] px-3 md:px-6">
        <div className="relative w-full overflow-hidden rounded-lg border border-black/5 shadow-sm aspect-[16/9]">
          <Image
            src={hero_image}
            alt="Featured product"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
          {/* TL badge */}
          <div className="pointer-events-none absolute left-4 top-4 md:left-6 md:top-6">
            <div className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-wide text-gray-900">
              AIR MAX PULSE
            </div>
          </div>
          {/* BR lockup */}
          <div className="pointer-events-none absolute right-4 bottom-4 md:right-6 md:bottom-6">
            <div className="rounded bg-white/85 px-2 py-1 text-[10px] font-semibold text-gray-900">
              MAXXED OUT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
