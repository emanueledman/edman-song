import { Ticket, Smartphone } from "lucide-react";
import { TrendingArtists } from "./TrendingArtists";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6">
      {/* Event Ad */}
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 text-center border border-accent/30">
        <h4 className="text-accent font-bold text-lg mb-2">Evento Exclusivo</h4>
        <p className="text-muted-foreground text-sm mb-1">Festival Edman Music 2026 - Luanda</p>
        <p className="text-muted-foreground text-sm mb-5">
          Garanta já o seu ingresso para o maior evento musical do ano!
        </p>
        <a href="#" className="btn-hero-primary w-full justify-center">
          <Ticket className="w-4 h-4" />
          Comprar Ingressos
        </a>
      </div>

      {/* Trending Artists */}
      <TrendingArtists />

      {/* Partner Ad */}
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-6 text-center border border-white/10">
        <h4 className="text-muted-foreground text-sm mb-2">Em parceria com</h4>
        <p className="text-secondary text-2xl font-extrabold mb-2">MTC</p>
        <p className="text-muted-foreground text-sm mb-5">
          Dados ilimitados para streaming musical
        </p>
        <a href="#" className="btn-hero-secondary w-full justify-center text-sm">
          <Smartphone className="w-4 h-4" />
          Saiba Mais
        </a>
      </div>
    </aside>
  );
};
