import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string | StaticImageData;
  gender: "men" | "women";
  category: "shoes" | "apparel";
  badge?: string;
};

type Payload = { data: Product[]; count: number };

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { q?: string; gender?: "all" | "men" | "women"; category?: "all" | "shoes" | "apparel" };
}) {
  // Build query
  const sp = new URLSearchParams();
  if (searchParams.q) sp.set("q", searchParams.q);
  if (searchParams.gender) sp.set("gender", searchParams.gender);
  if (searchParams.category) sp.set("category", searchParams.category);

  // Absolute origin for reliability everywhere
  const h = await headers();
  const protocol = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const origin = `${protocol}://${host}`;

  const res = await fetch(`${origin}/api/products${sp.toString() ? `?${sp.toString()}` : ""}`, {
    cache: "no-store",
  });
  const payload = (await res.json()) as Payload;

  const current = {
    q: searchParams.q ?? "",
    gender: searchParams.gender ?? "all",
    category: searchParams.category ?? "all",
  };

  return (
    <main className="mx-auto max-w-[1300px] px-3 md:px-6 mt-12 mb-12">
      <div className="flex items-center justify-between py-6">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <div className="text-sm text-gray-600">{payload.count} Results</div>
      </div>

      {/* Minimal SSR GET form (no client code) */}
      <form action="/products" method="get" className="mb-6 flex flex-wrap items-center gap-3">
        <input
          name="q"
          placeholder="Search"
          defaultValue={current.q}
          className="w-full max-w-xs rounded-md border border-gray-300 px-3 py-2 text-sm"
        />

        <select
          name="gender"
          defaultValue={current.gender}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="all">All Genders</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

        <select
          name="category"
          defaultValue={current.category}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="all">All Categories</option>
          <option value="shoes">Shoes</option>
          <option value="apparel">Apparel</option>
        </select>

        <button className="rounded-md border px-3 py-2 text-sm">Apply</button>
      </form>

      {/* Grid */}
      <section className="grid grid-cols-2 gap-6 md:grid-cols-3">
        {payload.data.map((p) => (
          <article key={p.id} className="group">
            <Link href={`/products/${p.id}`} className="block">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width:1280px) 360px, (min-width:768px) 33vw, 50vw"
                  />
                </div>
              </div>
              {p.badge && (
                <div className="mt-3 text-[12px] font-semibold uppercase text-orange-600">{p.badge}</div>
              )}
              <h3 className="mt-1 text-[15px] font-medium text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
              <div className="mt-1 text-sm font-medium text-gray-900">MRP: ₹ {p.price.toLocaleString("en-IN")}.00</div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
