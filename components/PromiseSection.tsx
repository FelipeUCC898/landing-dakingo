import { Clock, Package, Zap, Sparkles } from "lucide-react";

const promises = [
  {
    icon: Clock,
    title: "ON-TIME DELIVERY",
    description: "We guarantee timely delivery",
  },
  {
    icon: Package,
    title: "500+ DESIGNS",
    description: "Endless customization options",
  },
  {
    icon: Zap,
    title: "2 CR+ ORDERS",
    description: "Trusted by millions",
  },
  {
    icon: Sparkles,
    title: "BAKED FRESH",
    description: "Made with the finest ingredients",
  },
];

export default function PromiseSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Our Promise
        </h2>
        <p className="text-[var(--muted-foreground)] mb-12">
          There&apos;s no secret spell - only honest the wark!
        </p>

        {/* Promises Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--primary)] flex items-center justify-center mb-4 hover:bg-[var(--secondary)] transition-colors">
                  <Icon className="text-[var(--primary)]" size={32} />
                </div>
                <h3 className="font-bold text-[var(--foreground)] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {promise.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {promise.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Magical Ticket Section */}
        <div className="bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Ticket Image */}
          <div className="flex-shrink-0">
            <div className="text-6xl">🎫</div>
          </div>

          {/* Ticket Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              THE MAGICAL TICKET
            </h3>
            <p className="text-[var(--foreground)] mb-4">
              Add 3 reminders in your account. Win offers worth Rs. 750
            </p>
            <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              UNLOCK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
