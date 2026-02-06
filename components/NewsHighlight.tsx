import { Newspaper, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const news = [
  {
    id: "1",
    title: "Tshunami faz história e conquista o primeiro Disco de Ouro do Kuduro em Angola",
    excerpt: "O artista revolucionou o panorama musical angolano com o seu último álbum, estabelecendo novos padrões para o gênero.",
    author: "Maurício Kaleya",
    date: "2 de Fevereiro, 2026",
    image: "https://i0.wp.com/www.vicentenews.com/wp-content/uploads/2026/02/Tshunami.png?w=1500&ssl=1",
    featured: true,
  },
  {
    id: "2",
    title: "12 Furos surpreende internautas com novo look e recebe alcunha de “Nagralha do Rap",
    excerpt: "12 Furos surpreendeu os internautas ao surgir com um novo look, que rapidamente chamou a atenção nas redes sociais. A mudança visual não passou despercebida e acabou por gerar diversas reações e comentários.",
    author: "Ana Domingos",
    date: "1 de Fevereiro, 2026",
    image: "https://i0.wp.com/www.vicentenews.com/wp-content/uploads/2026/02/12-Furos.jpg?w=1065&ssl=1",
    featured: false,
  },
  {
    id: "3",
    title: "Lil Saint presta homenagem ao pai e reforça a continuidade de um legado musical",
    excerpt: "Lil Saint tocou o coração de fãs e seguidores ao partilhar, recentemente, uma imagem do seu eterno pai, Lisboa Santos, acompanhada de uma mensagem carregada de significado: “O legado continua",
    author: "João Silva",
    date: "31 de Janeiro, 2026",
    image: "https://i0.wp.com/www.vicentenews.com/wp-content/uploads/2024/08/lil-saint-2.jpg?w=1054&ssl=1",
    featured: false,
  },
];

export const NewsHighlight = () => {
  const featuredNews = news.find((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured);

  return (
    <section className="py-16" id="noticias">
      <div className="flex justify-between items-end mb-10">
        <h2 className="section-title">
          Últimas <span className="gradient-text">Notícias</span>
        </h2>
        <Link href="/news"
          className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-4 transition-all"
        >
          Ver Todas
          <span className="w-8 h-0.5 bg-primary" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured News */}
        {featuredNews && (
          <Link href={`/news/${featuredNews.id}`}
            className="group relative overflow-hidden lg:row-span-2"
          >
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-full min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary px-4 py-1 text-xs font-bold uppercase">Em Destaque</span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {featuredNews.date}
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-black mb-4 group-hover:text-primary transition-colors">
                {featuredNews.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">{featuredNews.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Por <strong>{featuredNews.author}</strong></span>
                <span className="flex items-center gap-2 font-bold uppercase text-sm text-primary group-hover:gap-4 transition-all">
                  Ler Mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Other News */}
        {otherNews.map((item) => (
          <Link
            key={item.id} href={`/news/${item.id}`}
            className="group flex gap-6 bg-card p-6 border-l-4 border-transparent hover:border-primary transition-all duration-300"
          >
            <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Clock className="w-3 h-3" />
                  {item.date}
                </span>
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Por {item.author}</span>
                <ArrowRight className="w-4 h-4 text-primary translate-x-0 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
