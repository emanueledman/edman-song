import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReleaseCard } from "@/components/ReleaseCard";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Shuffle, Users, Music, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Track, getAllArtists, getAllTracks } from "@/lib/data";

interface GenreInfo {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  gradient: string;
  image: string;
  totalSongs: string;
  totalArtists: string;
  monthlyListeners: string;
}

const genreData: Record<string, GenreInfo> = {
  "kizomba": {
    id: "kizomba",
    name: "Kizomba",
    description: "O romance e a sensualidade da música angolana",
    longDescription: "Nascida em Angola nos anos 80, a Kizomba é uma fusão de Semba com ritmos caribenhos. Caracterizada por melodias sensuais e batidas suaves, tornou-se um fenómeno global, conquistando pistas de dança em todo o mundo.",
    gradient: "linear-gradient(135deg, hsl(346 100% 60%) 0%, hsl(0 78% 72%) 100%)",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    totalSongs: "1,325",
    totalArtists: "234",
    monthlyListeners: "2.5M",
  },
  "semba": {
    id: "semba",
    name: "Semba",
    description: "As raízes e tradições do nosso povo",
    longDescription: "O Semba é a alma da música angolana, nascido da fusão de ritmos tradicionais com influências portuguesas. É a base da Kizomba e representa a autenticidade cultural de Angola, contando histórias do quotidiano com melodias cativantes.",
    gradient: "linear-gradient(135deg, hsl(164 100% 42%) 0%, hsl(161 100% 36%) 100%)",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    totalSongs: "856",
    totalArtists: "156",
    monthlyListeners: "1.8M",
  },
  "kuduro": {
    id: "kuduro",
    name: "Kuduro",
    description: "A energia e a batida que move a nação",
    longDescription: "O Kuduro é pura energia angolana! Nascido nos musseques de Luanda nos anos 90, combina batidas electrónicas com danças explosivas. É o som das ruas, das festas e da juventude angolana.",
    gradient: "linear-gradient(135deg, hsl(243 100% 69%) 0%, hsl(243 100% 76%) 100%)",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
    totalSongs: "2,103",
    totalArtists: "312",
    monthlyListeners: "3.2M",
  },
  "afro-house": {
    id: "afro-house",
    name: "Afro House",
    description: "Beats modernos com alma africana",
    longDescription: "O Afro House é a evolução moderna da música angolana, fundindo house electrónico com ritmos africanos tradicionais. DJs e produtores angolanos estão a conquistar o mundo com este som único.",
    gradient: "linear-gradient(135deg, hsl(36 100% 57%) 0%, hsl(45 100% 51%) 100%)",
    image: "https://images.unsplash.com/photo-1571266028253-9c6f07b45e4f?w=1200&q=80",
    totalSongs: "987",
    totalArtists: "178",
    monthlyListeners: "2.1M",
  },
};

const GenrePage = () => {
  const { genreId } = useParams();
  const genre = genreData[genreId || "kizomba"];

  if (!genre) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-5 py-32 text-center">
          <h1 className="text-4xl font-black mb-4">Gênero não encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Voltar à página inicial</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get tracks and artists for this genre from our data
  const allTracks = getAllTracks();
  const genreTracks = allTracks.filter(t => 
    t.genre.toLowerCase().includes(genre.name.toLowerCase()) ||
    genre.name.toLowerCase().includes(t.genre.toLowerCase())
  ).slice(0, 6);
  
  // Fallback to all tracks if no matches
  const releases = genreTracks.length > 0 ? genreTracks : allTracks.slice(0, 4);
  
  // Get artists
  const allArtists = getAllArtists();
  const topArtists = allArtists.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[60vh] flex items-end">
        <img
          src={genre.image}
          alt={genre.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: genre.gradient, opacity: 0.85 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="container mx-auto px-5 relative z-10">
          <Link 
            to="/#generos"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar aos Gêneros</span>
          </Link>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-4">{genre.name}</h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">{genre.longDescription}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Music className="w-6 h-6 text-white/60" />
              <div>
                <p className="text-2xl font-black text-white">{genre.totalSongs}</p>
                <p className="text-sm text-white/60">Músicas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-white/60" />
              <div>
                <p className="text-2xl font-black text-white">{genre.totalArtists}</p>
                <p className="text-sm text-white/60">Artistas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-white/60" />
              <div>
                <p className="text-2xl font-black text-white">{genre.monthlyListeners}</p>
                <p className="text-sm text-white/60">Ouvintes mensais</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="btn-hero-primary gap-2">
              <Play className="w-5 h-5" fill="currentColor" />
              Reproduzir
            </Button>
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 gap-2 px-6 py-6">
              <Shuffle className="w-5 h-5" />
              Aleatório
            </Button>
          </div>
        </div>
      </section>

      {/* Top Artists */}
      <section className="py-16 section-bg-gray">
        <div className="container mx-auto px-5">
          <h2 className="section-title mb-8">
            Artistas de <span className="gradient-text">{genre.name}</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topArtists.map((artist) => (
              <Link
                key={artist.slug}
                to={`/artist/${artist.slug}`}
                className="group text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-primary transition-all">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.followers} seguidores</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Releases */}
      <main className="container mx-auto px-5 py-16">
        <h2 className="section-title mb-8">
          Lançamentos de <span className="gradient-text">{genre.name}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
          {releases.map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GenrePage;
