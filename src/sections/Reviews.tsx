export function Reviews() {
  const reviews = [
    {
      name: "F. Pinna",
      date: "13 settimane fa",
      text: "",
      stars: 5,
    },
    {
      name: "A. Matta",
      date: "12 ott 2024",
      text: "Cortesia e professionalità da consigliare a tutti!",
      stars: 5,
    },
    {
      name: "M. Pittiu",
      date: "2 nov 2019",
      text: "Veramente competenti. Veloci nel risolvere i problemi e onesti… Grazie",
      stars: 5,
    },
    {
      name: "F. Bisoni",
      date: "5 feb 2019",
      text: "Eccellenza nel settore.",
      stars: 5,
    },
    {
      name: "Endriu",
      date: "24 dic 2018",
      text: "Top finalmente il nome Elettrauto ha un nome… onesti e veramente capaci, consigliatissimo.",
      stars: 5,
    }
  ];

  return (
    <section id="recensioni" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Recensioni dei clienti</h2>
      <p className="mt-2 text-white/80 max-w-3xl">
        Fiducia, competenza e risultati reali: ecco cosa dicono i clienti che hanno scelto Teknos.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {reviews.map((rev, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-sm hover:bg-white/10 hover:border-teknos-blue/70 hover:-translate-y-1 hover:shadow-2xl transition transform duration-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{rev.name}</h3>
              <span className="text-xs text-white/60">{rev.date}</span>
            </div>

            <div className="mt-2 text-yellow-400 text-lg">
              {"★".repeat(rev.stars)}
            </div>

            {rev.text && (
              <p className="mt-3 text-white/80 text-sm leading-relaxed">{rev.text}</p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
  href="https://share.google/6EVKmyIJidNskd8c1"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex rounded-2xl border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
>
  Vedi tutte le recensioni su Google
</a>
      </div>
    </section>
  );
}
