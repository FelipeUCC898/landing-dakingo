import { Cake, Utensils, Croissant, Cookie } from "lucide-react";

const categories = [
  { name: "CLASSIC", icon: Cake },
  { name: "GOURMET", icon: Utensils },
  { name: "DESSERTS", icon: Croissant },
  { name: "COOKIES", icon: Cookie },
];

export default function MenuSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left: Title and Icons */}
        <div className="flex-shrink-0">
          <h3 className="text-3xl md:text-4xl font-bold text-[#8b2e3d] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Menu
          </h3>
          <p className="text-[#8b2e3d]/70 mb-6 text-base md:text-lg">
            What will you wish for?
          </p>

          {/* Quick Filter Icons */}
          <div className="flex gap-3">
            <button className="p-3 bg-[#f5e6d3] rounded-full hover:bg-[#8b2e3d] hover:text-white transition-colors shadow-sm border border-[#8b2e3d]/10">
              <Cake size={20} className="text-[#8b2e3d]" />
            </button>
            <button className="p-3 bg-[#f5e6d3] rounded-full hover:bg-[#8b2e3d] hover:text-white transition-colors shadow-sm border border-[#8b2e3d]/10">
              <Utensils size={20} className="text-[#8b2e3d]" />
            </button>
            <button className="p-3 bg-[#f5e6d3] rounded-full hover:bg-[#8b2e3d] hover:text-white transition-colors shadow-sm border border-[#8b2e3d]/10">
              <Croissant size={20} className="text-[#8b2e3d]" />
            </button>
          </div>
        </div>

        {/* Right: Category Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="flex flex-col items-center justify-center p-6 bg-[#f5e6d3] rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group border border-[#8b2e3d]/10"
                >
                  <Icon className="text-[#8b2e3d] w-12 h-12 md:w-16 md:h-16 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base font-semibold text-[#8b2e3d] text-center">
                    {category.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
