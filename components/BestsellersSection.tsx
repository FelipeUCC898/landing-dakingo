import { Heart, Star } from "lucide-react";

const bestsellers = [
  {
    id: 1,
    name: "Rich Chocolate Truffle Cake",
    price: "₹599",
    rating: 4.8,
    reviews: 156,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_bestseller_1-WswQCbcAriVseSC47d8fFv.webp",
  },
  {
    id: 2,
    name: "Choco Chip Truffle Cake",
    price: "₹599",
    rating: 4.7,
    reviews: 142,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_bestseller_2-ZYhDjuWU2dRqRWpLkg3tJF.webp",
  },
  {
    id: 3,
    name: "Tropical Fruit N Almond Cake",
    price: "₹599",
    rating: 4.9,
    reviews: 168,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_bestseller_1-WswQCbcAriVseSC47d8fFv.webp",
  },
  {
    id: 4,
    name: "Rich Butterscotch Crunch Cake",
    price: "₹599",
    rating: 4.6,
    reviews: 134,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523130590/MSgSvmfqHmeNje5V2neXK6/dakingo_bestseller_2-ZYhDjuWU2dRqRWpLkg3tJF.webp",
  },
];

export default function BestsellersSection() {
  return (
    <section className="bg-[var(--secondary)] py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Bestsellers from Across the Country
        </h2>
        <p className="text-[var(--muted-foreground)] mb-12">
          Our most loved cakes by customers nationwide
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-56 bg-[var(--background)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Heart Button */}
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-[var(--primary)] hover:text-white transition-colors">
                  <Heart size={18} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--foreground)] mb-2 text-sm line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[var(--primary)]">
                    {product.price}
                  </span>
                  <button className="bg-[var(--primary)] text-white rounded-full p-2 hover:bg-[var(--primary-dark)] transition-colors">
                    <Heart size={16} className="fill-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold rounded-full px-8 py-6 transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}
