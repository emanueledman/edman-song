import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "João Silva",
    role: "DJ Profissional",
    avatar: "JS",
    content: "O AfroSound mudou completamente a forma como descubro música angolana. A qualidade do streaming é incrível e a curadoria é top!",
    rating: 5,
  },
  {
    id: "2",
    name: "Maria Santos",
    role: "Amante de Kizomba",
    avatar: "MS",
    content: "Finalmente uma plataforma que valoriza a nossa música! As playlists de Kizomba são perfeitas para qualquer ocasião.",
    rating: 5,
  },
  {
    id: "3",
    name: "André Domingos",
    role: "Produtor Musical",
    avatar: "AD",
    content: "Como produtor, uso o AfroSound para acompanhar as tendências e descobrir novos talentos. Recomendo a todos!",
    rating: 5,
  },
  {
    id: "4",
    name: "Carla Mendes",
    role: "Estudante",
    avatar: "CM",
    content: "A app é super fácil de usar e posso ouvir as minhas músicas favoritas mesmo sem internet. Muito bom!",
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <h2 className="section-title text-center mx-auto w-fit">
        O Que Dizem <span className="gradient-text">Sobre Nós</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="group relative bg-card p-8 border-t-4 border-transparent hover:border-primary transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating ? 'fill-warning text-warning' : 'text-muted'
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-black text-white">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
