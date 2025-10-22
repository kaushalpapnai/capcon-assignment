// components/AirMaxIntro.tsx
function AirMaxIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
        <p className="text-sm font-semibold tracking-wide text-gray-700">
          First Look
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          NIKE AIR MAX PULSE
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          — designed to push you past your limits and help you go to the max.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Notify Me
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Shop Air Max
          </a>
        </div>
      </div>
    </section>
  );
}

export default AirMaxIntro;