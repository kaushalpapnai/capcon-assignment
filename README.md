***

# Next.js E-commerce Mini Store

A fully responsive demo store built with Next.js (App Router) to demonstrate modern web approaches: SSG for the landing page, SSR for product listing, and ISR for product detail. No backend/database is required—products are delivered via in-memory API routes.

***

## Features

### 1. Landing Page (`/`)
- Clean hero section with a banner and CTA
- Multiple sections (like featured, about, and product teasers—matches the Figma layout)
- Clear, visible CTAs (e.g. “Shop Now”)
- Built with **SSG** for maximum speed

### 2. Product Listing Page (`/products`)
- Products shown in a responsive grid layout
- Basic filtering:
  - Search bar
  - Filter by gender ("Men", "Women", "All")
  - Filter by category ("Shoes", "Apparel", "All")
- Each product card links to its respective details page
- Page is rendered using **SSR** to simulate real-time data

### 3. Product Detail Page (`/products/[id]`)
- Detailed view with:
  - 2x2 product image gallery
  - Name, price, and product description
  - Size/options grid (if relevant)
  - CTA buttons (“Add to Cart”, “Favourite”)—for demo only, no functionality
  - Extra details (Color shown, SKU/style code)
- Fully **responsive** and matches the provided Figma/visual spec
- Page uses **ISR**—incrementally updates every 60 seconds for freshness

***

## How to Use

1. **Install**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run locally**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **View**
   - Landing: [http://localhost:3000/](http://localhost:3000/)
   - All products: [http://localhost:3000/products](http://localhost:3000/products)
   - Product details: click any item in grid or visit `/products/[id]`

4. **Deploy**
   - Push to GitHub and import at [vercel.com](https://vercel.com/)
   - _No environment variables needed for demo setup_
   - Vercel auto-detects Next.js and deploys SSG/SSR/ISR out of the box

***

## Notes

- All data/images are stored locally—no backend or env vars required.
- No authentication, cart, or order logic (demo only).
- UI and structure can be quickly adapted to real data or backend.
- Mobile, tablet and desktop layouts are fully tested.

***
