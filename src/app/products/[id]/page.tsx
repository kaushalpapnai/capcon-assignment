import Image from "next/image";
import { headers } from "next/headers";
import { fetchProductById } from "@/app/api/lib/products";
// import { fetchProductById } from "@/app/lib/products";

export const revalidate = 60; // ISR: rebuild at most every 60s

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Origin safe for dev/prod/edge
  const h = await headers();
  const protocol = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const origin = `${protocol}://${host}`;

  const product = await fetchProductById(params.id, origin);
  if (!product) {
    return (
      <main className="mx-auto max-w-[1300px] px-3 md:px-6 py-10">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </main>
    );
  }

  const priceINR = `₹ ${product.price.toLocaleString("en-IN")}.00`;

  return (
    <main className="mx-auto max-w-[1300px] px-3 md:px-6 py-8 mt-12 mb-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Left: 2x2 image grid */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {product.images!.slice(0, 4).map((src, i) => (
            <div key={i} className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={src}
                alt={`${product.title} view ${i + 1}`}
                fill
                className="object-contain"
                sizes="(min-width: 1280px) 600px, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Right: details */}
        <aside className="md:col-span-1">
          <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
          <p className="mt-1 text-sm text-gray-600">{product.subtitle}</p>

          <div className="mt-3 text-base font-medium text-gray-900">{priceINR}</div>
          <p className="mt-1 text-[12px] text-gray-500">
            incl. of taxes
            <br />
            (Also includes all applicable duties)
          </p>

          {/* Sizes */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Select Size</span>
              <a href="#" className="text-xs underline underline-offset-4">Size Guide</a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.sizes!.slice(0, 12).map((s) => (
                <button key={s} type="button" className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 space-y-3">
            <button className="w-full rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">
              Add to Bag
            </button>
            <button className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
              Favourite
            </button>
          </div>

          {/* Copy */}
          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <p>{product.description}</p>
            <div>
              <div>
                Colour Shown: <span className="text-gray-900">{product.colorShown}</span>
              </div>
              <div>
                Style: <span className="text-gray-900">{product.styleCode}</span>
              </div>
            </div>
            <a href="#" className="text-sm underline underline-offset-4">View Product Details</a>
          </div>
        </aside>
      </div>
    </main>
  );
}
