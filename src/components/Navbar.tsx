import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#centraline", label: "Programmazioni centraline" },
  { href: "#post-trattamento", label: "Post-trattamento" }, // <- cambiato
  { href: "#clima", label: "Climatizzazione" },
  { href: "#settori", label: "Settori" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#chi-siamo", label: "Chi siamo" },                // <- cambiato
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    const original = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original;
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Scroll morbido e chiusura menu dopo il click
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR FISSA IN ALTO */}
      <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[#020817ee] to-[#020817aa] backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/img/logo-teknos.png"
              alt="Teknos"
              className="h-8 w-auto"
            />
          </a>

          {/* Menu desktop */}
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-teknos-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Pulsante chiamata (desktop) */}
          <a
            href="tel:+39070743134"
            className="hidden rounded-full bg-teknos-blue px-4 py-2 text-sm font-semibold text-teknos-deep shadow md:inline-block"
          >
            Chiama subito
          </a>

          {/* Bottone hamburger (mobile) */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Spazio sotto la navbar, per non coprire l'hero */}
      <div className="h-16" />

      {/* MENU MOBILE A TENDINA */}
      {open && (
        <div className="fixed inset-0 top-16 z-30 overflow-y-auto">
          {/* Layer di background (colore + circuiti tenui) */}
          <div className="absolute inset-0">
            {/* base scura */}
            <div className="absolute inset-0 bg-[#020817f5]" />
            {/* immagine circuiti molto tenue */}
            <div
              className="
                absolute inset-0
                bg-[url('/img/bg-circuit.jpg')]
                bg-cover bg-center
                opacity-20
              "
            />
          </div>

          {/* Contenuto del menu sopra al background */}
          <nav className="relative z-10 mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6">
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
