import { Smartphone, Download, Check, Music, Headphones, Wifi } from "lucide-react";

const features = [
  { icon: Music, text: "Mais de 50.000 músicas" },
  { icon: Headphones, text: "Qualidade de áudio premium" },
  { icon: Wifi, text: "Modo offline disponível" },
];

export const AppDownload = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-white rotate-45" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rotate-45" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 mb-6">
            <Smartphone className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm uppercase tracking-wider text-primary">Disponível em Breve</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Leva a Música Angolana <span className="gradient-text">Contigo</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A aplicação Edman Music está a chegar! Descarrega em breve e leva toda a música angolana no teu bolso.
            Streaming ilimitado, downloads offline e muito mais.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-4 mb-10">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-4 bg-white text-background px-8 py-4 hover:bg-primary hover:text-white transition-colors group">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-70">Disponível na</p>
                <p className="font-bold text-lg">App Store</p>
              </div>
            </button>

            <button className="flex items-center gap-4 bg-white text-background px-8 py-4 hover:bg-primary hover:text-white transition-colors group">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-70">Disponível no</p>
                <p className="font-bold text-lg">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-72 h-[580px] bg-gradient-to-b from-card to-muted border-4 border-white/20 relative overflow-hidden">
              {/* Screen Content */}
              <div className="absolute inset-2 bg-background overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 py-2 text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-3/4 h-full bg-secondary" />
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 py-6">
                  <h3 className="text-xl font-black gradient-text">Edman Music</h3>
                  <p className="text-xs text-muted-foreground">Boa noite, João</p>
                </div>

                {/* Mini Player */}
                <div className="absolute bottom-0 left-0 right-0 bg-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">Chorou</p>
                      <p className="text-xs text-muted-foreground">Anderson Mário</p>
                    </div>
                    <div className="w-10 h-10 bg-primary flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-muted/50">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/50 to-secondary/50" />
                      <div className="flex-1">
                        <div className="h-3 bg-muted rounded w-3/4 mb-1" />
                        <div className="h-2 bg-muted rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
