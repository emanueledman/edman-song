import { useParams, Link } from "react-router-dom";
import { Play, Heart, Share2, Download, ArrowLeft, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, ListMusic, Clock, Music, Disc, Calendar, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { getTrack, getAllTracks, Track } from "@/lib/data";

export const TrackPage = () => {
  const { trackSlug } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);
  const [isLiked, setIsLiked] = useState(false);
  const [showLyrics, setShowLyrics] = useState(true);
  
  const track = getTrack(trackSlug || "") || getAllTracks()[0];
  
  if (!track) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-5 py-32 text-center">
          <h1 className="text-4xl font-black mb-4">Música não encontrada</h1>
          <Link to="/" className="text-primary hover:underline">Voltar à página inicial</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  const currentTime = Math.floor((progress / 100) * track.durationSeconds);
  
  // Get related tracks (same artist or genre)
  const relatedTracks = getAllTracks()
    .filter(t => t.slug !== track.slug && (t.artistSlug === track.artistSlug || t.genre === track.genre))
    .slice(0, 4);

  const credits = [
    { role: "Produção", name: "Edman Music Studios" },
    { role: "Composição", name: `${track.artistName}` },
    { role: "Mixagem", name: "João Fernandes" },
    { role: "Masterização", name: "Sound Masters Angola" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO */}
      <Helmet>
        <title>{track.title} - {track.artistName} | AfroSound</title>
        <meta name="description" content={`Ouve ${track.title} de ${track.artistName}. ${track.plays} reproduções. Download disponível em ${track.quality}.`} />
        <meta property="og:title" content={`${track.title} - ${track.artistName}`} />
        <meta property="og:image" content={track.image} />
        <link rel="canonical" href={`https://afrosound.ao/track/${track.slug}`} />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: `url(${track.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(100px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

        <div className="container mx-auto px-5 relative z-10">
          {/* Back Button */}
          <Link 
            to={`/album/${track.albumSlug}`} 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar para {track.albumName}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Track Cover & Player */}
            <div className="text-center lg:text-left">
              {/* Cover */}
              <div className="w-72 h-72 md:w-96 md:h-96 mx-auto lg:mx-0 clip-corner overflow-hidden shadow-2xl mb-8 relative group">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 gradient-primary flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform"
                  >
                    {isPlaying ? (
                      <Pause className="w-10 h-10 text-white" />
                    ) : (
                      <Play className="w-10 h-10 text-white ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Player Controls */}
              <div className="max-w-md mx-auto lg:mx-0">
                {/* Progress Bar */}
                <div className="mb-4">
                  <Slider
                    value={[progress]}
                    onValueChange={(value) => setProgress(value[0])}
                    max={100}
                    step={1}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{track.duration}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <Shuffle className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-12 h-12">
                    <SkipBack className="w-6 h-6" />
                  </Button>
                  <Button 
                    className="w-16 h-16 gradient-primary text-white"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" className="w-12 h-12">
                    <SkipForward className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <Repeat className="w-5 h-5" />
                  </Button>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-3 justify-center">
                  <Volume2 className="w-5 h-5 text-muted-foreground" />
                  <Slider
                    value={[volume]}
                    onValueChange={(value) => setVolume(value[0])}
                    max={100}
                    step={1}
                    className="w-32"
                  />
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div>
              <div className="mb-8">
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
                  {track.genre}
                </p>
                <h1 className="text-5xl md:text-6xl font-black mb-4">{track.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                  <Link 
                    to={`/artist/${track.artistSlug}`}
                    className="text-xl font-semibold text-white hover:text-primary transition-colors"
                  >
                    {track.artistName}
                  </Link>
                  <span>•</span>
                  <Link 
                    to={`/album/${track.albumSlug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {track.albumName}
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-card p-4 text-center">
                  <BarChart3 className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-black">{track.plays}</p>
                  <p className="text-xs text-muted-foreground">Reproduções</p>
                </div>
                <div className="bg-card p-4 text-center">
                  <Heart className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-black">{track.likes}</p>
                  <p className="text-xs text-muted-foreground">Gostos</p>
                </div>
                <div className="bg-card p-4 text-center">
                  <Download className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-black">{track.downloads}</p>
                  <p className="text-xs text-muted-foreground">Downloads</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  variant={isLiked ? "default" : "outline"}
                  className={`gap-2 px-6 py-6 ${isLiked ? 'gradient-primary text-white' : 'border-2 border-white/20 hover:border-primary'}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Guardada' : 'Guardar'}
                </Button>
                <Button variant="outline" className="gap-2 border-2 border-white/20 px-6 py-6 hover:border-secondary">
                  <Download className="w-5 h-5" />
                  Download ({track.fileSize})
                </Button>
                <Button variant="ghost" size="icon" className="w-14 h-14 border border-white/10">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-14 h-14 border border-white/10">
                  <ListMusic className="w-5 h-5" />
                </Button>
              </div>

              {/* Technical Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card/50 p-3">
                  <p className="text-xs text-muted-foreground">Duração</p>
                  <p className="font-semibold">{track.duration}</p>
                </div>
                <div className="bg-card/50 p-3">
                  <p className="text-xs text-muted-foreground">BPM</p>
                  <p className="font-semibold">{track.bpm}</p>
                </div>
                <div className="bg-card/50 p-3">
                  <p className="text-xs text-muted-foreground">Tom</p>
                  <p className="font-semibold">{track.key}</p>
                </div>
                <div className="bg-card/50 p-3">
                  <p className="text-xs text-muted-foreground">Qualidade</p>
                  <p className="font-semibold">{track.quality}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="container mx-auto px-5 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Lyrics */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-8 h-1 gradient-primary"></span>
                Letra
              </h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowLyrics(!showLyrics)}
              >
                {showLyrics ? 'Esconder' : 'Mostrar'}
              </Button>
            </div>
            
            {showLyrics && (
              <div className="bg-card p-8">
                <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-muted-foreground">
                  {track.lyrics || "Letra não disponível."}
                </pre>
              </div>
            )}

            {/* Credits */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 gradient-secondary"></span>
                Créditos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {credits.map((credit, index) => (
                  <div key={index} className="bg-card p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{credit.role}</p>
                    <p className="font-semibold">{credit.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Related Tracks */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 gradient-accent"></span>
              Músicas Relacionadas
            </h2>
            <div className="space-y-4">
              {relatedTracks.map((related) => (
                <Link 
                  key={related.slug}
                  to={`/track/${related.slug}`}
                  className="group flex items-center gap-4 p-3 bg-card hover:bg-card/80 transition-colors"
                >
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden clip-corner relative">
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{related.artistName}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{related.plays}</span>
                </Link>
              ))}
            </div>

            {/* Release Info */}
            <div className="mt-8 bg-card p-6">
              <h3 className="font-bold mb-4">Informação de Lançamento</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{track.releaseDate}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Disc className="w-5 h-5 text-secondary" />
                  <Link to={`/album/${track.albumSlug}`} className="hover:text-white transition-colors">
                    {track.albumName}
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Music className="w-5 h-5 text-accent" />
                  <span>{track.genre}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackPage;
