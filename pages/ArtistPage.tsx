import { useParams, Link } from "react-router-dom";
import { Play, Heart, Share2, Users, Disc, Music, Calendar, MapPin, ArrowLeft, Download, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { getArtist, getAllArtists, getTracksByArtist, getAlbumsByArtist, getAllTracks, getAllAlbums } from "@/lib/data";

export const ArtistPage = () => {
  const { artistSlug } = useParams();
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  
  const artist = getArtist(artistSlug || "") || getAllArtists()[0];
  
  if (!artist) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-5 py-32 text-center">
          <h1 className="text-4xl font-black mb-4">Artista não encontrado</h1>
          <Link to="/artists" className="text-primary hover:underline">Ver todos os artistas</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get artist's content
  const artistTracks = getTracksByArtist(artist.slug);
  const topTracks = artistTracks.length > 0 ? artistTracks.slice(0, 5) : getAllTracks().slice(0, 5);
  
  const artistAlbums = getAlbumsByArtist(artist.slug);
  const albums = artistAlbums.length > 0 ? artistAlbums : getAllAlbums().slice(0, 3);
  
  // Related artists (all except current)
  const relatedArtists = getAllArtists().filter(a => a.slug !== artist.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO */}
      <Helmet>
        <title>{artist.name} | AfroSound</title>
        <meta name="description" content={artist.bio} />
        <meta property="og:title" content={`${artist.name} | AfroSound`} />
        <meta property="og:description" content={artist.bio} />
        <meta property="og:image" content={artist.coverImage} />
        <meta property="og:type" content="music.artist" />
        <link rel="canonical" href={`https://afrosound.ao/artist/${artist.slug}`} />
      </Helmet>

      <Header />
      
      {/* Hero Cover */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${artist.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Back Button */}
        <Link 
          to="/artists" 
          className="absolute top-24 left-8 z-10 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar</span>
        </Link>

        {/* Artist Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto flex flex-col md:flex-row items-end gap-8">
            {/* Artist Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 clip-corner overflow-hidden border-4 border-primary">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              {artist.verified && (
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-1 mb-4">
                  <div className="w-5 h-5 gradient-primary flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-sm font-medium">Artista Verificado</span>
                </div>
              )}
              
              <h1 className="text-5xl md:text-7xl font-black mb-4">{artist.name}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-primary" />
                  {artist.genre}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {artist.location}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  {artist.followers} seguidores
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="gradient-primary text-white px-8 py-6 text-lg font-bold gap-2">
                  <Play className="w-5 h-5" />
                  Reproduzir
                </Button>
                <Button variant="outline" className="border-2 border-white/20 px-6 py-6 gap-2 hover:border-primary">
                  <Heart className="w-5 h-5" />
                  Seguir
                </Button>
                <Button variant="ghost" size="icon" className="w-14 h-14 border border-white/10">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-5 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-transparent border-b border-white/10 w-full justify-start gap-8 h-auto p-0 mb-12">
            <TabsTrigger 
              value="overview" 
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 px-0"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="discography"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 px-0"
            >
              Discografia
            </TabsTrigger>
            <TabsTrigger 
              value="about"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 px-0"
            >
              Sobre
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Top Tracks */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 gradient-primary"></span>
                  Músicas Populares
                </h2>
                
                <div className="space-y-2">
                  {topTracks.map((track, index) => (
                    <Link
                      key={track.slug}
                      to={`/track/${track.slug}`}
                      className="group flex items-center gap-4 p-4 bg-card hover:bg-card/80 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setPlayingTrack(playingTrack === track.slug ? null : track.slug);
                      }}
                    >
                      <span className="w-8 text-center text-muted-foreground font-mono">
                        {playingTrack === track.slug ? (
                          <Pause className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <span className="group-hover:hidden">{String(index + 1).padStart(2, '0')}</span>
                        )}
                        <Play className="w-4 h-4 text-primary mx-auto hidden group-hover:block" />
                      </span>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate">{track.title}</h4>
                        <p className="text-sm text-muted-foreground">{track.albumName}</p>
                      </div>
                      
                      <span className="text-sm text-muted-foreground">{track.plays}</span>
                      <span className="text-sm text-muted-foreground w-12 text-right">{track.duration}</span>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Monthly Listeners */}
                <div className="bg-card p-6">
                  <p className="text-sm text-muted-foreground mb-1">Ouvintes Mensais</p>
                  <p className="text-4xl font-black gradient-text">{artist.monthlyListeners}</p>
                </div>

                {/* Related Artists */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Artistas Semelhantes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {relatedArtists.map((related) => (
                      <Link 
                        key={related.slug}
                        to={`/artist/${related.slug}`}
                        className="group"
                      >
                        <div className="aspect-square overflow-hidden mb-2 clip-corner">
                          <img 
                            src={related.image} 
                            alt={related.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{related.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Discography Tab */}
          <TabsContent value="discography" className="mt-0">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 gradient-secondary"></span>
              Álbuns & Singles
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {albums.map((album) => (
                <Link 
                  key={album.slug}
                  to={`/album/${album.slug}`}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden mb-4 clip-corner">
                    <img 
                      src={album.image} 
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 gradient-primary flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{album.title}</h3>
                  <p className="text-sm text-muted-foreground">{album.year}</p>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 gradient-accent"></span>
                  Biografia
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {artist.bio}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Natural de {artist.location}, {artist.name} começou a sua carreira musical inspirado pelos grandes nomes da música angolana. 
                  Ao longo dos anos, conquistou milhões de fãs com a sua voz única e performances memoráveis.
                </p>
              </div>

              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-6">
                    <Disc className="w-8 h-8 text-primary mb-3" />
                    <p className="text-3xl font-black">{albums.length}</p>
                    <p className="text-sm text-muted-foreground">Álbuns</p>
                  </div>
                  <div className="bg-card p-6">
                    <Music className="w-8 h-8 text-secondary mb-3" />
                    <p className="text-3xl font-black">{topTracks.length * 10}+</p>
                    <p className="text-sm text-muted-foreground">Músicas</p>
                  </div>
                  <div className="bg-card p-6">
                    <Calendar className="w-8 h-8 text-accent mb-3" />
                    <p className="text-3xl font-black">2009</p>
                    <p className="text-sm text-muted-foreground">Início</p>
                  </div>
                  <div className="bg-card p-6">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <p className="text-3xl font-black">{artist.followers}</p>
                    <p className="text-sm text-muted-foreground">Seguidores</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-card p-6">
                  <h3 className="font-bold mb-4">Redes Sociais</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <i className="fab fa-instagram text-xl"></i>
                      <span>{artist.socialLinks.instagram}</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <i className="fab fa-facebook text-xl"></i>
                      <span>{artist.socialLinks.facebook}</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <i className="fab fa-youtube text-xl"></i>
                      <span>{artist.socialLinks.youtube}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistPage;
