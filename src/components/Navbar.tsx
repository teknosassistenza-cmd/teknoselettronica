import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#centraline", label: "Programmazioni centraline" },
  { href: "#post-trattamento", label: "Post-trattamento" },
  { href: "#clima", label: "Climatizzazione" },
  { href: "#settori", label: "Settori" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "bg-[#020b16]/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/img/logo-teknos.png"
            alt="TEKNOS"
            className="h-9 w-auto"
          />
        </a>

        {/* Menu desktop */}
        <div className="hidden gap-6 text-sm font-medium text-white/80 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+39070743134"
            className="rounded-2xl border border-teknos-blue/60 px-4 py-2 text-sm text-white hover:bg-teknos-blue hover:text-teknos-deep transition"
          >
            Chiama subito
          </a>
        </div>

        {/* Bottone hamburger mobile */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menù"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

           {/* Menù mobile */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden animate-fadeIn">
          {/* Sfondo immagine circuiti */}
          <div
            className="
              absolute inset-0 
              bg-[url('/img/bg-circuit.jpg')] 
              bg-cover bg-center
            "
          />
          {/* Layer scuro ma non troppo */}
          <div className="absolute inset-0 bg-[#020b16]/75" />

          <div className="relative flex h-full flex-col justify-between px-6 py-6">
            {/* Top: logo + chiudi */}
            <div className="flex items-center justify-between">
              <img
                src="/img/logo-teknos.png"
                alt="TEKNOS"
                className="h-9 w-auto"
              />
              <button
                className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white"
                onClick={() => setOpen(false)}
                aria-label="Chiudi menù"
              >
                <X size={20} />
              </button>
            </div>

            {/* Link */}
            <div className="mt-10 flex flex-col gap-4 text-lg font-medium text-white">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white/5 px-4 py-3 border border-white/10 hover:bg-white/10 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA in basso */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+39070743134"
                className="w-full rounded-2xl bg-teknos-blue px-4 py-3 text-center text-sm font-semibold text-teknos-deep shadow"
              >
                Chiama subito
              </a>
              <a
                href="#contatti"
                onClick={() => setOpen(false)}
                className="w-full rounded-2xl border border-white/40 px-4 py-3 text-center text-sm text-white/90"
              >
                Vai ai contatti
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
