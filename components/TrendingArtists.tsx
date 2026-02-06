import Link from "next/link";

const artists = [
  {
    id: "anderson-mario",
    initials: "AM",
    name: "Anderson Mário",
    genre: "Kizomba",
    listeners: "245K ouvintes",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200",
  },
  {
    id: "kamona-king",
    initials: "KK",
    name: "Kamona King",
    genre: "Kuduro",
    listeners: "1.2M ouvintes",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    id: "evan-jalu",
    initials: "EJ",
    name: "Evan Jalu",
    genre: "Afro Pop",
    listeners: "890K ouvintes",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
  },
  {
    id: "agusto-oi",
    initials: "AO",
    name: "Agusto Oi",
    genre: "Afro House",
    listeners: "750K ouvintes",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
];

export const TrendingArtists = () => {
  return (
    <div className="bg-card p-6">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="w-4 h-1 gradient-primary"></span>
        Artistas em Alta
      </h3>
      <div className="space-y-1">
        {artists.map((artist) => (
          <Link
            key={artist.name} href={`/artist/${artist.id}`}
            className="flex items-center gap-4 py-4 border-b border-white/5 last:border-none hover:bg-white/5 px-2 -mx-2 transition-colors cursor-pointer group"
          >
            <div className="w-12 h-12 overflow-hidden clip-corner">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h4 className="font-semibold group-hover:text-primary transition-colors">{artist.name}</h4>
              <p className="text-sm text-muted-foreground">
                {artist.genre} • {artist.listeners}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <Link href="/artists"
        className="mt-4 block text-center text-sm font-semibold text-primary hover:text-secondary transition-colors"
      >
        Ver Todos os Artistas →
      </Link>
    </div>
  );
};
