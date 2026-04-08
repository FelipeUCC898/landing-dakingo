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
    <section className="py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#8b2e3d] mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Bestsellers from Across the Country
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden h-40 md:h-48 bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Heart Button */}
              <button className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-lg hover:bg-[#8b2e3d] hover:text-white transition-colors">
                <Heart size={16} className="text-[#8b2e3d]" />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-3 md:p-4">
              <h3 className="font-semibold text-[#8b2e3d] mb-2 text-xs md:text-sm line-clamp-2">
                {product.name}
              </h3>

              {/* Price and Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-base md:text-lg font-bold text-[#8b2e3d]">
                  {product.price}
                </span>
                <span className="text-xs text-gray-500">
                  ★ {product.rating}
                </span>
              </div>

              {/* Add Button */}
              <button className="w-full bg-[#8b2e3d] text-white rounded-full py-2 text-xs md:text-sm font-semibold hover:bg-[#6d2330] transition-colors">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-end">
        <button className="bg-[#8b2e3d] hover:bg-[#6d2330] text-white font-semibold rounded-full px-8 py-3 transition-colors text-sm">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
