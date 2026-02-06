import { Waves, ArrowRight } from "lucide-react";

const footerLinks = {
  plataforma: ["Explorar", "Rádio Ao Vivo", "Playlists", "Top Charts", "Novidades"],
  empresa: ["Sobre Nós", "Carreiras", "Imprensa", "Parcerias", "Contacto"],
  suporte: ["Centro de Ajuda", "FAQ", "Termos de Uso", "Privacidade", "Cookies"],
  artistas: ["Para Artistas", "Distribuição", "Promoção", "Analytics", "Recursos"],
};

const socials = [
  { name: "Facebook", icon: "fa-facebook-f" },
  { name: "Instagram", icon: "fa-instagram" },
  { name: "Twitter", icon: "fa-x-twitter" },
  { name: "YouTube", icon: "fa-youtube" },
  { name: "TikTok", icon: "fa-tiktok" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/5">
      {/* Newsletter Section */}
      <div className="container mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <h3 className="text-3xl font-black mb-2">Fica a Par de Tudo</h3>
            <p className="text-muted-foreground">Subscreve e recebe as últimas novidades da música angolana.</p>
          </div>
          <div className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="O teu email"
              className="flex-1 lg:w-80 bg-muted px-6 py-4 border-l-4 border-primary text-white focus:outline-none placeholder:text-muted-foreground"
            />
            <button className="bg-primary px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors flex items-center gap-2">
              Subscrever
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-5 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 text-xl font-black uppercase mb-6">
              <div className="w-10 h-10 gradient-primary flex items-center justify-center">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <span className="gradient-text">Edman Music</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              A plataforma #1 de música angolana. Descobre, ouve e partilha a melhor música.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <i className={`fa-brands ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Edman Music. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
