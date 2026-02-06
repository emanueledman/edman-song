import { useParams, Link } from "react-router-dom";
import { Play, Heart, Share2, Clock, Download, MoreHorizontal, Pause, ArrowLeft, Calendar, Disc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAlbum, getAlbumsByArtist, getTracksByAlbum, getAllAlbums, getAllTracks } from "@/lib/data";

export const AlbumPage = () => {
  const { albumSlug } = useParams();
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<string[]>([]);
  
  const album = getAlbum(albumSlug || "") || getAllAlbums()[0];
  
  if (!album) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-5 py-32 text-center">
          <h1 className="text-4xl font-black mb-4">Álbum não encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Voltar à página inicial</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get tracks for this album (or fallback to all tracks)
  const albumTracks = getTracksByAlbum(album.slug);
  const tracks = albumTracks.length > 0 ? albumTracks : getAllTracks().slice(0, 6);
  
  // Get more albums from the same artist
  const moreFromArtist = getAlbumsByArtist(album.artistSlug).filter(a => a.slug !== album.slug);

  const toggleLike = (trackSlug: string) => {
    setLikedTracks(prev => 
      prev.includes(trackSlug) 
        ? prev.filter(slug => slug !== trackSlug)
        : [...prev, trackSlug]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO */}
      <Helmet>
        <title>{album.title} - {album.artistName} | AfroSound</title>
        <meta name="description" content={`${album.title} de ${album.artistName}. ${album.totalPlays} reproduções. Lançado em ${album.year}.`} />
        <meta property="og:title" content={`${album.title} - ${album.artistName}`} />
        <meta property="og:image" content={album.image} />
        <link rel="canonical" href={`https://afrosound.ao/album/${album.slug}`} />
      </Helmet>

      <Header />
      
      {/* Album Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Blur */}
        <div 
          className="absolute inset-0 opacity-20 blur-3xl scale-150"
          style={{ 
            backgroundImage: `url(${album.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="container mx-auto px-5 relative z-10">
          {/* Back Button */}
          <Link 
            to={`/artist/${album.artistSlug}`} 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar para {album.artistName}</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Album Cover */}
            <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 clip-corner overflow-hidden shadow-2xl">
              <img 
                src={album.image} 
                alt={album.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Album Info */}
            <div className="flex flex-col justify-end">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Álbum</p>
              <h1 className="text-5xl md:text-7xl font-black mb-4">{album.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <Link 
                  to={`/artist/${album.artistSlug}`}
                  className="font-semibold text-white hover:text-primary transition-colors"
                >
                  {album.artistName}
                </Link>
                <span>•</span>
                <span>{album.year}</span>
                <span>•</span>
                <span>{tracks.length} músicas</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {album.totalDuration}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="gradient-primary text-white px-8 py-6 text-lg font-bold gap-2">
                  <Play className="w-5 h-5" />
                  Reproduzir
                </Button>
                <Button variant="outline" className="border-2 border-white/20 px-6 py-6 gap-2 hover:border-primary">
                  <Heart className="w-5 h-5" />
                  Guardar
                </Button>
                <Button variant="outline" className="border-2 border-white/20 px-6 py-6 gap-2 hover:border-secondary">
                  <Download className="w-5 h-5" />
                  Download
                </Button>
                <Button variant="ghost" size="icon" className="w-14 h-14 border border-white/10">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks List */}
      <main className="container mx-auto px-5 pb-16">
        {/* Table Header */}
        <div className="flex items-center gap-4 px-4 py-3 border-b border-white/10 text-sm text-muted-foreground mb-2">
          <span className="w-8 text-center">#</span>
          <span className="flex-1">Título</span>
          <span className="hidden md:block w-32">Reproduções</span>
          <span className="w-8"></span>
          <span className="w-16 text-right flex items-center justify-end gap-1">
            <Clock className="w-4 h-4" />
          </span>
          <span className="w-8"></span>
        </div>

        {/* Tracks */}
        <div className="space-y-1">
          {tracks.map((track, index) => (
            <Link
              key={track.slug}
              to={`/track/${track.slug}`}
              className={`group flex items-center gap-4 px-4 py-3 transition-colors cursor-pointer ${
                playingTrack === track.slug ? 'bg-primary/10' : 'hover:bg-card'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setPlayingTrack(playingTrack === track.slug ? null : track.slug);
              }}
            >
              {/* Track Number / Play */}
              <span className="w-8 text-center text-muted-foreground font-mono">
                {playingTrack === track.slug ? (
                  <Pause className="w-4 h-4 text-primary mx-auto" />
                ) : (
                  <>
                    <span className="group-hover:hidden">{String(index + 1).padStart(2, '0')}</span>
                    <Play className="w-4 h-4 text-primary mx-auto hidden group-hover:block" />
                  </>
                )}
              </span>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold truncate ${playingTrack === track.slug ? 'text-primary' : ''}`}>
                  {track.title}
                </h4>
                <p className="text-sm text-muted-foreground">{track.artistName}</p>
              </div>

              {/* Plays */}
              <span className="hidden md:block w-32 text-sm text-muted-foreground">
                {track.plays}
              </span>

              {/* Like Button */}
              <Button 
                variant="ghost" 
                size="icon"
                className={`w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity ${
                  likedTracks.includes(track.slug) ? 'opacity-100 text-primary' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleLike(track.slug);
                }}
              >
                <Heart className={`w-4 h-4 ${likedTracks.includes(track.slug) ? 'fill-current' : ''}`} />
              </Button>

              {/* Duration */}
              <span className="w-16 text-right text-sm text-muted-foreground">
                {track.duration}
              </span>

              {/* More Options */}
              <Button 
                variant="ghost" 
                size="icon"
                className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </Link>
          ))}
        </div>

        {/* Album Info */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-1 gradient-primary"></span>
              Sobre o Álbum
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {album.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4">
                <Calendar className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Data de Lançamento</p>
                <p className="font-semibold">{album.releaseDate}</p>
              </div>
              <div className="bg-card p-4">
                <Disc className="w-5 h-5 text-secondary mb-2" />
                <p className="text-sm text-muted-foreground">Editora</p>
                <p className="font-semibold">{album.label}</p>
              </div>
            </div>
          </div>

          {/* More from Artist */}
          {moreFromArtist.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-1 gradient-secondary"></span>
                Mais de {album.artistName}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {moreFromArtist.map((otherAlbum) => (
                  <Link 
                    key={otherAlbum.slug}
                    to={`/album/${otherAlbum.slug}`}
                    className="group"
                  >
                    <div className="aspect-square overflow-hidden mb-3 clip-corner">
                      <img 
                        src={otherAlbum.image} 
                        alt={otherAlbum.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">{otherAlbum.title}</h3>
                    <p className="text-sm text-muted-foreground">{otherAlbum.year}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlbumPage;
