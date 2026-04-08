export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] py-12 md:py-20 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Circular background */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_hero_chocolate_cake-BC8NqsgCBzqmMYraCazLuP.webp"
                  alt="Decadent Chocolate Bliss"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              DECADENT<br />CHOCOLATE<br />BLISS!
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Satisfy Your Sweetest Cravings
            </p>

            {/* Special Offer Badge */}
            <div className="inline-block mb-8">
              <div className="bg-[var(--primary-dark)] rounded-full px-6 py-3 flex items-center gap-3">
                <span className="text-sm font-semibold text-white">Special Offer</span>
                <span className="text-2xl font-bold text-white">SAVE 20%</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-[var(--primary)] hover:bg-[var(--secondary)] font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              ORDER NOW
            </button>

            {/* Decorative text */}
            <p className="text-white/60 mt-8 italic text-sm">
              ✨ Limited time offer - Don&apos;t miss out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
