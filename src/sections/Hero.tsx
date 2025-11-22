import { motion } from "framer-motion";
import { MapPin } from "lucide-react";


export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* SOLO CONTENUTO, LO SFONDO È GLOBALE IN App.tsx */}

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* TESTO A SINISTRA */}
        <div>
          <motion.h1
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl md:text-5xl font-extrabold leading-tight"
>
  Officina meccatronica per{" "}
  <span className="text-teknos-blue">
    automotive, industriale, agricolo e mezzi d’opera
  </span>
</motion.h1>

{/* Badge posizione */}
<div className="mt-3 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/80 border border-white/10">
  <MapPin size={14} className="text-teknos-blue" />
  <span>Serdiana (SU) • Sud Sardegna</span>
</div>

<p className="mt-4 text-lg text-white/80">
  Diagnosi elettronica avanzata, programmazione e riparazione
  centraline, impianti di post-trattamento gas di scarico e
  climatizzazione. Interventi rapidi, documentati e risolutivi.
</p>


          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contatti"
              className="px-5 py-3 rounded-2xl bg-teknos-blue text-teknos-deep font-semibold"
            >
              Prenota una diagnosi
            </a>
            <a
              href="tel:+39070743134"
              className="px-5 py-3 rounded-2xl border border-white/30 text-white/90"
            >
              Chiama subito
            </a>
          </div>
        </div>

        {/* CARD A DESTRA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl bg-gradient-to-br from-teknos-deep to-black border border-white/10 shadow-2xl p-8 flex flex-col justify-between h-full">
            <div>
              <img
                src="/img/logo-teknos.png"
                alt="TEKNOS"
                className="h-10 w-auto mb-3"
              />
              <div className="text-sm text-white/80">
                Elettronica • Meccatronica • Centro tecnico elettronico
              </div>
            </div>
            <div className="mt-6 text-xs text-white/60">
              Programmazioni centraline • Diagnosi elettronica • SCR/DPF •
              Climatizzazione • Furgoni officina
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div className="rounded-full bg-white text-teknos-deep shadow px-4 py-2 text-xs border">
              Serdiana • Parteolla
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
