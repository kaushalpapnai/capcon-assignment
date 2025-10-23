"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import men1 from "../../../images/man-image1.png";
import men2 from "../../../images/man-image2.png";
import women1 from "./../../../images/women-image1.png";
import women2 from "./../../../images/women-image2.png";
import HorizontalScroller from "../Ui/HorizontalScroller";



type Card = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  href?: string;
  image: string | StaticImageData;
};

const MEN: Card[] = [
  { id: "m1", title: "Nike Dri-FIT ADV TechKnit Ultra", subtitle: "Men's Short-Sleeve Running Top", price: "₹ 3 895", image: men1, href: "#" },
  { id: "m2", title: "Nike Dri-FIT Challenger", subtitle: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", price: "₹ 2 495", image: men2, href: "#" },
];

const WOMEN: Card[] = [
  { id: "w1", title: "Nike Dri-FIT ADV Run Division", subtitle: "Women's Long-Sleeve Running Top", price: "₹ 5 295", image: women1, href: "#" },
  { id: "w2", title: "Nike Fast", subtitle: "Women's Mid-Rise 7/8 Running Leggings with Pockets", price: "₹ 3 795", image: women2, href: "#" },
];

function Lane({ title, items }: { title: string; items: Card[] }) {
  return (
    <section className="bg-white">

      <HorizontalScroller actionLabel={title} actionHref="#">
        {items.map((c) => (
          <article key={c.id} className="w-[220px] md:w-[280px] lg:w-[300px] shrink-0">
            <Link href={c.href ?? "#"} className="block">
              <div className="relative overflow-hidden rounded-lg border border-black/5 bg-white">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width:1280px) 300px, 70vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

            <div className="mt-2 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h4 className="text-[14px] font-medium text-gray-900 truncate">{c.title}</h4>
                <p className="mt-1 text-[13px] text-gray-600 line-clamp-2">{c.subtitle}</p>
              </div>
              <div className="shrink-0 text-[14px] font-medium text-gray-900">{c.price}</div>
            </div>
          </article>
        ))}
      </HorizontalScroller>
    </section>
  );
}


export default function GearUpTwoLanes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1300px] px-3 md:px-6">
        <h3 className="mb-6 text-2xl font-semibold text-gray-900">Gear Up</h3>

        {/* Two lanes side-by-side on md+, stacked on mobile */}
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Lane title="Shop Men's" items={MEN} />
          </div>
          <div>
            <Lane title="Shop Women's" items={WOMEN} />
          </div>
        </div>
      </div>
    </section>
  );
}
