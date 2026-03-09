import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Our Sevas", href: "#sevas" },
  { label: "Temples", href: "#temples" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const LotusIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 8C32 8 26 18 26 28C26 34 28.5 38 32 40C35.5 38 38 34 38 28C38 18 32 8 32 8Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path
      d="M32 40C28 38 18 36 14 28C12 24 12 20 14 16C16 20 22 32 32 40Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M32 40C36 38 46 36 50 28C52 24 52 20 50 16C48 20 42 32 32 40Z"
      fill="currentColor"
      opacity="0.7"
    />
    <path
      d="M32 40C26 39 12 40 6 34C3 31 2 27 4 23C7 28 20 36 32 40Z"
      fill="currentColor"
      opacity="0.5"
    />
    <path
      d="M32 40C38 39 52 40 58 34C61 31 62 27 60 23C57 28 44 36 32 40Z"
      fill="currentColor"
      opacity="0.5"
    />
    <ellipse cx="32" cy="44" rx="8" ry="3" fill="currentColor" opacity="0.3" />
  </svg>
);

const DiyaIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3C12 3 10 6 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6 12 3 12 3Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path
      d="M7 14C7 11.8 9.2 10 12 10C14.8 10 17 11.8 17 14L18 18C18 19 17 20 16 20H8C7 20 6 19 6 18L7 14Z"
      fill="currentColor"
      opacity="0.7"
    />
    <ellipse cx="12" cy="14" rx="5" ry="2" fill="currentColor" opacity="0.4" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-gold/40 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_-4px_hsl(0_61%_26%/0.15)]" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <LotusIcon className="w-8 h-8 text-gold" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-primary">
              Dharma Sethu
            </span>
            <span className="font-sanskrit text-[10px] leading-tight text-gold not-italic">
              सेवा · श्रद्धा · संस्कृति
            </span>
          </div>
        </a>

        {/* Center nav — desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-secondary hover:text-secondary/80 relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Button
            className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-body font-semibold text-sm px-5 h-9 shadow-warm"
          >
            <DiyaIcon className="w-4 h-4 text-primary-foreground mr-1" />
            Book a Seva
          </Button>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-secondary"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-gold/30 w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col pt-8 gap-6">
                {/* Mobile logo */}
                <div className="flex items-center gap-2.5 px-2 mb-4">
                  <LotusIcon className="w-7 h-7 text-gold" />
                  <div className="flex flex-col leading-none">
                    <span className="font-display text-base tracking-wide text-primary">
                      Dharma Sethu
                    </span>
                    <span className="font-sanskrit text-[10px] text-gold not-italic">
                      सेवा · श्रद्धा · संस्कृति
                    </span>
                  </div>
                </div>

                <div className="gold-divider w-full" />

                {/* Nav links */}
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block font-body text-sm text-secondary hover:text-primary px-3 py-2.5 rounded-md hover:bg-primary/5 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="gold-divider w-full" />

                {/* Mobile CTA */}
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-body font-semibold text-sm mx-2 shadow-warm">
                  <DiyaIcon className="w-4 h-4 text-primary-foreground mr-1" />
                  Book a Seva
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
