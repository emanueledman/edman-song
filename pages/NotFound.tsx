import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, Search, Music, ArrowLeft, Disc3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-5 text-center">
          {/* Animated 404 */}
          <div className="relative mb-8">
            <h1 className="text-[12rem] md:text-[16rem] font-black leading-none gradient-text opacity-20">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Disc3 className="w-24 h-24 md:w-32 md:h-32 text-primary animate-spin-slow" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Oops! Página <span className="gradient-text">Não Encontrada</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A página que procura não existe ou foi movida. 
            Mas não se preocupe, temos muita música boa à sua espera!
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/">
              <Button className="btn-hero-primary gap-2">
                <Home className="w-5 h-5" />
                Página Inicial
              </Button>
            </Link>
            <Link to="/releases">
              <Button variant="outline" className="border-2 gap-2 px-6 py-6">
                <Music className="w-5 h-5" />
                Lançamentos
              </Button>
            </Link>
            <Link to="/artists">
              <Button variant="outline" className="border-2 gap-2 px-6 py-6">
                <Search className="w-5 h-5" />
                Artistas
              </Button>
            </Link>
          </div>

          {/* Go Back */}
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à página anterior</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
