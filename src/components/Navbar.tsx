import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#centraline", label: "Programmazioni centraline" },
  { href: "#posttrattamento", label: "Post-trattamento" },
  { href: "#clima", label: "Climatizzazione" },
  { href: "#settori", label: "Settori" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#Faq", label: "FAQ" },          // <--- nuovo
  { href: "#chisiamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // blocca lo scroll quando il menù mobile è aperto
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR FISSA */}
      <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[#020817e6] to-[#020817aa] backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
          {/* Logo + posizione */}
          <div className="flex flex-shrink-0 items-center gap-3">
            <a href="#top" className="flex items-center">
              <img
                src="/img/logo-teknos.png"
                alt="Teknos"
                className="h-8 w-auto"
              />
            </a>
            <div className="hidden sm:flex items-center gap-1 text-xs text-white/70">
              <MapPin size={14} className="text-teknos-blue" />
              <span>Serdiana (SU) · Sud Sardegna</span>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex flex-1 justify-center gap-5 lg:gap-7 text-sm font-medium">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-teknos-blue transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* BOTTONE DESKTOP “CHIAMA SUBITO” */}
          <a
            href="tel:+39070743134"
            className="hidden md:inline-flex flex-shrink-0 items-center rounded-full bg-teknos-blue px-4 py-2 text-xs lg:text-sm font-semibold text-teknos-deep shadow whitespace-nowrap"
          >
            Chiama subito
          </a>

          {/* HAMBURGER MOBILE */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden ml-auto"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* SPAZIO sotto la navbar */}
      <div className="h-16" />

      {/* MENÙ MOBILE A TENDINA */}
      {open && (
        <div
          className="
            fixed inset-0 top-16 z-30
            overflow-y-auto
            bg-[#020817f5]
            bg-[url('/img/bg-circuit.jpg')]
            bg-cover bg-center bg-no-repeat
            bg-blend-overlay
          "
        >
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

          <nav className="relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 animate-fadeIn">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full rounded-2xl bg-black/40 px-4 py-4 text-left text-base font-semibold text-white/90 border border-white/5 hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <a
              href="tel:+39070743134"
              className="mt-4 w-full rounded-2xl bg-teknos-blue px-4 py-3 text-center text-base font-semibold text-teknos-deep shadow"
              onClick={() => setOpen(false)}
            >
              Chiama subito
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
