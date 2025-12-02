export function About() {
  return (
    <section
      id="chisiamo"
      className="relative border-t border-white/10 bg-[#020817]/90"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Chi siamo
          </h2>
          <p className="mt-4 text-white/80">
            Teknos nasce come officina elettrauto nel <strong>1987</strong> e,
            nel tempo, è diventata un <strong>centro tecnico meccatronico</strong>{" "}
            specializzato nella diagnosi elettronica e nella programmazione delle
            centraline. Da oltre trent’anni la famiglia Atzeni lavora su vetture,
            mezzi agricoli, mezzi d’opera e flotte aziendali in tutto il Parteolla
            e nel resto della Sardegna.
          </p>
          <p className="mt-4 text-white/80">
            Investiamo in modo continuo in{" "}
            <strong>strumentazione professionale</strong>, banche dati aggiornate e
            formazione tecnica, per offrire diagnosi chiare e soluzioni definitive.
            L’obiettivo è ridurre al minimo i fermi macchina, evitare sostituzioni
            inutili di componenti e riportare ogni mezzo al massimo dell’efficienza.
          </p>
          <p className="mt-4 text-white/80">
            Grazie ai nostri <strong>furgoni officina attrezzati</strong> possiamo
            intervenire direttamente in cantiere, in azienda agricola o presso la
            sede del cliente, gestendo anomalie su impianti elettronici, sistemi di
            post-trattamento gas di scarico, climatizzazione e cablaggi complessi.
            Un approccio da centro tecnico, ma con la flessibilità di un’officina
            che conosce bene i ritmi reali del lavoro su strada e in cantiere.
          </p>
        </div>

        <div className="space-y-4 text-sm text-white/80">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-base font-semibold text-white">
              Perché scegliere Teknos
            </h3>
            <ul className="mt-2 space-y-1">
              <li>• Oltre 35 anni di esperienza nel settore</li>
              <li>• Focus su elettronica, diagnosi e centraline</li>
              <li>• Procedure strutturate e report di intervento</li>
              <li>• Supporto a flotte, aziende agricole e cantieri</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-teknos-blue/50 bg-black/20 p-4">
            <h3 className="text-base font-semibold text-teknos-blue">
              Dove lavoriamo
            </h3>
            <p className="mt-2">
              Siamo a Serdiana (CA), ma operiamo quotidianamente in tutto il{" "}
              <strong>Parteolla</strong> e nelle principali aree produttive della
              Sardegna, con interventi in officina e presso il cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
