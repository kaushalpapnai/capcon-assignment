import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-6 md:py-12">
        {/* Top: columns + socials */}
        <div className="grid gap-10 md:grid-cols-[2fr_2fr_2fr_auto]">
          {/* Column 1 */}
          <div>
            <h4 className="text-sm font-semibold text-white">GET HELP</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Order Status</Link></li>
              <li><Link href="#" className="hover:text-white">Delivery</Link></li>
              <li><Link href="#" className="hover:text-white">Returns</Link></li>
              <li><Link href="#" className="hover:text-white">Payment Options</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us On Nike.com Inquiries</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us On All Other Inquiries</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white">ABOUT NIKE</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">News</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Investors</Link></li>
              <li><Link href="#" className="hover:text-white">Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold text-white">SUPPORT</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Find A Store</Link></li>
              <li><Link href="#" className="hover:text-white">Become A Member</Link></li>
              <li><Link href="#" className="hover:text-white">Sign Up For Email</Link></li>
              <li><Link href="#" className="hover:text-white">Send Us Feedback</Link></li>
              <li><Link href="#" className="hover:text-white">Student Discounts</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex items-start justify-start gap-3 md:justify-end">
            <Social icon="twitter" />
            <Social icon="facebook" />
            <Social icon="youtube" />
            <Social icon="instagram" />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-start gap-4 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 rounded-full border border-white/60" />
            <span>India</span>
            <span className="mx-3 hidden h-3 w-px bg-white/20 md:inline-block" />
            <span>© 2025 Nike, Inc. All Rights Reserved</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-white">Guides</Link>
            <Link href="#" className="hover:text-white">Terms of Sale</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Nike Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon }: { icon: "twitter" | "facebook" | "youtube" | "instagram" }) {
  const paths: Record<string, string> = {
    twitter: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8.09v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    youtube: "M10 15l5.19-3L10 9v6z M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.7 5 12 5 12 5h0s-4.7 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.4 2 10.9v1.2C2 13.6 2.2 15 2.2 15s.2 1.4.8 2c.8.8 1.9.8 2.4.9C7.3 18 12 18 12 18s4.7 0 6.9-.1c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.4.2-2.9V10.9c0-1.5-.2-2.9-.2-2.9z",
    instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
  };

  return (
    <a
      href="#"
      aria-label={icon}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d={paths[icon]} />
      </svg>
    </a>
  );
}
