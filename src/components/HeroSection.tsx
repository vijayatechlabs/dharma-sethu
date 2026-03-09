const DiyaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3C12 3 10 6 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6 12 3 12 3Z"
      fill="currentColor" opacity="0.9" />
    <path d="M7 14C7 11.8 9.2 10 12 10C14.8 10 17 11.8 17 14L18 18C18 19 17 20 16 20H8C7 20 6 19 6 18L7 14Z"
      fill="currentColor" opacity="0.7" />
    <ellipse cx="12" cy="14" rx="5" ry="2" fill="currentColor" opacity="0.4" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Layer 1: Photo background ── */}
      {/*
        fetchpriority="high" + loading="eager" = browser treats this as LCP image.
        object-fit:cover + object-position styling is in index.css (.hero-photo).
        aria-hidden because alt text is redundant with the headline.
      */}
      <img
        src="/kashi-vishwanath-night.webp"
        alt="Kashi Vishwanath Temple illuminated golden spires at night, Varanasi"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        width={1920}
        height={1080}
        className="hero-photo"
        aria-hidden="true"
      />

      {/* ── Layer 2: Dark directional gradient overlay ── */}
      {/*
        Left/centre heavy (0.82–0.88) keeps text legible.
        Right side lighter (0.55) so the golden spires glow through.
      */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(160deg, rgba(26,10,0,0.82) 0%, rgba(61,13,13,0.88) 50%, rgba(26,10,0,0.55) 100%)",
        }}
      />

      {/* ── Layer 3: Saffron sacred-light radial glow ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(232,101,26,0.14) 0%, transparent 70%)",
        }}
      />

      {/* ── Layer 4: Mandala watermark (decorative, non-blocking) ── */}
      <div className="absolute inset-0 z-[4] flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          className="w-[480px] h-[480px] opacity-[0.06]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="180" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="30" stroke="#C9A84C" strokeWidth="0.5" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x2 = 200 + 180 * Math.cos(angle);
            const y2 = 200 + 180 * Math.sin(angle);
            return (
              <line key={i} x1="200" y1="200" x2={x2} y2={y2}
                stroke="#C9A84C" strokeWidth="0.3" />
            );
          })}
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={`p${i}`}
              cx="200" cy="80"
              rx="18" ry="50"
              stroke="#C9A84C" strokeWidth="0.4"
              fill="none"
              transform={`rotate(${i * 45} 200 200)`}
            />
          ))}
        </svg>
      </div>

      {/* ── Layer 5: Hero text content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-gold font-body text-xs md:text-sm tracking-[3px] uppercase mb-8">
          🙏 Connecting Devotees Worldwide to Sacred Temples of India
        </p>

        {/* Main headline — hero-headline class is the mobile CSS hook */}
        <h1
          className="hero-headline font-display text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.2] mb-6"
          style={{ color: "#FFF8F0" }}
        >
          Your Devotion,
          <br />
          Delivered to the Divine.
        </h1>

        {/* Sub-headline */}
        <p
          className="font-body text-base md:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: "rgba(255,248,240,0.85)" }}
        >
          Request pujas, Abhishekas, Archanas at temples across India — on your
          name, your gotram, from anywhere in the world.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-7 py-3 rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:scale-105 text-sm md:text-base">
            <DiyaIcon className="w-5 h-5" />
            Book a Seva Now
          </button>
          <button className="inline-flex items-center gap-2 border border-gold text-gold font-body font-semibold px-7 py-3 rounded-lg bg-transparent hover:bg-gold/10 transition-all duration-300 text-sm md:text-base">
            How It Works
          </button>
        </div>

        {/* Serving countries */}
        <p
          className="font-body text-xs md:text-sm tracking-wide"
          style={{ color: "rgba(255,248,240,0.5)" }}
        >
          Serving devotees across USA · UAE · Canada · Europe · Australia
        </p>
      </div>

      {/* ── Layer 6: Bottom lotus wave divider ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 120 L0 80 Q60 40 120 70 Q180 100 240 60 Q300 20 360 50 Q420 80 480 40 Q540 0 600 30 Q660 60 720 20 Q780 -10 840 30 Q900 70 960 30 Q1020 -10 1080 20 Q1140 50 1200 30 Q1260 10 1320 50 Q1380 80 1440 60 L1440 120 Z"
            fill="hsl(36, 90%, 96%)"
          />
          <path
            d="M0 85 Q60 45 120 75 Q180 105 240 65 Q300 25 360 55 Q420 85 480 45 Q540 5 600 35 Q660 65 720 25 Q780 -5 840 35 Q900 75 960 35 Q1020 -5 1080 25 Q1140 55 1200 35 Q1260 15 1320 55 Q1380 85 1440 65"
            stroke="#C9A84C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
