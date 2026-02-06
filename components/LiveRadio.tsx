import { Radio, Volume2, Users, Headphones } from "lucide-react";
import Link from "next/link";

const radioStations = [
  {
    id: "edman-music-fm",
    name: "Sons da Banda",
    genre: "Kizomba & Semba",
    listeners: "12.5K",
    isLive: true,
    currentTrack: "Ana Joice ft Ivandro - Ondas do mar",
    image: "https://i.scdn.co/image/ab67616d0000b273f84a1bccaeba6acc96424479",
  },
  {
    id: "kuduro-nation",
    name: "Kuduro Nation",
    genre: "Kuduro Hits",
    listeners: "8.2K",
    isLive: true,
    currentTrack: "Mano Chaba - Sonhos",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cf/2e/0f/cf2e0fef-5545-33c8-f42d-b4d13184bf95/0.jpg/600x600bf-60.jpg",
  },
  {
    id: "afro-house-mix",
    name: "Rap & Hip-Hop",
    genre: "House & Electronic",
    listeners: "6.8K",
    isLive: true,
    currentTrack: "Prodigio - Castelo de Lata",
    image: "https://cdn-images.dzcdn.net/images/cover/4d01b7876b07ee1b4f0bf4713e59536c/0x1900-000000-80-0-0.jpg",
  },
];

export const LiveRadio = () => {
  return (
    <section className="py-16 relative overflow-hidden" id="radio">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 bg-destructive animate-pulse" />
            <h2 className="section-title">
              Rádio <span className="gradient-text">Ao Vivo</span>
            </h2>
          </div>
          <Link href="/radio"
            className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-4 transition-all"
          >
            Todas as Estações
            <span className="w-8 h-0.5 bg-primary" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {radioStations.map((station) => (
            <Link
              key={station.id} href={`/radio/${station.id}`}
              className="group relative overflow-hidden bg-card border-b-4 border-secondary hover:border-primary transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Live Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-destructive px-4 py-2">
                  <Radio className="w-4 h-4 animate-pulse" />
                  <span className="font-bold text-sm uppercase">Ao Vivo</span>
                </div>

                {/* Listeners */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-mono">{station.listeners}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black mb-1 group-hover:text-primary transition-colors">{station.name}</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                  {station.genre}
                </p>

                {/* Now Playing */}
                <div className="flex items-center gap-3 p-3 bg-muted mb-4">
                  <Headphones className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-xs text-muted-foreground uppercase">A Tocar Agora</p>
                    <p className="font-semibold truncate">{station.currentTrack}</p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="w-full py-4 bg-secondary text-dark-DEFAULT font-bold uppercase tracking-wider flex items-center justify-center gap-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Volume2 className="w-5 h-5" />
                  Ouvir Agora
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
