export type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  images?: string[];
  gender: "men" | "women";
  category: "shoes" | "apparel";
  badge?: string;
  colors?: string[];
  sizes?: string[];
  description?: string;
  styleCode?: string;
  colorShown?: string;
};

// Fetch a single product by id from your API and add sensible defaults for the details page
export async function fetchProductById(id: string, origin: string): Promise<Product | null> {
  const res = await fetch(`${origin}/api/products`, { cache: "no-store" });
  if (!res.ok) return null;
  const { data } = await res.json();
  const base = data.find((p: Product) => p.id === id);
  if (!base) return null;

  const images = base.images && base.images.length > 0
    ? base.images
    : [base.image, base.image, base.image, base.image];

  const sizes = base.sizes ?? [
    "UK 6","UK 6.5","UK 7","UK 7.5","UK 8","UK 8.5",
    "UK 9","UK 9.5","UK 10","UK 10.5","UK 11","UK 12",
  ];

  return {
    ...base,
    images,
    sizes,
    description:
      base.description ??
      "Lightweight comfort with everyday versatility. Classic lines and plush materials keep you moving in style.",
    colorShown: base.colorShown ?? "Flat Pewter/Light Bone/Black/White",
    styleCode: base.styleCode ?? "DV7421-001",
  };
}
