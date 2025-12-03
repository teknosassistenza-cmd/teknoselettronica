import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { trackEvent } from "../lib/analytics";


const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#centraline", label: "Programmazioni centraline" },
  { href: "#posttrattamento", label: "Post-trattamento" },
  { href: "#clima", label: "Climatizzazione" },
  { href: "#settori", label: "Settori" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#faq", label: "FAQ" },
  { href: "#chisiamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <>
      {/* BARRA FISSA IN ALTO */}
      <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[#020817e6] to-[#020817aa] backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo + posizione */}
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/img/logo-teknos.png"
              alt="Teknos"
              className="h-8 w-auto"
            />
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-white/70">
              <MapPin size={14} className="text-teknos-blue" />
              Serdiana (SU) · Sud Sardegna
            </span>
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
  {links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className="text-white/80 hover:text-teknos-blue transition-colors"
      onClick={() =>
        trackEvent("click_menu_voce", {
          event_category: "navbar",
          event_label: link.label
        })
      }
    >
      {link.label}
    </a>
  ))}
</nav>


          {/* Pulsante telefono desktop */}
          <a
  href="tel:+39070743134"
  className="hidden md:inline-flex items-center rounded-full bg-teknos-blue px-4 py-2 text-xs lg:text-sm font-semibold text-teknos-deep shadow whitespace-nowrap"
  onClick={() =>
    trackEvent("click_chiama_subito", {
      event_category: "contatto",
      event_label: "navbar"
    })
  }
>
  Chiama subito
</a>


          {/* Hamburger mobile */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Spazio sotto la navbar per non coprire l'hero */}
      <div className="h-16" />

      {/* MENU MOBILE A TENDINA */}
      {open && (
        <div className="fixed inset-0 top-16 z-30 overflow-y-auto bg-[#020817f0] animate-fadeIn">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6">
            {links.map((link) => (
              <a
  key={link.href}
  href={link.href}
  className="w-full rounded-2xl bg-white/5 px-4 py-4 text-left text-base font-semibold text-white/90 border border-white/10 hover:bg.white/10 transition-colors"
  onClick={() => {
    trackEvent("click_menu_voce_mobile", {
      event_category: "navbar_mobile",
      event_label: link.label
    });
    setOpen(false);
  }}
>
  {link.label}
</a>

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
