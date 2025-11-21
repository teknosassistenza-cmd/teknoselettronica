export function Sectors() {
  return (
    <section id="settori" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Settori in cui operiamo</h2>
      <p className="mt-2 text-white/80 max-w-3xl">
        Teknos è il punto di riferimento meccatronico per veicoli privati, mezzi agricoli e mezzi d’opera. Interveniamo dove
        l’elettronica è critica per la produttività.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {/* Mezzi d'opera */}
       <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 transition transform duration-200">
          <h3 className="text-xl font-semibold">Mezzi d’opera e industriali</h3>
          <p className="mt-3 text-sm text-white/80">
            Interventi tecnici avanzati su mezzi da lavoro e macchine da cantiere, dove il fermo macchina significa fermo
            cantiere.
          </p>
          <ul className="mt-3 text-sm text-white/80 list-disc list-inside space-y-1">
            <li>Escavatori, pale e telescopici</li>
            <li>Camion cava-cantiere</li>
            <li>Rulli e vibrofinitrici</li>
          </ul>
          <p className="mt-3 text-sm text-white/80">
            Lavoriamo su centraline motore e idrauliche, sistemi SCR/AdBlue, reti CAN-BUS, sensori e cablaggi in ambienti ostili
            (polvere, vibrazioni, umidità).
          </p>
        </div>

        {/* Settore agricolo */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 transition transform duration-200">
          <h3 className="text-xl font-semibold">Settore agricolo</h3>
          <p className="mt-3 text-sm text-white/80">
            Supportiamo aziende agricole che lavorano ogni giorno con mezzi elettronici complessi, dove affidabilità e continuità
            sono fondamentali.
          </p>
          <ul className="mt-3 text-sm text-white/80 list-disc list-inside space-y-1">
            <li>Trattori di tutte le marche</li>
            <li>Atomizzatori</li>
            <li>Carri miscelatori</li>
          </ul>
          <p className="mt-3 text-sm text-white/80">
            Interveniamo su centraline motore, sensori giri/coppia/rail, cablaggi danneggiati, sistemi SCR/DPF e guasti
            elettronici intermittenti.
          </p>
        </div>
      </div>
    </section>
  );
}
