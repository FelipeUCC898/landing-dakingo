import { Heart, Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-[var(--primary)]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dakingo
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[var(--primary)] text-white p-2 rounded-md hover:bg-[var(--primary-dark)] transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              <User size={20} />
              <span className="text-sm font-medium">Login/Signup</span>
            </button>
            <button className="relative p-2 hover:bg-[var(--secondary)] rounded-lg transition-colors">
              <ShoppingCart size={20} className="text-[var(--foreground)]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--primary)] rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center justify-between pb-4 border-t border-[var(--border)] pt-4">
          <div className="flex gap-6 flex-1">
            <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
              Cakes
            </a>
            <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
              Theme Cakes
            </a>
            <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
              Desserts
            </a>
            <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
              Birthday
            </a>
            <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
              Hampers
            </a>
            <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
              Anniversary
            </a>
            <a href="#" className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
              Occasions
            </a>
          </div>
          <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold rounded-full px-6 py-2 transition-colors">
            ORDER NOW
          </button>
        </nav>
      </div>
    </header>
  );
}
