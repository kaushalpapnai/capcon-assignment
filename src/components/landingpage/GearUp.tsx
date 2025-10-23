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
      <HorizontalScroller actionLabel={title} actionHref="#" gap={16}>
        {items.map((c) => (
          <article key={c.id} className="w-[160px] shrink-0 sm:w-[190px] md:w-[240px] lg:w-[300px]">
            <Link href={c.href ?? "/products"} className="block">
              <div className="relative overflow-hidden rounded-lg border border-black/5 bg-white">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1280px) 300px, (min-width:768px) 240px, 190px"
                  />
                </div>
              </div>
            </Link>
            <div className="mt-2 flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="truncate text-[13px] font-medium text-gray-900">{c.title}</h4>
                <p className="mt-1 line-clamp-1 text-[12px] text-gray-600">{c.subtitle}</p>
              </div>
              <div className="shrink-0 pl-1 text-[13px] font-medium text-gray-900">{c.price}</div>
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
        <h3 className="mb-4 text-xl font-semibold text-gray-900 md:mb-6 md:text-2xl">Gear Up</h3>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <Lane title="Shop Men's" items={MEN} />
          <Lane title="Shop Women's" items={WOMEN} />
        </div>
      </div>
    </section>
  );
}

