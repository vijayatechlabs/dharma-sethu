// ──────────────────────────────────────────────────
// Seva icon components — hand-drawn / sketch style
// ──────────────────────────────────────────────────

const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Centre petal */}
    <path d="M32 10 C29 18 28 26 32 34 C36 26 35 18 32 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.18"/>
    {/* Left petals */}
    <path d="M32 34 C27 28 18 24 12 28 C16 32 26 34 32 34Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.13"/>
    <path d="M32 34 C24 26 18 16 22 10 C24 16 28 26 32 34Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.10"/>
    {/* Right petals */}
    <path d="M32 34 C37 28 46 24 52 28 C48 32 38 34 32 34Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.13"/>
    <path d="M32 34 C40 26 46 16 42 10 C40 16 36 26 32 34Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.10"/>
    {/* Water & stem */}
    <path d="M32 34 L32 50" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M10 52 Q32 46 54 52" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
    {/* Stamen dot */}
    <circle cx="32" cy="28" r="2.5" fill="currentColor" opacity="0.5"/>
  </svg>
);

const ShivaLingamIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pitha (base) */}
    <ellipse cx="32" cy="52" rx="20" ry="5" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.12"/>
    {/* Avudaiyar (middle platform) */}
    <rect x="18" y="43" width="28" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.10"/>
    {/* Lingam shaft */}
    <path d="M24 43 C24 30 40 30 40 43" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.13"/>
    {/* Lingam top dome */}
    <path d="M24 33 C24 22 40 22 40 33" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.18"/>
    <ellipse cx="32" cy="22" rx="8" ry="5" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.20"/>
    {/* Water drip / abhisheka lines */}
    <path d="M32 8 L32 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M28 10 L28 15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6"/>
    <path d="M36 10 L36 15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6"/>
  </svg>
);

const DipaLampIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Flame */}
    <path d="M32 10 C31 15 29 18 30 22 C31 25 33 25 34 22 C35 18 33 15 32 10Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="currentColor" fillOpacity="0.25"/>
    <path d="M32 14 C32 17 31 20 32 22 C33 20 32 17 32 14Z" fill="currentColor" opacity="0.5"/>
    {/* Wick */}
    <line x1="32" y1="22" x2="32" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Oil cup / lamp bowl */}
    <path d="M22 26 Q22 36 32 38 Q42 36 42 26Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="currentColor" fillOpacity="0.14"/>
    {/* Spout */}
    <path d="M42 30 Q48 29 50 32 Q48 34 42 33" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="currentColor" fillOpacity="0.10"/>
    {/* Handle */}
    <path d="M22 30 L14 30" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="13" cy="30" r="1.5" fill="currentColor" opacity="0.5"/>
    {/* Stand */}
    <path d="M28 38 L26 48 Q32 50 38 48 L36 38" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="currentColor" fillOpacity="0.10"/>
    {/* Base plate */}
    <ellipse cx="32" cy="49" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.12"/>
    {/* Rays */}
    {[0,40,80,280,320].map((deg) => (
      <line key={deg}
        x1={32 + 14*Math.cos(deg*Math.PI/180)}
        y1={16 + 12*Math.sin(deg*Math.PI/180)}
        x2={32 + 18*Math.cos(deg*Math.PI/180)}
        y2={16 + 16*Math.sin(deg*Math.PI/180)}
        stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    ))}
  </svg>
);

const KalashaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coconut leaves */}
    <path d="M32 10 C28 8 22 10 20 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M32 10 C36 8 42 10 44 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M32 10 L32 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Kalasha body */}
    <path d="M24 16 C22 20 20 28 22 36 C24 42 28 46 32 46 C36 46 40 42 42 36 C44 28 42 20 40 16Z" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15"/>
    {/* Neck */}
    <rect x="26" y="14" width="12" height="4" rx="2" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.18"/>
    {/* Horizontal bands decoration */}
    <path d="M23 26 Q32 28 41 26" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M22 33 Q32 35 42 33" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    {/* Base */}
    <path d="M26 46 L24 52 Q32 55 40 52 L38 46" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="currentColor" fillOpacity="0.12"/>
    <ellipse cx="32" cy="53" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.10"/>
  </svg>
);

const HomaFireIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer flame */}
    <path d="M32 8 C26 16 22 22 24 30 C26 36 30 38 32 38 C34 38 38 36 40 30 C42 22 38 16 32 8Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="currentColor" fillOpacity="0.16"/>
    {/* Inner flame */}
    <path d="M32 16 C30 21 28 25 30 30 C31 33 33 33 34 30 C36 25 34 21 32 16Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.30"/>
    {/* Homa kunda (fire pit) - square */}
    <rect x="14" y="38" width="36" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.14"/>
    {/* Navagraha 9-dots — 3×3 grid */}
    {[0,1,2].map(row => [0,1,2].map(col => (
      <circle key={`${row}-${col}`}
        cx={22 + col*5} cy={41.5 + row*0}
        r="1.3" fill="currentColor" opacity="0.5"/>
    )))}
    {/* Ladles / samidha wood sticks */}
    <path d="M10 46 L20 42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    <path d="M54 46 L44 42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    {/* Base platform */}
    <rect x="10" y="46" width="44" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.10"/>
    {/* Sparks */}
    <circle cx="25" cy="14" r="1.2" fill="currentColor" opacity="0.4"/>
    <circle cx="39" cy="20" r="1" fill="currentColor" opacity="0.35"/>
    <circle cx="22" cy="22" r="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

const VishnuConchIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shankha (conch) body */}
    <path d="M20 36 C18 28 20 18 28 14 C36 10 44 16 44 26 C44 34 40 40 34 44 C30 46 24 44 22 40 Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="currentColor" fillOpacity="0.16"/>
    {/* Spiral lines inside conch */}
    <path d="M28 28 Q32 24 36 28 Q38 32 34 36 Q30 38 28 34 Q26 30 30 28" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.55"/>
    {/* Tip / spire */}
    <path d="M20 36 Q14 42 16 50 Q20 48 22 40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="currentColor" fillOpacity="0.12"/>
    {/* Opening */}
    <path d="M34 44 Q36 50 42 52" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    {/* Tulsi / lotus decoration above */}
    <path d="M32 8 C30 6 28 8 29 10 C30 12 32 12 32 10Z" fill="currentColor" opacity="0.4"/>
    <path d="M32 8 C34 6 36 8 35 10 C34 12 32 12 32 10Z" fill="currentColor" opacity="0.4"/>
    {/* Garuda wings hint */}
    <path d="M44 20 C48 18 52 20 50 24" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d="M20 20 C16 18 12 20 14 24" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.4"/>
  </svg>
);

// ──────────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────────

const sevas = [
  {
    id: "archana",
    name: "Archana",
    description: "Single or family name archana offered at the temple with full vidhi and prasad.",
    price: "₹200 onwards",
    icon: LotusIcon,
  },
  {
    id: "rudra-abhisheka",
    name: "Rudra Abhisheka",
    description: "Sacred water, milk & bilva leaf offering to Lord Shiva with Rudram chanting.",
    price: "₹500 onwards",
    icon: ShivaLingamIcon,
  },
  {
    id: "deepa-seva",
    name: "Deepa Seva",
    description: "Auspicious lamp lighting ceremony offered to the deity at the sanctum.",
    price: "₹300 onwards",
    icon: DipaLampIcon,
  },
  {
    id: "kalasha-puja",
    name: "Kalasha Puja",
    description: "Sacred pot ritual invoking all rivers & deities for new beginnings & prosperity.",
    price: "₹600 onwards",
    icon: KalashaIcon,
  },
  {
    id: "navagraha-homa",
    name: "Navagraha Homa",
    description: "Vedic fire ritual to pacify all nine planetary deities and remove doshas.",
    price: "₹1,100 onwards",
    icon: HomaFireIcon,
  },
  {
    id: "vishnu-sahasranama",
    name: "Vishnu Sahasranama",
    description: "1000 names of Lord Vishnu chanted with devotion for peace and liberation.",
    price: "₹400 onwards",
    icon: VishnuConchIcon,
  },
];

// ──────────────────────────────────────────────────
// Card
// ──────────────────────────────────────────────────

const SevaCard = ({
  seva,
}: {
  seva: (typeof sevas)[number];
}) => {
  const Icon = seva.icon;
  return (
    <div className="seva-card group" id={`seva-${seva.id}`}>
      {/* Top glow line */}
      <div className="seva-card-topline" />

      {/* Icon */}
      <div className="seva-icon-wrap">
        <Icon className="w-14 h-14 text-[#E87B2A]" />
      </div>

      {/* Name */}
      <h3 className="seva-card-title">{seva.name}</h3>

      {/* Divider */}
      <div className="seva-divider" />

      {/* Description */}
      <p className="seva-card-desc">{seva.description}</p>

      {/* Footer */}
      <div className="seva-card-footer">
        <span className="seva-price">{seva.price}</span>
        <a
          href={`#book-seva-${seva.id}`}
          className="seva-book-link"
          aria-label={`Book ${seva.name}`}
        >
          Book <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────
// Section
// ──────────────────────────────────────────────────

const OurSevasSection = () => {
  return (
    <section id="our-sevas" className="our-sevas-section">
      {/* Mandala watermark */}
      <div className="sevas-mandala-bg" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <div className="sevas-header">
          {/* Decorative Om */}
          <span className="sevas-om" aria-hidden="true">ॐ</span>
          <h2 className="sevas-title">Sacred Sevas We Facilitate</h2>
          <p className="sevas-shloka">यत्र पूजा तत्र शक्तिः</p>
          <div className="sevas-title-divider" />
        </div>

        {/* Card grid */}
        <div className="seva-grid">
          {sevas.map((seva) => (
            <SevaCard key={seva.id} seva={seva} />
          ))}
        </div>

        {/* CTA */}
        <div className="sevas-cta">
          <p className="font-sanskrit text-sm mb-5" style={{ color: 'hsl(43,52%,65%)', fontStyle: 'italic' }}>
            ॥ सेवा परमो धर्मः ॥
          </p>
          <a
            href="#book"
            className="sevas-cta-btn"
            id="sevas-book-all-btn"
          >
            Book a Seva via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurSevasSection;
