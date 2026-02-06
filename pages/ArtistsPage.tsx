import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, Filter, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getAllArtists } from "@/lib/data";

const genres = ["Todos", "Kizomba", "Semba", "Kuduro", "Afro House", "Hip Hop"];

const ArtistsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGenre, setActiveGenre] = useState("Todos");

  const allArtists = getAllArtists();

  const filteredArtists = allArtists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = activeGenre === "Todos" || artist.genre.toLowerCase().includes(activeGenre.toLowerCase());
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden section-bg-darker-gray">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        
        <div className="container mx-auto px-5 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-12 h-12 text-primary" />
            <h1 className="text-5xl md:text-7xl font-black">
              Nossos <span className="gradient-text">Artistas</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Conheça os talentos que fazem a música angolana brilhar. De lendas consagradas a novos talentos.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Pesquisar artistas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-card border-border h-12"
              />
            </div>

            {/* Genre Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground mr-2" />
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={activeGenre === genre ? "default" : "outline"}
                  onClick={() => setActiveGenre(genre)}
                  className={activeGenre === genre ? "bg-primary" : ""}
                  size="sm"
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <main className="container mx-auto px-5 py-16">
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {filteredArtists.map((artist) => (
              <Link
                key={artist.slug}
                to={`/artist/${artist.slug}`}
                className="group text-center"
              >
                <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-primary transition-all duration-300">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.genre}</p>
                <p className="text-xs text-primary">{artist.followers} seguidores</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-2xl font-bold mb-2">Nenhum artista encontrado</p>
            <p className="text-muted-foreground">Tente ajustar os filtros ou a pesquisa</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArtistsPage;
