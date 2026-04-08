export default function Footer() {
  return (
    <>
      {/* FSSAI Banner */}
      <section className="bg-[var(--primary)] text-white py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center font-semibold">
            Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--foreground)] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dakingo</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Media & Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>NEED HELP</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Cancellation And Refund
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>MORE INFO</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Terms And Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Offers */}
            <div>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>MORE INFO</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Coupons & Offers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--secondary)] transition-colors">
                    Download App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap">
                SUBSCRIBE
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <span className="text-2xl">❓</span>
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Dakingo. All rights reserved. | Crafted with ❤️ for every celebration</p>
          </div>
        </div>
      </footer>
    </>
  );
}
