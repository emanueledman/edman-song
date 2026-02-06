import { ArrowRight } from "lucide-react";
import Link from "next/link";

const genres = [
  {
    id: "kizomba",
    name: "Kizomba",
    songs: "1,325 músicas",
    description: "O romance e a sensualidade da música angolana",
    gradient: "linear-gradient(135deg, hsl(346 100% 60%) 0%, hsl(0 78% 72%) 100%)",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    id: "semba",
    name: "Semba",
    songs: "856 músicas",
    description: "As raízes e tradições do nosso povo",
    gradient: "linear-gradient(135deg, hsl(164 100% 42%) 0%, hsl(161 100% 36%) 100%)",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
  },
  {
    id: "kuduro",
    name: "Kuduro",
    songs: "2,103 músicas",
    description: "A energia e a batida que move a nação",
    gradient: "linear-gradient(135deg, hsl(243 100% 69%) 0%, hsl(243 100% 76%) 100%)",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
  },
  {
    id: "afro-house",
    name: "Afro House",
    songs: "987 músicas",
    description: "Beats modernos com alma africana",
    gradient: "linear-gradient(135deg, hsl(36 100% 57%) 0%, hsl(45 100% 51%) 100%)",
    image: "https://images.unsplash.com/photo-1571266028253-9c6f07b45e4f?w=600&q=80",
  },
];

export const GenresShowcase = () => {
  return (
    <section className="py-16 relative overflow-hidden" id="generos">
      <h2 className="section-title">
        Gêneros <span className="gradient-text">Populares</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {genres.map((genre) => (
          <Link
            key={genre.name} href={`/genre/${genre.id}`}
            className="group relative h-80 overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={genre.image}
              alt={genre.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity"
              style={{ background: genre.gradient }}
            />
            
            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-3xl font-black text-white mb-2">{genre.name}</h3>
              <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {genre.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">{genre.songs}</span>
                <ArrowRight className="w-6 h-6 text-white translate-x-0 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
