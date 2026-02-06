import { Gift, Sparkles, Check } from "lucide-react";

const benefits = [
  "Música sem anúncios",
  "Downloads ilimitados",
  "Qualidade de áudio HD",
  "Acesso exclusivo a lançamentos",
];

export const PremiumBanner = () => {
  return (
    <div className="relative bg-card border-l-4 border-secondary p-8 sm:p-10 my-16 overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-primary/10 blur-3xl" />
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-secondary" />
            <span className="uppercase tracking-widest text-sm font-bold text-secondary">Premium</span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-black mb-4">
            Eleva a Tua <span className="gradient-text">Experiência</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">A partir de</p>
            <p className="text-4xl font-black gradient-text">500 Kz<span className="text-lg text-muted-foreground">/mês</span></p>
          </div>
          <a href="#" className="btn-hero-primary">
            <Gift className="w-5 h-5" />
            30 Dias Grátis
          </a>
        </div>
      </div>
    </div>
  );
};
