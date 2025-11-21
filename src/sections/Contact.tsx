export function Contact() {
  return (
    <section id="contatti" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Contatti</h2>
      <p className="mt-3 text-white/80 max-w-3xl">
        Hai un mezzo fermo o un problema elettronico che nessuno riesce a risolvere? Contattaci: rispondiamo rapidamente e
        organizziamo la diagnosi nel più breve tempo possibile.
      </p>

      <div className="mt-6 space-y-2 text-white/85">
        <div>
          📍 <span className="font-semibold">Serdiana – Parteolla</span>
        </div>
        <div>
          📞{" "}
          <a href="tel:+39/070743134" className="text-teknos-blue font-semibold">
            +39 070743134
          </a>
        </div>
       <div>
  📞{" "}
  <a
    href="tel:+393333215679"
    className="text-teknos-blue font-semibold"
  >
    +39 333 321 5679
  </a>
  <span className="block text-sm text-white/70">
    Primo contatto: invia un messaggio WhatsApp con nome, mezzo e problema riscontrato.
  </span>
</div>
        <div>
          📧{" "}
          <a href="mailto:teknos.assistenza@gmail.com" className="text-teknos-blue">
            teknos.assistenza@gmail.com
          </a>
        </div>
        <div>
          📲 WhatsApp disponibile per invio foto, codici errore e prima valutazione.
        </div>
      </div>
    </section>
  );
}
