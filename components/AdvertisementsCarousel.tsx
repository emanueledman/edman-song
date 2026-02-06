'use client';

import { useState, useEffect } from "react";

const advertisements = [
  {
    id: 1,
    title: "MTC Angola",
    description: "Dados Ilimitados para Streaming",
  },
  {
    id: 2,
    title: "Premium Edman Music",
    description: "Sem Publicidades • Qualidade HD • Downloads Ilimitados",
  },
  {
    id: 3,
    title: "Novos Lançamentos",
    description: "Kizomba • Semba • Kuduro • Afro House",
  },
  {
    id: 4,
    title: "Festival Edman Music 2026",
    description: "Março • Luanda • Ingressos à Venda",
  },
];

export const AdvertisementsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advertisements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-card rounded-lg overflow-hidden">
      {advertisements.map((ad, index) => (
        <div
          key={ad.id}
          className={`absolute inset-0 flex flex-col justify-center px-8 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-black mb-2">{ad.title}</h3>
          <p className="text-muted-foreground">{ad.description}</p>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {advertisements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
