import { Music, Users, Radio, Headphones } from "lucide-react";

const stats = [
  { icon: Music, number: "50K+", label: "Músicas", color: "primary" },
  { icon: Users, number: "5K+", label: "Artistas", color: "secondary" },
  { icon: Headphones, number: "1M+", label: "Ouvintes", color: "accent" },
  { icon: Radio, number: "24/7", label: "Rádio Ao Vivo", color: "warning" },
];

export const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`group relative p-10 bg-card text-center border-b-4 border-${stat.color} hover:bg-${stat.color} transition-all duration-500 animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <stat.icon className={`w-12 h-12 mx-auto mb-4 text-${stat.color} group-hover:text-white transition-colors`} />
            <div className="text-5xl lg:text-6xl font-black mb-2 group-hover:text-white transition-colors">
              {stat.number}
            </div>
            <p className="text-muted-foreground uppercase tracking-widest text-sm group-hover:text-white/80 transition-colors">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
