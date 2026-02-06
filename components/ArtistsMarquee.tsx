const artists = [
  "Yola Semedo",
  "C4 Pedro",
  "Anselmo Ralph",
  "Gerilson Insrael",
  "Filho do Zua",
  "Anderson Mário",
  "Preto Show",
  "Nagrelha",
  "Titica",
  "DJ Maphorisa",
  "Kamona King",
  "Evan Jalu",
];

export const ArtistsMarquee = () => {
  return (
    <div className="py-8 border-y border-white/10 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...artists, ...artists].map((artist, index) => (
          <span
            key={`${artist}-${index}`}
            className="text-4xl lg:text-6xl font-black text-muted-foreground/30 hover:text-primary transition-colors cursor-pointer"
          >
            {artist}
          </span>
        ))}
      </div>
    </div>
  );
};
