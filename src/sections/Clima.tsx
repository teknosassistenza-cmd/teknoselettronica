export function Clima() {
  return (
    <section id="clima" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Climatizzazione e comfort a bordo</h2>
      <p className="mt-2 text-white/80 max-w-3xl">
        Un impianto clima efficiente è sicurezza e comfort, soprattutto su mezzi che lavorano tutto
        il giorno in cantiere o in campo. Ci occupiamo sia della parte frigorifera che di quella
        elettronica di comando.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200 shadow-sm">
          <h3 className="text-xl font-semibold">Interventi sull’impianto A/C</h3>
          <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
            <li>Ricarica gas con attrezzatura certificata.</li>
            <li>Ricerca perdite su tubazioni, raccordi e condensatori.</li>
            <li>Riparazione e sostituzione compressori, condensatori ed evaporatori.</li>
            <li>Ricostruzione tubazioni clima con crimpatura certificata.</li>
          </ul>
        </div>

        <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-teknos-blue/70 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200 shadow-sm">
          <h3 className="text-xl font-semibold">Diagnostica elettronica clima</h3>
          <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
            <li>Controllo sensori temperatura abitacolo e vano motore.</li>
            <li>Verifica comandi clima manuali e automatici.</li>
            <li>Test ventole, resistenze, attuatori e flap aria.</li>
            <li>Analisi guasti su centraline clima e reti CAN correlate.</li>
          </ul>
          <p className="mt-3 text-sm text-white/80">
            Interveniamo su vetture, veicoli commerciali, mezzi agricoli e mezzi d’opera, anche con
            impianti clima aftermarket.
          </p>
        </div>
      </div>
    </section>
  );
}
