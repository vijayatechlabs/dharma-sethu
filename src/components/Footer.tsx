// ─────────────────────────────────────────────────────
// Inline SVG icons & decorative elements
// ─────────────────────────────────────────────────────

/** Full-width lotus petal divider — maroon petals pointing up */
const LotusDivider = () => (
    <div className="footer-lotus-divider" aria-hidden="true">
        <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="footer-lotus-svg"
        >
            {/* Repeating petal pattern across full width */}
            {Array.from({ length: 20 }, (_, i) => {
                const x = i * 72;
                return (
                    <g key={i} transform={`translate(${x}, 0)`}>
                        {/* Centre tall petal */}
                        <path
                            d="M36 72 C30 56 28 38 36 18 C44 38 42 56 36 72Z"
                            fill="#6B1A1A"
                            opacity="0.85"
                        />
                        {/* Left petal */}
                        <path
                            d="M36 52 C26 46 12 44 6 52 C12 58 28 56 36 52Z"
                            fill="#6B1A1A"
                            opacity="0.65"
                        />
                        {/* Right petal */}
                        <path
                            d="M36 52 C46 46 60 44 66 52 C60 58 44 56 36 52Z"
                            fill="#6B1A1A"
                            opacity="0.65"
                        />
                        {/* Stamen dot */}
                        <circle cx="36" cy="40" r="2.5" fill="#C9A84C" opacity="0.5" />
                    </g>
                );
            })}
            {/* Gold base line */}
            <line x1="0" y1="72" x2="1440" y2="72" stroke="#C9A84C" strokeWidth="2" opacity="0.6" />
        </svg>
    </div>
);

/** Lotus mark for brand column */
const LotusLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M22 6 C19 13 18 20 22 28 C26 20 25 13 22 6Z"
            fill="currentColor" opacity="0.9" />
        <path d="M22 28 C16 22 8 19 4 24 C8 28 18 28 22 28Z"
            fill="currentColor" opacity="0.7" />
        <path d="M22 28 C28 22 36 19 40 24 C36 28 26 28 22 28Z"
            fill="currentColor" opacity="0.7" />
        <path d="M22 28 C15 21 12 12 16 6 C18 12 20 20 22 28Z"
            fill="currentColor" opacity="0.5" />
        <path d="M22 28 C29 21 32 12 28 6 C26 12 24 20 22 28Z"
            fill="currentColor" opacity="0.5" />
        <path d="M22 28 L22 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="22" cy="39" rx="7" ry="2.5" fill="currentColor" opacity="0.25" />
        <circle cx="22" cy="22" r="2.5" fill="currentColor" opacity="0.55" />
    </svg>
);

/** WhatsApp icon */
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.06L2 22l5.09-1.34A9.93 9.93 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.95 14.15c-.21.58-1.22 1.1-1.68 1.17-.44.06-.99.09-1.6-.1-.37-.11-.84-.27-1.44-.53-2.53-1.09-4.19-3.64-4.32-3.81-.13-.17-1.06-1.41-1.06-2.69s.67-1.9.91-2.16c.24-.26.52-.33.69-.33l.5.01c.16 0 .37-.06.58.44.21.51.72 1.76.78 1.89.07.13.11.28.02.45-.09.17-.13.27-.26.42-.13.15-.27.33-.39.44-.13.12-.27.25-.12.49.15.24.68 1.12 1.46 1.81.99.88 1.83 1.16 2.09 1.29.26.13.41.11.56-.07.15-.18.64-.75.81-1.01.17-.26.34-.21.57-.13.23.08 1.48.7 1.73.83.25.13.42.19.48.3.06.1.06.6-.15 1.18z" />
    </svg>
);

/** Instagram icon */
const InstagramIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

/** Facebook icon */
const FacebookIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.928-1.956 1.88v2.254h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
);

// ─────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────

const sevaLinks = [
    { label: "Archana", href: "#seva-archana" },
    { label: "Rudra Abhisheka", href: "#seva-rudra-abhisheka" },
    { label: "Sahasranama", href: "#seva-vishnu-sahasranama" },
    { label: "Kalasha Puja", href: "#seva-kalasha-puja" },
    { label: "Navagraha Homa", href: "#seva-navagraha-homa" },
];

const templeLinks = [
    { label: "Kadiri Narasimha Swamy", href: "#temples" },
    { label: "Lepakshi Veerabhadra", href: "#temples" },
    { label: "Rayadurgam", href: "#temples" },
    { label: "More Coming Soon", href: "#temples", muted: true },
];

const contactItems = [
    { icon: "📱", text: "WhatsApp: +91 XXXXXXXXXX", href: "https://wa.me/919999999999" },
    { icon: "📧", text: "seva@dharmasethu.in", href: "mailto:seva@dharmasethu.in" },
    { icon: "📍", text: "Anantapuramu, Andhra Pradesh, India", href: null },
];

// ─────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────

const Footer = () => (
    <>
        {/* ── Lotus petal divider (sits above the footer) ── */}
        <LotusDivider />

        <footer id="footer" className="footer-shell">
            {/* Gold top border is rendered via CSS border-top */}

            <div className="container mx-auto max-w-7xl px-6">
                {/* ── 4-column grid ── */}
                <div className="footer-grid">

                    {/* ── Col 1: Brand ── */}
                    <div className="footer-col">
                        {/* Logo mark + wordmark */}
                        <div className="footer-brand-row">
                            <LotusLogo className="footer-logo-icon" />
                            <span className="footer-wordmark">Dharma Sethu</span>
                        </div>

                        {/* Sanskrit tagline */}
                        <p className="footer-tagline">सेवा · श्रद्धा · संस्कृति</p>

                        {/* Legal entity */}
                        <p className="footer-entity">
                            A service of ViswaVardhan Vyapara OPC Pvt. Ltd.
                        </p>

                        {/* Gold micro-divider */}
                        <div className="footer-brand-divider" />

                        {/* Social icons */}
                        <div className="footer-social-row">
                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="WhatsApp"
                                id="footer-whatsapp-link"
                            >
                                <WhatsAppIcon className="footer-social-icon" />
                            </a>
                            <a
                                href="https://instagram.com/dharmasethu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Instagram"
                                id="footer-instagram-link"
                            >
                                <InstagramIcon className="footer-social-icon" />
                            </a>
                            <a
                                href="https://facebook.com/dharmasethu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Facebook"
                                id="footer-facebook-link"
                            >
                                <FacebookIcon className="footer-social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* ── Col 2: Our Sevas ── */}
                    <div className="footer-col">
                        <h3 className="footer-col-heading">Our Sevas</h3>
                        <ul className="footer-link-list">
                            {sevaLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="footer-nav-link">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Temples ── */}
                    <div className="footer-col">
                        <h3 className="footer-col-heading">Temples</h3>
                        <ul className="footer-link-list">
                            {templeLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className={`footer-nav-link${link.muted ? " footer-nav-link--muted" : ""}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: Contact ── */}
                    <div className="footer-col">
                        <h3 className="footer-col-heading">Contact</h3>
                        <ul className="footer-contact-list">
                            {contactItems.map((item) => (
                                <li key={item.text} className="footer-contact-item">
                                    <span className="footer-contact-icon" aria-hidden="true">
                                        {item.icon}
                                    </span>
                                    {item.href ? (
                                        <a href={item.href} className="footer-contact-link">
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="footer-contact-text">{item.text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* ── Bottom bar ── */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 Dharma Sethu · All Rights Reserved · Serving Sanatana Dharma
                    </p>
                </div>
            </div>
        </footer>
    </>
);

export default Footer;
