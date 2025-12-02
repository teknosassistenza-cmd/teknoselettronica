export function PostTrattamento() {
  return (
    <section id="posttrattamento" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Diagnostica impianti di post-trattamento</h2>
      <p className="mt-2 text-white/80 max-w-3xl">
        Gli impianti SCR/DPF sono essenziali per la conformità alle normative e, quando non
        funzionano, possono bloccare del tutto il mezzo. Eseguiamo diagnosi mirate e interventi
        tecnici per ripristinare il sistema senza improvvisazioni.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200 shadow-sm">
          <h3 className="text-xl font-semibold">Cosa controlliamo</h3>
          <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
            <li>Sistemi AdBlue/SCR e relative centraline di gestione.</li>
            <li>Sensori NOx, temperatura, pressione differenziale e flussometri.</li>
            <li>Valori di saturazione DPF/FAP e strategie di rigenerazione.</li>
            <li>Cablaggi, connettori e alimentazioni dedicate al sistema.</li>
          </ul>
        </div>

        <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200 shadow-sm">
          <h3 className="text-xl font-semibold">Risultato per il cliente</h3>
          <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
            <li>Riduzione o eliminazione dei messaggi di errore su quadro.</li>
            <li>Ripristino della potenza e della coppia del motore.</li>
            <li>Minor rischio di fermi macchina improvvisi.</li>
            <li>Interventi tracciati e spiegati in modo chiaro al cliente.</li>
          </ul>
          <p className="mt-3 text-sm text-white/80">
            Ideale per flotte, mezzi d’opera e veicoli agricoli che lavorano quotidianamente e non
            possono permettersi fermate prolungate.
          </p>
        </div>
      </div>
    </section>
  );
}
