export function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-teknos-deep/80">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {year} TEKNOS – Assistenza elettrica ed elettronica su automezzi • P.IVA 01687860922</div>
        <div className="flex items-center gap-3">
          <a className="hover:text-teknos-blue" href="#">Privacy</a>
          <span>•</span>
          <a className="hover:text-teknos-blue" href="#">Cookie</a>
        </div>
      </div>
    </footer>
  )
}