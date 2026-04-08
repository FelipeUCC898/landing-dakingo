export default function Footer() {
  return (
    <section className="py-8 md:py-12 border-t border-[#8b2e3d]/10">
      {/* FSSAI Banner */}
      <div className="bg-[#8b2e3d] text-white py-4 px-6 rounded-full mb-8 text-center">
        <p className="font-semibold text-sm md:text-base">
          Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
        </p>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
        {/* Dakingo */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#8b2e3d]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dakingo</h3>
          <ul className="space-y-2 text-sm text-[#8b2e3d]/70">
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Locate Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Know Us */}
        <div>
          <h3 className="font-bold mb-4 text-[#8b2e3d] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>KNOW US</h3>
          <ul className="space-y-2 text-sm text-[#8b2e3d]/70">
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="font-bold mb-4 text-[#8b2e3d] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>NEED HELP?</h3>
          <ul className="space-y-2 text-sm text-[#8b2e3d]/70">
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Cancellation And Refund
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* More Info 1 */}
        <div>
          <h3 className="font-bold mb-4 text-[#8b2e3d] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>MORE INFO</h3>
          <ul className="space-y-2 text-sm text-[#8b2e3d]/70">
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Terms And Gifting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Customer Grievance
              </a>
            </li>
          </ul>
        </div>

        {/* More Info 2 */}
        <div>
          <h3 className="font-bold mb-4 text-[#8b2e3d] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>MORE INFO</h3>
          <ul className="space-y-2 text-sm text-[#8b2e3d]/70">
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Coupons & Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#8b2e3d] transition-colors">
                Download App
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="flex-1 max-w-md w-full">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-6 py-3 rounded-full bg-white text-[#8b2e3d] placeholder-[#8b2e3d]/40 border border-[#8b2e3d]/20 focus:outline-none focus:border-[#8b2e3d] transition-colors"
          />
        </div>
        <button className="bg-[#8b2e3d] hover:bg-[#6d2330] text-white font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap text-sm">
          SUBSCRIBE
        </button>
        <button className="p-2 hover:bg-[#8b2e3d]/10 rounded-full transition-colors flex items-center gap-2">
          <span className="text-2xl">❓</span>
          <span className="text-[#8b2e3d] text-sm hidden md:inline">Hey, need any help?</span>
        </button>
      </div>
    </section>
  );
}
