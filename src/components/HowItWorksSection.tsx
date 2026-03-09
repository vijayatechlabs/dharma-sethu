const steps = [
  {
    number: "1",
    title: "Send Your Request",
    description: "WhatsApp us your seva, temple preference, name, gotram, and occasion",
    icon: "whatsapp"
  },
  {
    number: "2",
    title: "We Confirm & Schedule",
    description: "Our team coordinates with the temple priest and confirms your slot within 24 hours",
    icon: "temple"
  },
  {
    number: "3",
    title: "Puja Performed",
    description: "The priest performs your puja with full vidhi, in your name, at the sacred temple",
    icon: "video"
  },
  {
    number: "4",
    title: "Receive Proof & Blessings",
    description: "Get a video and photos of your puja on WhatsApp. Divine blessings, delivered.",
    icon: "check"
  }
];

const LotusSmall = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 8C20 8 17 13 17 18C17 21 18.5 23 20 24C21.5 23 23 21 23 18C23 13 20 8 20 8Z" fill="currentColor" opacity="0.9" />
    <path d="M20 24C18 23 13 22 11 18C10 16 10 14 11 12C12 14 15 20 20 24Z" fill="currentColor" opacity="0.7" />
    <path d="M20 24C22 23 27 22 29 18C30 16 30 14 29 12C28 14 25 20 20 24Z" fill="currentColor" opacity="0.7" />
    <ellipse cx="20" cy="26" rx="5" ry="2" fill="currentColor" opacity="0.3" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.1" />
    <path d="M24 8C15.2 8 8 15.2 8 24C8 26.8 8.8 29.4 10.2 31.6L8.4 38.4L15.4 36.6C17.6 37.8 20.2 38.6 23 38.6C31.8 38.6 39 31.4 39 22.6C39 18.4 37.2 14.6 34.2 11.6C31.2 8.8 27.4 7 23 7" fill="currentColor" opacity="0.2" />
    <path d="M19 16C18.6 16 17.8 16.2 17.2 16.8C16.6 17.4 15 18.8 15 21.6C15 24.4 17.2 27 17.4 27.4C17.6 27.8 21 33.2 26.4 35.4C30.8 37.2 31.8 36.8 32.8 36.6C33.8 36.4 36 35.2 36.4 33.8C36.8 32.4 36.8 31.2 36.6 31C36.4 30.8 36 30.6 35.4 30.4C34.8 30.2 32 28.8 31.4 28.6C30.8 28.4 30.4 28.2 30 28.8C29.6 29.4 28.6 30.6 28.2 31C27.8 31.4 27.4 31.4 26.8 31.2C26.2 31 24.4 30.4 22.2 28.4C20.4 26.8 19.2 25 18.8 24.4C18.4 23.8 18.8 23.4 19 23.2C19.4 22.8 19.8 22.2 20 21.8C20.2 21.4 20.2 21 20 20.8C19.8 20.6 18.6 17.8 18.2 16.8C17.8 16 17.4 16 17 16C16.6 16 16.2 16 15.8 16C15.4 16 14.8 16.2 14.2 16.8" fill="currentColor" />
  </svg>
);

const TempleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.1" />
    <path d="M24 10L24 16L26 14L28 12L30 14L28 16L24 20L20 16L18 14L20 12L22 14L24 16L24 10Z" fill="currentColor" />
    <path d="M14 24L16 20L20 18L24 20L28 18L32 20L34 24L34 36L30 36L30 28L26 28L26 36L22 36L22 28L18 28L18 36L14 36L14 24Z" fill="currentColor" opacity="0.8" />
    <rect x="12" y="36" width="24" height="2" fill="currentColor" />
    <ellipse cx="24" cy="11" rx="2" ry="2.5" fill="currentColor" opacity="0.6" />
  </svg>
);

const VideoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.1" />
    <rect x="10" y="16" width="22" height="16" rx="2" fill="currentColor" opacity="0.3" />
    <path d="M32 20L38 16V32L32 28V20Z" fill="currentColor" opacity="0.5" />
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M22 20L28 24L22 28V20Z" fill="currentColor" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.1" />
    <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
    <path d="M16 24L21 29L32 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 12C20 12 18 15 18 17C18 18.5 19 19.5 20 20C21 19.5 22 18.5 22 17C22 15 20 12 20 12Z" fill="currentColor" opacity="0.4" />
    <path d="M28 12C28 12 26 15 26 17C26 18.5 27 19.5 28 20C29 19.5 30 18.5 30 17C30 15 28 12 28 12Z" fill="currentColor" opacity="0.4" />
  </svg>
);

const ArrowConnector = () => (
  <div className="hidden lg:flex items-center justify-center px-4">
    <svg viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-6">
      <path d="M0 10 L50 10 M50 10 L45 5 M50 10 L45 15" stroke="hsl(22, 81%, 50%)" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="10" cy="10" r="1.5" fill="hsl(43, 52%, 54%)" opacity="0.6" />
      <circle cx="25" cy="10" r="1.5" fill="hsl(43, 52%, 54%)" opacity="0.4" />
      <circle cx="40" cy="10" r="1.5" fill="hsl(43, 52%, 54%)" opacity="0.6" />
    </svg>
  </div>
);

const HowItWorksSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "whatsapp":
        return <WhatsAppIcon className="w-16 h-16 text-primary" />;
      case "temple":
        return <TempleIcon className="w-16 h-16 text-primary" />;
      case "video":
        return <VideoIcon className="w-16 h-16 text-primary" />;
      case "check":
        return <CheckIcon className="w-16 h-16 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section id="how-it-works" className="relative py-20 px-6" style={{ backgroundColor: '#FDF6EC' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16">
          <LotusSmall className="w-10 h-10 text-gold mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary text-center mb-3">
            How Dharma Sethu Works
          </h2>
          <div className="w-24 h-0.5 bg-gold" />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-0">
          {steps.map((step, index) => (
            <>
              <div
                key={step.number}
                className="relative w-full max-w-xs lg:max-w-[240px] flex-shrink-0"
              >
                <div
                  className="relative bg-background border border-gold rounded-2xl p-6 h-full flex flex-col items-center text-center shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
                  style={{
                    clipPath: 'ellipse(50% 48% at 50% 50%)',
                    borderRadius: '1rem 1rem 50% 50% / 1rem 1rem 15% 15%'
                  }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 bg-primary/5">
                    <span className="font-display text-3xl font-bold text-primary">{step.number}</span>
                  </div>

                  <div className="mb-4">
                    {getIcon(step.icon)}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-secondary mb-3">
                    {step.title}
                  </h3>

                  <p className="font-body text-sm leading-relaxed" style={{ color: 'hsl(24, 60%, 30%)' }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && <ArrowConnector />}
            </>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-sanskrit text-sm text-gold mb-6">॥ सेवा परमो धर्मः ॥</p>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:scale-105">
            <WhatsAppIcon className="w-5 h-5" />
            Start Your Seva Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
