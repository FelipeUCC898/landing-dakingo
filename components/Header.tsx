import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#f5e6d3] sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-4xl font-bold text-[#8b2e3d]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dakingo
            </h1>
          </div>

          {/* Right Side: Search, Cart, Login */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-64 px-6 py-2 pr-12 rounded-full border border-[#8b2e3d]/20 bg-white text-[#8b2e3d] placeholder-[#8b2e3d]/40 focus:outline-none focus:ring-2 focus:ring-[#8b2e3d] text-sm"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#8b2e3d] text-white p-2 rounded-full hover:bg-[#6d2330] transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Cart Icon */}
            <button className="hover:opacity-80 transition-opacity">
              <ShoppingCart size={22} className="text-[#8b2e3d]" />
            </button>

            {/* Login/Signup */}
            <button className="hidden md:flex text-[#8b2e3d] hover:opacity-80 transition-opacity">
              <span className="text-sm">Login/Signup</span>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center justify-between pb-3 pt-2">
          <div className="flex gap-8 flex-1">
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Cakes
            </a>
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Theme Cakes
            </a>
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Desserts
            </a>
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Birthday
            </a>
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Hampers
            </a>
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Anniversary
            </a>
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Occasions
            </a>
            <a href="#" className="text-sm text-[#8b2e3d] hover:opacity-70 transition-opacity">
              Occasions
            </a>
          </div>
          <button className="bg-[#8b2e3d] hover:bg-[#6d2330] text-white font-bold rounded-full px-8 py-2.5 transition-colors text-sm uppercase shadow-md">
            ORDER NOW
          </button>
        </nav>
      </div>
    </header>
  );
}
