import { NextResponse } from "next/server";

import { StaticImageData } from "next/image";
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

const DB: Product[] = [
  {
    id: "af1-mid-07",
    title: "Nike Air Force 1 Mid '07",
    subtitle: "Men's Shoes",
    price: 10795,
    image: "/products/airImage1.png",
    gender: "men",
    category: "shoes",
    badge: "Just In",
  },
  {
    id: "court-vision-low",
    title: "Nike Court Vision Low Next Nature",
    subtitle: "Men's Shoes",
    price: 4995,
    image: "/products/airImage3.png",
    gender: "men",
    category: "shoes",
  },
  {
    id: "af1-plt-af-orm",
    title: "Nike Air Force 1 PLT.AF.ORM",
    subtitle: "Women's Shoes",
    price: 8695,
    image: "/products/women-image2.png",
    gender: "women",
    category: "shoes",
  },
  {
    id: "ws-tee",
    title: "Nike Standard Issue",
    subtitle: "Women's Jersey",
    price: 3295,
    image: "/products/women-image1.png",
    gender: "women",
    category: "apparel",
  },
  {
    id: "ms-hoodie",
    title: "Nike Club Hoodie",
    subtitle: "Men's Pullover",
    price: 4495,
    image: "/products/man-image1.png",
    gender: "men",
    category: "apparel",
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") ?? "").toLowerCase();
  const gender = (searchParams.get("gender") ?? "all") as "all" | "men" | "women";
  const category = (searchParams.get("category") ?? "all") as "all" | "shoes" | "apparel";

  let rows = DB.slice();

  if (q) {
    rows = rows.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q)
    );
  }

  if (gender !== "all") rows = rows.filter((p) => p.gender === gender);
  if (category !== "all") rows = rows.filter((p) => p.category === category);

  return NextResponse.json({ data: rows, count: rows.length });
}
