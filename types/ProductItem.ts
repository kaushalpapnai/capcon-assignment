import { StaticImageData } from "next/image";

export type ProductItem = {
  id: string;
  title: string;
  subtitle?: string;
  price?: string;
  href?: string;
  image: string | StaticImageData;
  imageAlt?: string;
};