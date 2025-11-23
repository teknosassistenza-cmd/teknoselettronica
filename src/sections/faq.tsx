// src/sections/Faq.tsx
export function Faq() {
  const faqs = [
    {
      q: "Che tipo di diagnosi elettronica fate?",
      a: "Eseguiamo diagnosi multimarca su auto, mezzi agricoli e mezzi d’opera: lettura errori, parametri in tempo reale, test attuatori, controlli su centraline motore, cambio, ABS, airbag, body computer e impianti di climatizzazione."
    },
    {
      q: "Lavorate solo a Serdiana o vi spostate anche in cantiere?",
      a: "Il nostro laboratorio è a Serdiana, ma grazie ai furgoni officina operiamo in tutta Sardegna, intervenendo direttamente presso aziende agricole, cantieri e flotte aziendali quando necessario."
    },
    {
      q: "Potete intervenire su mezzi agricoli e macchine da cantiere?",
      a: "Sì. Ci occupiamo di elettronica e impianti elettrici su trattori, pale, escavatori, rulli e altri mezzi d’opera, con particolare attenzione ai sistemi di gestione motore, post-trattamento e climatizzazione cabina."
    },
    {
      q: "Ricostruite anche tubi clima?",
      a: "Sì, realizziamo e ricostruiamo tubazioni clima con crimpatura professionale, sia per auto che per mezzi agricoli e macchine da lavoro, quando il ricambio originale non è disponibile o ha costi troppo elevati."
    },
    {
      q: "Come faccio a fissare un appuntamento?",
      a: "Puoi chiamarci in officina allo 070 743134, scriverci su WhatsApp al 333 3215679 oppure usare il modulo contatti del sito: ti risponderemo fissando una diagnosi o concordando un’uscita con il furgone officina."
    }
  ];

  return (
    <section id="faq" className="bg-teknos-deep/80 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Domande frequenti</h2>
        <p className="mt-2 text-white/70">
          Qualche risposta rapida alle domande che ci vengono fatte più spesso su diagnosi,
          centraline e interventi in cantiere.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/10 bg-black/30 p-4"
            >
              <h3 className="font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm text-white/80">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
