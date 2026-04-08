import { Clock, Package, Zap, Sparkles } from "lucide-react";

const promises = [
  {
    icon: Clock,
    title: "ON-TIME DELIVERY",
    description: "We guarantee timely delivery",
  },
  {
    icon: Package,
    title: "500+ DESIGNS",
    description: "Endless customization options",
  },
  {
    icon: Zap,
    title: "2 CR+ ORDERS",
    description: "Trusted by millions",
  },
  {
    icon: Sparkles,
    title: "BAKED FRESH",
    description: "Made with the finest ingredients",
  },
];

export default function PromiseSection() {
  const galleryImages = [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Royal Cake",
      text: "ROYAL CAKE"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_artisan-783RPvS2fDHQQYwjKvLSvE.webp",
      alt: "Kailash",
      text: "KAILASH"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Perfect for Every Moment",
      text: "PERFECT FOR EVERY MOMENT"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_artisan-783RPvS2fDHQQYwjKvLSvE.webp",
      alt: "Chocolate Occasions",
      text: "Chocolate Occasions"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Happy Moments",
      text: "Happy Moments"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_artisan-783RPvS2fDHQQYwjKvLSvE.webp",
      alt: "Award Winning",
      text: "GRAND CELEBRATIONS"
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#8b2e3d] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Our Promise
      </h2>
      <p className="text-[#8b2e3d]/70 mb-8 text-base md:text-lg italic">
        There&apos;s no secret spell - only honest the wark!
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Icons and Ticket */}
        <div className="lg:w-1/2">
          {/* Background box for icons */}
          <div className="bg-[#f5e6d3] rounded-3xl p-8 mb-8">
            {/* Tagline */}
            <p className="text-[#8b2e3d]/60 mb-6 text-sm italic">
              A glimpse no secret spell - only hocial world!
            </p>

            {/* Promises Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {promises.map((promise, index) => {
                const Icon = promise.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#8b2e3d] flex items-center justify-center mb-3 hover:bg-[#8b2e3d]/5 transition-colors bg-white">
                      <Icon className="text-[#8b2e3d]" size={28} />
                    </div>
                    <h3 className="font-bold text-[#8b2e3d] text-xs md:text-sm leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {promise.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Magical Ticket Section */}
          <div className="bg-gradient-to-r from-[#f5e6d3] to-[#fef3e8] rounded-3xl p-6 md:p-8 flex items-center gap-6 border border-[#8b2e3d]/10">
            {/* Ticket Image with confetti */}
            <div className="flex-shrink-0 relative">
              <div className="text-5xl md:text-6xl">🎫</div>
              <div className="absolute -top-2 -left-2 text-2xl">🎉</div>
              <div className="absolute -bottom-1 -right-1 text-xl">✨</div>
            </div>

            {/* Ticket Content */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#8b2e3d] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                THE MAGICAL TICKET
              </h3>
              <p className="text-[#8b2e3d]/80 mb-4 text-xs md:text-sm">
                Add 3 reminders in your account. Win offers worth Rs. 750
              </p>
              <button className="bg-[#8b2e3d] hover:bg-[#6d2330] text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-xs md:text-sm">
                UNLOCK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Gallery Grid */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-40 md:h-48"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <p className="text-white text-xs md:text-sm font-semibold">
                    {image.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
