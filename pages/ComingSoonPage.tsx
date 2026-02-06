import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Construction, Rocket, Bell, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Obrigado! Vamos notificá-lo quando esta funcionalidade estiver disponível.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-5 text-center">
          {/* Icon Animation */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full animate-pulse" />
            <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
              <Construction className="w-16 h-16 text-primary" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-secondary animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4">
            Em <span className="gradient-text">Desenvolvimento</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Estamos a trabalhar arduamente para trazer esta funcionalidade até si. 
            Em breve terá acesso a mais conteúdos incríveis!
          </p>

          {/* Features Coming */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card px-4 py-2 border border-border">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm">Novas funcionalidades</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 border border-border">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-sm">Experiência melhorada</span>
            </div>
          </div>

          {/* Notify Form */}
          <form onSubmit={handleNotify} className="max-w-md mx-auto mb-12">
            <p className="text-sm text-muted-foreground mb-4">
              Quer ser notificado quando esta página estiver pronta?
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="O seu email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border h-12"
                required
              />
              <Button type="submit" className="bg-primary px-6 h-12 gap-2">
                <Bell className="w-4 h-4" />
                Notificar
              </Button>
            </div>
          </form>

          {/* Back Button */}
          <Link to="/">
            <Button variant="outline" className="gap-2 border-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar à Página Inicial
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;
