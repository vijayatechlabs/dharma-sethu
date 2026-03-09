const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base layer — dark maroon */}
      <div className="absolute inset-0 bg-[#3D0D0D]" />

      {/* Temple silhouette layer */}
      <div className="absolute inset-0 flex items-end justify-center">
        <svg
          viewBox="0 0 1200 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[1400px] opacity-100"
          preserveAspectRatio="xMidYMax meet"
          style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%)' }}
        >
          {/* Central main tower (Vimana) */}
          <path d="M560 700 L560 280 L570 240 L580 200 L590 170 L600 140 L610 170 L620 200 L630 240 L640 280 L640 700 Z" fill="#5C1515" />
          {/* Tower tiers */}
          <rect x="555" y="300" width="90" height="8" rx="2" fill="#5C1515" />
          <rect x="560" y="270" width="80" height="6" rx="2" fill="#5C1515" />
          <rect x="565" y="245" width="70" height="5" rx="2" fill="#5C1515" />
          <rect x="570" y="222" width="60" height="5" rx="2" fill="#5C1515" />
          <rect x="575" y="200" width="50" height="4" rx="2" fill="#5C1515" />
          {/* Kalasam (top finial) */}
          <ellipse cx="600" cy="135" rx="6" ry="8" fill="#5C1515" />
          <line x1="600" y1="127" x2="600" y2="115" stroke="#5C1515" strokeWidth="3" />
          <ellipse cx="600" cy="112" rx="4" ry="5" fill="#5C1515" />

          {/* Left secondary tower */}
          <path d="M420 700 L420 380 L430 340 L440 310 L450 290 L460 310 L470 340 L480 380 L480 700 Z" fill="#5C1515" />
          <rect x="418" y="390" width="64" height="6" rx="2" fill="#5C1515" />
          <rect x="422" y="365" width="56" height="5" rx="2" fill="#5C1515" />
          <rect x="426" y="342" width="48" height="4" rx="2" fill="#5C1515" />
          <ellipse cx="450" cy="285" rx="5" ry="6" fill="#5C1515" />

          {/* Right secondary tower */}
          <path d="M720 700 L720 380 L730 340 L740 310 L750 290 L760 310 L770 340 L780 380 L780 700 Z" fill="#5C1515" />
          <rect x="718" y="390" width="64" height="6" rx="2" fill="#5C1515" />
          <rect x="722" y="365" width="56" height="5" rx="2" fill="#5C1515" />
          <rect x="726" y="342" width="48" height="4" rx="2" fill="#5C1515" />
          <ellipse cx="750" cy="285" rx="5" ry="6" fill="#5C1515" />

          {/* Left outer small tower */}
          <path d="M310 700 L310 460 L318 430 L326 410 L334 430 L342 460 L342 700 Z" fill="#4A1212" />
          <ellipse cx="326" cy="405" rx="4" ry="5" fill="#4A1212" />

          {/* Right outer small tower */}
          <path d="M858 700 L858 460 L866 430 L874 410 L882 430 L890 460 L890 700 Z" fill="#4A1212" />
          <ellipse cx="874" cy="405" rx="4" ry="5" fill="#4A1212" />

          {/* Connecting walls */}
          <rect x="342" y="520" width="78" height="180" fill="#4A1212" />
          <rect x="480" y="480" width="80" height="220" fill="#4A1212" />
          <rect x="640" y="480" width="80" height="220" fill="#4A1212" />
          <rect x="780" y="520" width="78" height="180" fill="#4A1212" />

          {/* Wall arches */}
          <path d="M370 700 L370 580 Q390 550 410 580 L410 700 Z" fill="#3D0D0D" />
          <path d="M500 700 L500 560 Q530 520 560 560 L560 700 Z" fill="#3D0D0D" />
          <path d="M640 700 L640 560 Q670 520 700 560 L700 700 Z" fill="#3D0D0D" />
          <path d="M800 700 L800 580 Q820 550 840 580 L840 700 Z" fill="#3D0D0D" />

          {/* Base platform */}
          <rect x="280" y="690" width="640" height="10" rx="2" fill="#5C1515" />

          {/* Far background small domes */}
          <path d="M180 700 L180 560 Q200 530 220 560 L220 700 Z" fill="#3D0D0D" opacity="0.6" />
          <path d="M980 700 L980 560 Q1000 530 1020 560 L1020 700 Z" fill="#3D0D0D" opacity="0.6" />
        </svg>
      </div>

      {/* Saffron radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(232,101,26,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Mandala watermark behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[500px] h-[500px] opacity-[0.06]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="30" stroke="#C9A84C" strokeWidth="0.5" />
          {/* Radial lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x2 = 200 + 180 * Math.cos(angle);
            const y2 = 200 + 180 * Math.sin(angle);
            return <line key={i} x1="200" y1="200" x2={x2} y2={y2} stroke="#C9A84C" strokeWidth="0.3" />;
          })}
          {/* Petal shapes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = i * 45;
            return (
              <ellipse
                key={`p${i}`}
                cx="200"
                cy="80"
                rx="18"
                ry="50"
                stroke="#C9A84C"
                strokeWidth="0.4"
                fill="none"
                transform={`rotate(${angle} 200 200)`}
              />
            );
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <p
          className="text-gold font-body text-xs md:text-sm tracking-[3px] uppercase mb-8"
        >
          🙏 Connecting Devotees Worldwide to Sacred Temples of India
        </p>

        {/* Main headline */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.2] mb-6"
          style={{ color: '#FFF8F0' }}
        >
          Your Devotion,
          <br />
          Delivered to the Divine.
        </h1>

        {/* Sub-headline */}
        <p
          className="font-body text-base md:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: 'rgba(255,248,240,0.85)' }}
        >
          Request pujas, Abhishekas, Archanas at temples across India — on your name, your gotram, from anywhere in the world.
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

        {/* Serving text */}
        <p
          className="font-body text-xs md:text-sm tracking-wide"
          style={{ color: 'rgba(255,248,240,0.5)' }}
        >
          Serving devotees across USA · UAE · Canada · Europe · Australia
        </p>
      </div>

      {/* Bottom lotus divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          {/* Lotus petal wave */}
          <path
            d="M0 120 L0 80 Q60 40 120 70 Q180 100 240 60 Q300 20 360 50 Q420 80 480 40 Q540 0 600 30 Q660 60 720 20 Q780 -10 840 30 Q900 70 960 30 Q1020 -10 1080 20 Q1140 50 1200 30 Q1260 10 1320 50 Q1380 80 1440 60 L1440 120 Z"
            fill="hsl(36, 90%, 96%)"
          />
          {/* Accent line */}
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

const DiyaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3C12 3 10 6 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6 12 3 12 3Z" fill="currentColor" opacity="0.9" />
    <path d="M7 14C7 11.8 9.2 10 12 10C14.8 10 17 11.8 17 14L18 18C18 19 17 20 16 20H8C7 20 6 19 6 18L7 14Z" fill="currentColor" opacity="0.7" />
    <ellipse cx="12" cy="14" rx="5" ry="2" fill="currentColor" opacity="0.4" />
  </svg>
);

export default HeroSection;
