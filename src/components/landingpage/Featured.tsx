import Image from "next/image";
import featuredImg from "../../../images/featured-image.jpg"; // replace with your image
import Link from "next/link";

export default function Featured() {
  return (
    <section className="bg-white mt-10 md:mt-12">
      <div className="mx-auto max-w-[1300px] px-3 md:px-6">
        <div className="text-2xl font-semibold text-gray-900">Featured</div>

        {/* Media */}
        <div className="relative overflow-hidden mt-8">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={featuredImg}
              alt="Runner outdoors"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority={false}
            />
          </div>
        </div>

        {/* Copy */}
        <div className="mx-auto max-w-3xl py-10 text-center md:py-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            STEP INTO WHAT FEELS GOOD
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-700 md:text-base">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <div className="mt-6">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Find Your Shoe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
