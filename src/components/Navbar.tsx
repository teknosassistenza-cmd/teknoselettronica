import { useEffect, useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#centraline", label: "Programmazioni centraline" },
  { href: "#posttrattamento", label: "Post-trattamento" },
  { href: "#clima", label: "Climatizzazione" },
  { href: "#settori", label: "Settori" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#chisiamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Blocca lo scroll della pagina con menù aperto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Click su voce del menu → chiudi e scrolla
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <header className="fixed inset-x-0 top-0 z-40 bg-[#020817cc] backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

          {/* LOGO + DOVE SIAMO */}
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/img/logo-teknos.png"
              alt="Teknos"
              className="h-8 w-auto"
            />

            {/* Iconcina Serdiana */}
            <span className="hidden md:flex items-center gap-1 text-white/60 text-xs">
              <MapPin size={14} className="text-teknos-blue" />
              Serdiana, Sud Sardegna
            </span>
          </a>

          {/* MENU DESKTOP */}
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

          {/* BOTTONE CHIAMA */}
          <a
            href="tel:+39070743134"
            className="hidden rounded-full bg-teknos-blue px-4 py-2 text-sm font-semibold text-teknos-deep shadow md:inline-block"
          >
            Chiama subito
          </a>

          {/* HAMBURGER MOBILE */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <div className="h-16" />

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menuMobile"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              fixed inset-0 top-16 z-30 
              overflow-y-auto
              bg-[#020817f2]
              bg-[url('/img/bg-circuit.jpg')]
              bg-cover bg-center
              bg-blend-overlay
            "
          >
            {/* sfondo scuro leggero */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <nav className="relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full rounded-2xl bg-black/40 px-4 py-4 text-left text-base font-semibold text-white/90 border border-white/10 hover:bg-white/5 transition"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
