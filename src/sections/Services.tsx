import { Cpu, Gauge, Thermometer, Sparkles, Wrench } from "lucide-react";

const items = [
  {
    icon: Gauge,
    title: "Diagnosi elettronica professionale",
    desc: "Analisi dati in tempo reale, test attuatori, scansione multibrand e report tecnico dettagliato.",
  },
  {
    icon: Cpu,
    title: "Programmazione e clonazione centraline",
    desc: "Programmazione, clonazione, sostituzione e test centraline per veicoli, mezzi agricoli e mezzi d’opera.",
  },
  {
    icon: Sparkles,
    title: "SCR/DPF e post-trattamento",
    desc: "Diagnosi e ripristino sistemi AdBlue/SCR, sensori NOx e temperatura, reset parametri e rigenerazioni controllate.",
  },
  {
    icon: Thermometer,
    title: "Climatizzazione / A/C",
    // Se vuoi rimettere il tuo testo lungo, sostituisci questa riga:
    desc: "Ricarica gas, ricerca perdite, riparazione/ricostruzione tubazioni, sostituzione componenti, diagnosi elettronica clima.",
  },
  {
    icon: Wrench,
    title: "Impianti elettrici e cablaggi",
    desc: "Riparazione cablaggi, corti, ossidazioni e guasti intermittenti su impianti complessi.",
  },
];

export function Services() {
  return (
    <section id="servizi" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">I nostri servizi</h2>
      <p className="mt-2 text-white/80 max-w-2xl">
        Soluzioni rapide e professionali per privati, aziende agricole, flotte e cantieri. Diagnosi
        documentata e interventi risolutivi.
      </p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200 shadow-sm"
          >
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="h-8 w-8 rounded-full bg-teknos-blue/15 flex items-center justify-center transition group-hover:bg-teknos-blue group-hover:text-teknos-deep">
                <Icon className="h-4 w-4 text-teknos-blue group-hover:text-teknos-deep transition" />
              </span>
              {title}
            </div>
            <p className="mt-3 text-sm text-white/80 group-hover:text-white/90 transition">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
