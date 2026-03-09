const stats = [
  { number: "3+", label: "Pilot Temples" },
  { number: "7+", label: "Seva Types" },
  { number: "100%", label: "Proof Delivered" },
  { number: "🕉️", label: "Dharma First" },
];

const TrustBar = () => {
  return (
    <section className="relative border-y border-gold/40 bg-gold/[0.15]">
      <div className="container mx-auto px-6 py-6 md:py-5">
        {/* Desktop: single row */}
        <div className="hidden md:flex items-center justify-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex flex-col items-center px-10 lg:px-14">
                <span className="font-display text-2xl lg:text-3xl text-primary font-bold">
                  {stat.number}
                </span>
                <span className="font-body text-xs lg:text-sm text-secondary mt-1 tracking-wide">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-10 bg-gold/40 shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-2">
              <span className="font-display text-2xl text-primary font-bold">
                {stat.number}
              </span>
              <span className="font-body text-xs text-secondary mt-1 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
