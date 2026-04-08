export default function GallerySection() {
  const images = [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Our Cakes",
      text: "Our Cakes"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_artisan-783RPvS2fDHQQYwjKvLSvE.webp",
      alt: "Artisan Crafted",
      text: "Artisan Crafted"
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Perfect for Every Moment",
      text: "WE'VE MADE PERFECT FOR EVERY MOMENT"
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
      alt: "Award Winning Creations",
      text: "AWARD WINNING CREATIONS"
    },
  ];

  return (
    <section className="py-8 md:py-12">
      {/* Gallery Grid - 3 columns */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-32 md:h-48"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Overlay text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
              <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Section */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"
            >
              <span className="text-xs">👤</span>
            </div>
          ))}
        </div>
        <p className="text-[#8b2e3d] font-semibold text-sm">Follow us on social!</p>
      </div>
    </section>
  );
}
