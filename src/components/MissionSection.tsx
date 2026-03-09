// ─────────────────────────────────────────────────────
// Decorative right-side element:
//   - Large "ॐ" symbol in golden glow
//   - 4 radiating ripple sound-wave circles
//   - Pure CSS animation, no JS required
// ─────────────────────────────────────────────────────

const OmRipple = () => (
    <div className="om-ripple-container" aria-hidden="true">
        {/* Sound-wave ripple circles — staggered delays */}
        <div className="om-ripple-wave om-ripple-wave--1" />
        <div className="om-ripple-wave om-ripple-wave--2" />
        <div className="om-ripple-wave om-ripple-wave--3" />
        <div className="om-ripple-wave om-ripple-wave--4" />

        {/* The ॐ symbol — sits above the ripples */}
        <span className="om-symbol">ॐ</span>
    </div>
);

// ─────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────

const MissionSection = () => (
    <section id="mission" className="mission-section relative overflow-hidden bg-[#3D0D0D]">
        {/* ── Layer 1: Ram Mandir Photo ── */}
        <img
            src="/ram-mandir.webp"
            alt="Ayodhya Ram Mandir front view at daytime"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover object-[center_top] z-0"
            aria-hidden="true"
        />

        {/* ── Layer 2: Warm Saffron Gradient Overlay ── */}
        <div
            className="absolute inset-0 z-[1]"
            style={{
                background:
                    "linear-gradient(to right, rgba(232,101,26,0.88) 0%, rgba(107,26,26,0.82) 50%, rgba(26,10,0,0.75) 100%)",
            }}
        />

        {/* Subtle noise / grain texture overlay */}
        <div className="mission-overlay" style={{ zIndex: 2 }} aria-hidden="true" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="mission-grid">

                {/* ── Left: text column ── */}
                <div className="mission-text-col">
                    {/* Label */}
                    <span className="mission-label">Our Dharma</span>

                    {/* Headline */}
                    <h2 className="mission-headline">
                        Not Just a Service.{" "}
                        <em className="mission-headline-em">A Seva.</em>
                    </h2>

                    {/* Gold divider */}
                    <div className="mission-divider" />

                    {/* Body */}
                    <p className="mission-body">
                        Dharma Sethu was born from a simple belief — every Hindu devotee,
                        wherever they live in this world, deserves the right to connect
                        with their sacred temples. We are not a booking platform. We are a
                        bridge of faith. A portion of every booking supports VHP temple
                        services, goshalas, and Hindu cultural events.
                    </p>

                    {/* CTA link */}
                    <a
                        href="#about"
                        className="mission-cta"
                        id="mission-learn-more-link"
                    >
                        Learn About Our Mission →
                    </a>

                    {/* Bottom shloka accent */}
                    <p className="mission-shloka">॥ धर्मो रक्षति रक्षितः ॥</p>
                </div>

                {/* ── Right: ॐ with radiating ripples ── */}
                <div className="mission-art-col" aria-hidden="true">
                    <OmRipple />
                </div>

            </div>
        </div>
    </section>
);

export default MissionSection;
