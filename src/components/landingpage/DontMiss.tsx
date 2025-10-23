import Image from "next/image";
import featuredImg from "../../../images/dont-miss.png"; // replace with your image

export default function DontMiss() {
    const title = "Don't Miss";
  return (
    <section className="bg-white mt-10 md:mt-12">
      <div className="mx-auto max-w-[1300px] px-3 md:px-6">
        <div className="text-2xl font-semibold text-gray-900">{title}</div>

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
            FLIGHT ESSENTIALS
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-700 md:text-base">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
