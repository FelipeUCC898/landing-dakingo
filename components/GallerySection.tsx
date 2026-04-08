export default function GallerySection() {
  const images = [
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Celebration Cake",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_artisan-783RPvS2fDHQQYwjKvLSvE.webp",
      alt: "Artisan Decoration",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Family Celebration",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_artisan-783RPvS2fDHQQYwjKvLSvE.webp",
      alt: "Cake Details",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_celebration-jRoCkqggan9izjfLQ6tfRi.webp",
      alt: "Celebration Moment",
    },
    {
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_gallery_artisan-783RPvS2fDHQQYwjKvLSvE.webp",
      alt: "Artisan Work",
    },
  ];

  return (
    <section className="bg-[var(--secondary)] py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Our Creations & Happy Moments
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center">
          <p className="text-[var(--foreground)] font-semibold mb-4">Follow us on social!</p>
          <div className="flex justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                className="w-12 h-12 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors flex items-center justify-center"
              >
                <span className="text-lg">👤</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
