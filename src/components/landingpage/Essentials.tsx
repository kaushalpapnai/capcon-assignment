import Image from "next/image";
import Link from "next/link";

import mensImg from "../../../images/essential-image1.png";
import womensImg from "../../../images/essential-image2.png";
import kidsImg from "../../../images/essential-image3.png";

export default function Essentials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1300px] px-3 md:px-6">
        <h3 className="mb-6 text-2xl font-semibold text-gray-900">The Essentials</h3>

        {/* Tile row */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Men's */}
          <article className="group relative overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={mensImg}
                alt="Essentials for Men"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(min-width: 1280px) 400px, 100vw"
              />
            </div>
            <div className="pointer-events-none absolute left-4 bottom-4 md:left-5 md:bottom-5">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
                Men&apos;s
              </span>
            </div>
            <Link href="/products" className="absolute inset-0" aria-label="Shop Men's essentials" />
          </article>

        {/* Women's */}
          <article className="group relative overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={womensImg}
                alt="Essentials for Women"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(min-width: 1280px) 400px, 100vw"
              />
            </div>
            <div className="pointer-events-none absolute left-4 bottom-4 md:left-5 md:bottom-5">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
                Women&apos;s
              </span>
            </div>
            <Link href="/products" className="absolute inset-0" aria-label="Shop Women's essentials" />
          </article>

        {/* Kids */}
          <article className="group relative overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={kidsImg}
                alt="Essentials for Kids"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(min-width: 1280px) 400px, 100vw"
              />
            </div>
            <div className="pointer-events-none absolute left-4 bottom-4 md:left-5 md:bottom-5">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm">
                Kids&apos;
              </span>
            </div>
            <Link href="/products" className="absolute inset-0" aria-label="Shop Kids' essentials" />
          </article>
        </div>

        {/* Category links */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Icons</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><Link href="/products" className="hover:underline">Air Force 1</Link></li>
              <li><Link href="/products" className="hover:underline">Huarache</Link></li>
              <li><Link href="/products" className="hover:underline">Air Max 90</Link></li>
              <li><Link href="/products" className="hover:underline">Air Max 95</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Shoes</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><Link href="/products" className="hover:underline">All Shoes</Link></li>
              <li><Link href="/products" className="hover:underline">Custom Shoes</Link></li>
              <li><Link href="/products" className="hover:underline">Jordan Shoes</Link></li>
              <li><Link href="/products" className="hover:underline">Running Shoes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Clothing</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><Link href="/products" className="hover:underline">All Clothing</Link></li>
              <li><Link href="/products" className="hover:underline">Modest Wear</Link></li>
              <li><Link href="/products" className="hover:underline">Hoodies &amp; Pullovers</Link></li>
              <li><Link href="/products" className="hover:underline">Shirts &amp; Tops</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Kids&apos;</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><Link href="/products" className="hover:underline">Infant &amp; Toddler Shoes</Link></li>
              <li><Link href="/products" className="hover:underline">Kids&apos; Shoes</Link></li>
              <li><Link href="/products" className="hover:underline">Kids&apos; Jordan Shoes</Link></li>
              <li><Link href="/products" className="hover:underline">Kids&apos; Basketball Shoes</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
