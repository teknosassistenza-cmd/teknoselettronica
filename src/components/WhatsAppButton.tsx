import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/393333215679?text=Ciao%20Teknos%2C%20avrei%20bisogno%20di%20informazioni%20per%20una%20diagnosi%2Fintervento."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4 z-40
        flex items-center gap-2
        rounded-full px-4 py-2
        bg-emerald-500 shadow-lg
        text-white text-sm font-semibold
        hover:bg-emerald-400
        transition
      "
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Scrivici su WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
