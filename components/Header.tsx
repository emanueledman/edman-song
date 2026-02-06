'use client';

import { useState } from "react";
import { Search, Crown, User, Menu, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Início", href: "#", active: true },
  { label: "Explorar", href: "#explorar" },
  { label: "Gêneros", href: "#generos" },
  { label: "Rádio", href: "#radio" },
  { label: "Eventos", href: "#eventos" },
  { label: "Premium", href: "#premium" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/a/ACg8ocI93GSROQhzOrxBvucJ2YRvc99V3fq6pt4qICYK1EPU9umlTd8b=s288-c-no" 
              alt="A Evolução da Música Angolana" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-black uppercase tracking-tight leading-tight">Edman Music</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link relative font-medium text-sm py-2 transition-colors ${
                  item.active ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center bg-muted px-5 py-3 w-72 border-l-4 border-primary">
              <Search className="w-4 h-4 text-muted-foreground mr-3" />
              <input
                type="text"
                placeholder="Buscar músicas, artistas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-white w-full text-sm focus:outline-none placeholder:text-muted-foreground"
              />
            </div>

            {/* Premium Button */}
            <Button className="hidden sm:inline-flex px-6 py-3 gradient-secondary text-dark-DEFAULT font-bold uppercase tracking-wider">
              <Crown className="w-4 h-4" />
              Premium
            </Button>

            {/* User Avatar */}
            <div className="w-10 h-10 gradient-accent flex items-center justify-center cursor-pointer">
              <User className="w-5 h-5 text-white" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-white/5 rounded-full px-5 py-3 border border-white/10 mb-4">
              <Search className="w-4 h-4 text-muted-foreground mr-3" />
              <input
                type="text"
                placeholder="Buscar músicas, artistas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-white w-full text-sm focus:outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium text-base py-2 transition-colors ${
                    item.active ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
