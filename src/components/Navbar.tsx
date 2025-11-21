import { useState } from "react";

const navLinks = [
  { href: "#servizi", label: "Servizi" },
  { href: "#centraline", label: "Programmazioni centraline" },
  { href: "#post", label: "Post-trattamento" },
  { href: "#clima", label: "Climatizzazione" },
  { href: "#settori", label: "Settori" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-teknos-deep/95 backdrop-blur border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        {/* LOGO */}
        <a href="#top" className="flex items-center gap-2" onClick={close}>
          <img
            src="/img/logo-teknos.png"
            alt="Teknos"
            className="h-8 w-auto"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <a
            href="tel:+39070743134"
            className="inline-flex items-center gap-2 rounded-full bg-white text-teknos-deep px-4 py-2 text-sm font-semibold shadow hover:bg-teknos-blue hover:text-teknos-deep transition"
          >
            📞 Preventivo
          </a>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white"
          onClick={toggle}
          aria-label="Apri menu"
        >
          {open ? (
            <span className="text-lg leading-none">✕</span>
          ) : (
            <span className="text-lg leading-none">☰</span>
          )}
        </button>
      </nav>

      {/* MENU A TENDINA MOBILE BEN IN RISALTO */}
      {open && (
  <div
    className="
      md:hidden 
      bg-[url('/img/bg-circuit.png')] 
      bg-cover bg-center
      backdrop-blur-xl 
      border-t border-white/10
      shadow-2xl 
      animate-fadeIn
    "
  >
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="
                  text-white text-lg font-medium 
                  py-3 px-4
                  rounded-xl
                  bg-white/10 
                  shadow-md
                  border border-white/20
                  hover:bg-teknos-blue/40 
                  hover:border-white/30
                  transition-all
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="tel:+39070743134"
              onClick={close}
              className="
                mt-2 text-center
                w-full
                py-3 px-4 text-lg font-bold 
                rounded-xl 
                bg-white text-teknos-deep 
                shadow-lg
                hover:bg-teknos-blue hover:text-white 
                transition-all
              "
            >
              📞 Chiama 070 743134
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
