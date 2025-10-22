import Image from "next/image";
import Link from "next/link";
import HorizontalScroller from "../Ui/HorizontalScroller";
import { BestOfAirData } from "../../../data/BestOfAirMax";

export default function ProductRow() {
  const aspect = "4/3";
  const contain = true;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1300px] px-3 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-gray-900">Best of Air Max</h3>
        </div>

        <HorizontalScroller actionLabel="Shop" actionHref="#">
          {BestOfAirData.map((p) => (
            <article key={p.id} className="group w-[calc((100%-48px)/1)] snap-start md:w-[400px]">
              <Link href={p.href ?? "#"} className="block">
                <div className="relative w-full overflow-hidden rounded-lg bg-gray-100">
                  <div className={`relative w-full aspect-[${aspect}]`}>
                    <Image
                      src={p.image}
                      alt={(p as any).imageAlt ?? p.title}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 90vw"
                      className={contain ? "object-contain" : "object-cover"}
                    />
                  </div>
                </div>
              </Link>

              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h4 className="text-[15px] font-medium text-gray-900">{p.title}</h4>
                  {p.subtitle && <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>}
                </div>
                {p.price && <div className="text-[15px] font-medium text-gray-900">{p.price}</div>}
              </div>
            </article>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  );
}
