"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <div className="h-5 w-10 rounded-sm bg-black" />
        </Link>

        {/* Categories centered */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-6">
          {categories.map((c) => (
            <Link key={c} href="#" className="text-sm text-gray-800 hover:opacity-80">
              {c}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <input
              placeholder="Search"
              className="h-10 w-64 rounded-full border border-gray-300 bg-white/90 pl-10 pr-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
            />
            <svg aria-hidden className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path d="M21 21l-3.5-3.5" strokeWidth="2" />
            </svg>
          </div>
          <button aria-label="Favorites" className="rounded p-2 hover:bg-gray-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" strokeWidth="2" />
            </svg>
          </button>
          <button aria-label="Bag" className="rounded p-2 hover:bg-gray-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d="M6 7h12l-1 12H7L6 7z" strokeWidth="2" />
              <path d="M9 7a3 3 0 0 1 6 0" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Mobile */}
        <button
          aria-label="Menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            <input
              placeholder="Search"
              className="h-10 w-full rounded-full border border-gray-300 bg-white/90 px-4 text-sm placeholder:text-gray-400"
            />
            <div className="flex flex-wrap gap-3">
              {categories.map((c) => (
                <Link key={c} href="#" className="rounded-full border px-3 py-1 text-sm text-gray-800 hover:bg-gray-50">
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
