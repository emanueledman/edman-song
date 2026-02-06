import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReleaseCard } from "@/components/ReleaseCard";
import { Filter, Grid3X3, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getAllTracks, Track } from "@/lib/data";

const filters = ["Todos", "Novos", "Populares", "Em Alta"];

const ReleasesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allReleases = getAllTracks();

  const filteredReleases = allReleases.filter((release) => {
    const matchesSearch =
      release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      release.artistName.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === "Todos") return matchesSearch;
    if (activeFilter === "Novos") return matchesSearch && release.badge?.type === "new";
    if (activeFilter === "Populares") return matchesSearch && release.badge?.type === "popular";
    if (activeFilter === "Em Alta") return matchesSearch && release.badge?.type === "trending";
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden section-bg-darker-gray">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            Lançamentos em <span className="gradient-text">Destaque</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Descubra as últimas novidades da música angolana. Kizomba, Semba, Kuduro e muito mais.
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
                placeholder="Pesquisar lançamentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-card border-border h-12"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground mr-2" />
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "bg-primary" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "text-primary" : "text-muted-foreground"}
              >
                <Grid3X3 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "text-primary" : "text-muted-foreground"}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Releases Grid */}
      <main className="container mx-auto px-5 py-16">
        {filteredReleases.length > 0 ? (
          <div className={
            viewMode === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1"
              : "flex flex-col gap-2"
          }>
            {filteredReleases.map((release) => (
              <ReleaseCard key={release.slug} release={release} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-bold mb-2">Nenhum resultado encontrado</p>
            <p className="text-muted-foreground">Tente ajustar os filtros ou a pesquisa</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ReleasesPage;
