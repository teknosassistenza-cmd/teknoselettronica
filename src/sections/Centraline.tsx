export function Centraline() {
  return (
    <section id="centraline" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Programmazioni e centraline</h2>
          <p className="mt-2 text-white/80 max-w-3xl">
            Interventi dedicati su centraline motore e moduli elettronici di veicoli, mezzi agricoli
            e mezzi d’opera. Lavoriamo in modo mirato per ripristinare il corretto funzionamento
            senza sostituzioni inutili.
          </p>
        </div>
        <div className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">
          Vetture • Agricolo • Mezzi d’opera
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Cosa facciamo */}
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200 shadow-sm">
          <h3 className="text-xl font-semibold">Cosa facciamo sulle centraline</h3>
          <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
            <li>Programmazione e aggiornamento software centraline motore.</li>
            <li>Clonazione centraline per sostituzione di unità difettose.</li>
            <li>Sostituzione e test centraline prima del montaggio sul mezzo.</li>
            <li>Verifica alimentazioni, masse e linee CAN correlate alla ECU.</li>
          </ul>
        </div>

        {/* Quando ha senso venire da noi */}
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200 shadow-sm">
          <h3 className="text-xl font-semibold">Quando ha senso intervenire</h3>
          <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
            <li>Impossibilità di avviare il mezzo senza cause meccaniche evidenti.</li>
            <li>Errori elettronici ricorrenti che non si risolvono con le procedure standard.</li>
            <li>Dopo corto circuiti, infiltrazioni o danneggiamenti su cablaggi e connettori.</li>
            <li>Quando è stata proposta solo la sostituzione completa a costi elevati.</li>
          </ul>
          <p className="mt-3 text-sm text-white/80">
            Valutiamo caso per caso la soluzione più conveniente, documentando sempre l’intervento
            eseguito.
          </p>
        </div>
      </div>
    </section>
  );
}
