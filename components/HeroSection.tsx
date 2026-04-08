export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#c85a6e] via-[#d16b7a] to-[#b84d61] py-16 md:py-24 relative overflow-hidden">
      {/* Large decorative circles */}
      <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] bg-[#e08a98]/30 rounded-full blur-3xl"></div>
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#d97485]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-15%] left-[30%] w-[450px] h-[450px] bg-[#c96575]/25 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Main Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-white rounded-full p-4 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_hero_chocolate_cake-BC8NqsgCBzqmMYraCazLuP.webp"
                    alt="Decadent Chocolate Cake with Berries"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              DECADENT<br />
              CHOCOLATE<br />
              BLISS!
            </h2>
            
            {/* Decorative script text */}
            <div className="text-3xl md:text-4xl font-script text-[#e8a0ab] mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              &luxe&
            </div>

            <p className="text-xl md:text-2xl mb-8 text-white font-light">
              Satisfy Your Sweetest Cravings
            </p>

            {/* Special Offer Badge */}
            <div className="inline-block mb-6">
              <div className="bg-[#8b2e3d] rounded-full px-8 py-4 shadow-lg">
                <div className="text-center">
                  <div className="text-xs font-semibold text-white/90 mb-1">Special Offer</div>
                  <div className="text-3xl font-bold text-white">SAVE 20%</div>
                </div>
              </div>
            </div>

            {/* Small circular images on the right */}
            <div className="absolute right-0 top-0 flex flex-col gap-6 hidden lg:flex">
              <div className="w-32 h-32 bg-white rounded-full p-2 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_hero_chocolate_cake-BC8NqsgCBzqmMYraCazLuP.webp"
                    alt="Chocolate dessert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-32 h-32 bg-white rounded-full p-2 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_hero_chocolate_cake-BC8NqsgCBzqmMYraCazLuP.webp"
                    alt="Chocolate brownie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
