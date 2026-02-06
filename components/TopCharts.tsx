import { Play, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

const topSongs = [
  { id: "2", position: 1, title: "Fama No Corno", artist: "Kamona King", artistId: "kamona-king", duration: "3:45", plays: "2.5M", change: "up" },
  { id: "1", position: 2, title: "Chorou", artist: "Anderson Mário", artistId: "anderson-mario", duration: "4:12", plays: "1.8M", change: "up" },
  { id: "3", position: 3, title: "Mil Discursos", artist: "Evan Jalu", artistId: "evan-jalu", duration: "3:58", plays: "1.5M", change: "same" },
  { id: "5", position: 4, title: "Amor de Sempre", artist: "Gerilson Insrael", artistId: "gerilson-insrael", duration: "4:30", plays: "1.2M", change: "down" },
  { id: "6", position: 5, title: "Noite Infinita", artist: "Yola Semedo", artistId: "yola-semedo", duration: "3:22", plays: "980K", change: "up" },
  { id: "4", position: 6, title: "Imbrox", artist: "Agusto Oi", artistId: "agusto-oi", duration: "3:15", plays: "850K", change: "up" },
  { id: "7", position: 7, title: "Minha Mulher", artist: "Filho do Zua", artistId: "filho-do-zua", duration: "4:05", plays: "720K", change: "down" },
  { id: "8", position: 8, title: "Tá Doce", artist: "Preto Show", artistId: "preto-show", duration: "3:40", plays: "650K", change: "same" },
];

export const TopCharts = () => {
  return (
    <section className="py-16" id="charts">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="section-title gradient-text">
            Top Charts
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-primary text-white font-bold uppercase text-sm">
            Hoje
          </button>
          <button className="px-6 py-3 bg-muted text-muted-foreground font-bold uppercase text-sm hover:bg-primary hover:text-white transition-colors">
            Semana
          </button>
          <button className="px-6 py-3 bg-muted text-muted-foreground font-bold uppercase text-sm hover:bg-primary hover:text-white transition-colors">
            Mês
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        {topSongs.map((song, index) => (
          <Link
            key={song.position} href={`/track/${song.id}`}
            className="group flex items-center gap-6 p-5 bg-card hover:bg-muted border-l-4 border-transparent hover:border-primary transition-all duration-300 cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Position */}
            <div className="relative">
              <span className={`text-4xl font-black ${song.position <= 3 ? 'gradient-text' : 'text-muted-foreground'}`}>
                {String(song.position).padStart(2, '0')}
              </span>
              {song.change === 'up' && (
                <TrendingUp className="absolute -top-1 -right-3 w-4 h-4 text-secondary" />
              )}
            </div>

            {/* Song Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-lg truncate group-hover:text-primary transition-colors">
                {song.title}
              </h4>
              <Link href={`/artist/${song.artistId}`}
                className="text-muted-foreground truncate block hover:text-secondary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {song.artist}
              </Link>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {song.duration}
              </div>
              <div className="w-20 text-right font-mono">
                {song.plays}
              </div>
            </div>

            {/* Play Button */}
            <div className="w-12 h-12 flex items-center justify-center bg-white/5 group-hover:bg-primary text-white transition-all duration-300">
              <Play className="w-5 h-5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
