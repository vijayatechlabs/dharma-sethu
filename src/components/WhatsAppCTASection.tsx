// ─────────────────────────────────────────────
// Inline SVG assets
// ─────────────────────────────────────────────

/** WhatsApp logo */
const WhatsAppLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M24 4C13 4 4 13 4 24C4 27.4 4.9 30.6 6.5 33.4L4 44L15 41.6C17.7 43 20.7 43.8 24 43.8C35 43.8 44 34.8 44 23.9C44 13 35 4 24 4Z"
            fill="white"
            fillOpacity="0.95"
        />
        <path
            d="M35.4 28.9C34.8 28.6 31.9 27.2 31.3 27C30.7 26.8 30.3 26.7 29.8 27.3C29.3 27.9 28.3 29.1 27.9 29.5C27.5 29.9 27.1 30 26.5 29.7C25.9 29.4 23.9 28.7 21.6 26.7C19.8 25.1 18.6 23.1 18.2 22.5C17.8 21.9 18.1 21.5 18.4 21.2C18.7 20.9 19.1 20.4 19.4 20C19.7 19.6 19.8 19.3 20 18.9C20.2 18.5 20.1 18.1 19.9 17.8C19.7 17.5 18.7 14.6 18.2 13.5C17.7 12.4 17.2 12.6 16.8 12.6H15.6C15.1 12.6 14.3 12.8 13.7 13.4C13.1 14 11.6 15.4 11.6 18.3C11.6 21.2 13.8 24 14.1 24.4C14.4 24.8 18.5 31.1 24.8 33.6C29.1 35.4 30.8 35.1 32 34.8C33.7 34.3 35.8 33 36.4 31.5C37 30 37 28.7 36.8 28.4C36.6 28.1 36 28.2 35.4 28.9Z"
            fill="#25D366"
        />
    </svg>
);

/** Lotus — same geometry as OurSevasSection, reused here */
const LotusFlank = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        {/* Centre petal */}
        <path d="M32 10 C29 18 28 26 32 34 C36 26 35 18 32 10Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
            fill="currentColor" fillOpacity="0.18" />
        {/* Left petals */}
        <path d="M32 34 C27 28 18 24 12 28 C16 32 26 34 32 34Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
            fill="currentColor" fillOpacity="0.13" />
        <path d="M32 34 C24 26 18 16 22 10 C24 16 28 26 32 34Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
            fill="currentColor" fillOpacity="0.10" />
        {/* Right petals */}
        <path d="M32 34 C37 28 46 24 52 28 C48 32 38 34 32 34Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
            fill="currentColor" fillOpacity="0.13" />
        <path d="M32 34 C40 26 46 16 42 10 C40 16 36 26 32 34Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
            fill="currentColor" fillOpacity="0.10" />
        {/* Stem */}
        <path d="M32 34 L32 50" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        {/* Water line */}
        <path d="M10 52 Q32 46 54 52" stroke="currentColor" strokeWidth="1.1"
            strokeLinecap="round" fill="none" opacity="0.45" />
        {/* Stamen */}
        <circle cx="32" cy="28" r="2.2" fill="currentColor" opacity="0.45" />
    </svg>
);

/** Corner flourish — tiny mandala arc with petal tips */
const CornerFlourish = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        {/* Quarter-arc rings */}
        <path d="M4 4 Q4 44 44 44" stroke="currentColor" strokeWidth="0.8"
            strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M8 4 Q8 40 44 40" stroke="currentColor" strokeWidth="0.6"
            strokeLinecap="round" fill="none" opacity="0.35" />
        {/* Petal tips at corner */}
        <path d="M4 4 C6 8 5 14 4 18 C8 14 14 15 18 14 C14 8 8 6 4 4Z"
            fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="4" cy="4" r="2.5" fill="currentColor" opacity="0.5" />
        {/* Small radial dots */}
        <circle cx="14" cy="6" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="6" cy="14" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="20" cy="10" r="0.8" fill="currentColor" opacity="0.2" />
        <circle cx="10" cy="20" r="0.8" fill="currentColor" opacity="0.2" />
    </svg>
);

// ─────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────

const WHATSAPP_URL = "https://wa.me/919999999999?text=Namaste%2C%20I%20would%20like%20to%20book%20a%20seva%20through%20Dharma%20Sethu.";

const WhatsAppCTASection = () => (
    <section id="book" className="wa-section">
        {/* ── Mandala watermark ── */}
        <div className="wa-mandala-bg" aria-hidden="true" />

        <div className="container mx-auto max-w-4xl px-6 relative z-10">
            {/* ── Gold border box ── */}
            <div className="wa-box" id="wa-cta-box">

                {/* Corner flourishes — one per corner */}
                <CornerFlourish className="wa-corner wa-corner-tl" />
                <CornerFlourish className="wa-corner wa-corner-tr" />
                <CornerFlourish className="wa-corner wa-corner-br" />
                <CornerFlourish className="wa-corner wa-corner-bl" />

                {/* ── Inner content ── */}
                <div className="wa-inner">

                    {/* Decorative Om */}
                    <span className="wa-om" aria-hidden="true">ॐ</span>

                    {/* Headline */}
                    <h2 className="wa-headline">
                        Begin Your Seva in 60 Seconds
                    </h2>

                    {/* Sub-text */}
                    <p className="wa-sub">
                        No app. No account. Just WhatsApp us your request and we handle everything.
                    </p>

                    {/* Gold thin divider */}
                    <div className="wa-divider" />

                    {/* ── Button row (lotus · button · lotus) ── */}
                    <div className="wa-btn-row">
                        <LotusFlank className="wa-lotus" />

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wa-btn"
                            id="whatsapp-cta-button"
                            aria-label="Message Dharma Sethu on WhatsApp"
                        >
                            <WhatsAppLogo className="wa-btn-logo" />
                            Message Us on WhatsApp
                        </a>

                        <LotusFlank className="wa-lotus wa-lotus-flip" />
                    </div>

                    {/* Availability note */}
                    <p className="wa-note">
                        Available Mon–Sat, 8 AM – 8 PM IST · Replies within 2 hours
                    </p>

                </div>
            </div>
        </div>
    </section>
);

export default WhatsAppCTASection;
