import { Cake, Utensils, Croissant, Cookie } from "lucide-react";

const categories = [
  { name: "CLASSIC", icon: Cake },
  { name: "GOURMET", icon: Utensils },
  { name: "DESSERTS", icon: Croissant },
  { name: "COOKIES", icon: Cookie },
];

export default function MenuSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[var(--secondary)] rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Menu
          </h3>
          <p className="text-[var(--foreground)] mb-8 text-sm md:text-base">
            What will you wish for?
          </p>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <Icon className="text-[var(--primary)] w-12 h-12 md:w-16 md:h-16 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base font-semibold text-[var(--primary)] text-center">
                    {category.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Quick Filter Icons */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <button className="p-3 bg-white rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors shadow-md">
              <Cake size={20} />
            </button>
            <button className="p-3 bg-white rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors shadow-md">
              <Utensils size={20} />
            </button>
            <button className="p-3 bg-white rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors shadow-md">
              <Croissant size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
