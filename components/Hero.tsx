'use client';

import { useState, useEffect } from "react";
import { Play, Zap, ChevronDown } from "lucide-react";

const heroImages = [
  "https://images.rr.pt/3987842886321247dd34_base.JPG",
  "https://powerlist100.bantumen.com/wp-content/uploads/2022/12/C4-Pedro_Foto_RhoRho-Couture-e1670033903940.jpg",
  "https://cdn-p.smehost.net/sites/944353b54c5947218f12b0bb31a218dc/wp-content/uploads/2020/04/91251953_155552392588982_5920364927435676423_n.jpg",
  "https://forbesafricalusofona.com/wp-content/uploads/WhatsApp-Image-2025-12-22-at-12.17.15.jpeg",
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur px-6 py-3 mb-8 border-l-4 border-primary">
          <span className="w-2 h-2 bg-destructive animate-pulse" />
          <span className="uppercase tracking-widest text-sm font-bold">A Plataforma #1 de Música Angolana</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-8">
          A EVOLUÇÃO DA
          <br />
          <span className="gradient-text">MÚSICA ANGOLANA</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Descubra o futuro da música angolana. Streaming de alta qualidade,
          lançamentos exclusivos, notícias e muito mais.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a href="#explorar" className="btn-hero-primary text-lg">
            <Play className="w-6 h-6" />
            Começar a Ouvir
          </a>
          <a href="#charts" className="btn-hero-secondary text-lg">
            <Zap className="w-6 h-6" />
            Ver Top Charts
          </a>
        </div>

        <a href="#explorar" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Explorar</span>
          <ChevronDown className="w-6 h-6 animate-float" />
        </a>
      </div>
    </section>
  );
};

export const HeroSection = Hero;
