import { Calendar, MapPin, Ticket, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: "1",
    title: "Edman Music Festival 2026",
    date: "15 Março",
    time: "18:00",
    location: "Estádio 11 de Novembro, Luanda",
    artists: ["Yola Semedo", "C4 Pedro", "Anselmo Ralph"],
    artistIds: ["yola-semedo", "c4-pedro", "anselmo-ralph"],
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    price: "5.000 Kz",
    featured: true,
  },
  {
    id: "2",
    title: "Kuduro Night",
    date: "22 Fev",
    time: "21:00",
    location: "Luanda Music Hall",
    artists: ["Nagrelha", "Titica"],
    artistIds: ["nagrelha", "titica"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    price: "3.000 Kz",
    featured: false,
  },
  {
    id: "3",
    title: "Kizomba Lovers",
    date: "28 Fev",
    time: "20:00",
    location: "Belas Shopping",
    artists: ["Filho do Zua", "Gerilson"],
    artistIds: ["filho-do-zua", "gerilson-insrael"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    price: "2.500 Kz",
    featured: false,
  },
];

export const EventsSection = () => {
  return (
    <section className="py-16" id="eventos">
      <div className="flex justify-between items-end mb-10">
        <h2 className="section-title">
          Próximos <span className="gradient-text">Eventos</span>
        </h2>
        <Link href="/events"
          className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-4 transition-all"
        >
          Ver Todos
          <span className="w-8 h-0.5 bg-primary" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured Event */}
        <Link href={`/event/${events[0].id}`}
          className="lg:row-span-2 relative group overflow-hidden"
        >
          <img
            src={events[0].image}
            alt={events[0].title}
            className="w-full h-full object-cover min-h-[500px] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="inline-block bg-primary px-4 py-2 mb-4">
              <span className="font-black uppercase text-sm">Evento em Destaque</span>
            </div>
            
            <h3 className="text-4xl font-black mb-4 group-hover:text-primary transition-colors">{events[0].title}</h3>
            
            <div className="flex flex-wrap gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{events[0].date} • {events[0].time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{events[0].location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {events[0].artists.map((artist, index) => (
                <Link 
                  key={artist} href={`/artist/${events[0].artistIds[index]}`}
                  className="px-4 py-2 bg-white/10 backdrop-blur text-sm font-semibold hover:bg-primary/50 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {artist}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">A partir de</p>
                <p className="text-3xl font-black gradient-text">{events[0].price}</p>
              </div>
              <span className="btn-hero-primary">
                <Ticket className="w-5 h-5" />
                Comprar Bilhetes
              </span>
            </div>
          </div>
        </Link>

        {/* Other Events */}
        {events.slice(1).map((event) => (
          <Link
            key={event.id} href={`/event/${event.id}`}
            className="group flex gap-6 bg-card p-6 border-l-4 border-transparent hover:border-secondary transition-all duration-300"
          >
            <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date} • {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
                <div className="flex gap-1">
                  {event.artists.map((artist, index) => (
                    <span key={artist} className="text-xs text-muted-foreground">
                      {artist}{index < event.artists.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-secondary">{event.price}</span>
                <span className="flex items-center gap-2 text-sm font-bold uppercase text-primary group-hover:gap-4 transition-all">
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
