
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold tracking-tight text-white">
          META<span className="text-metanoia-gold">NOIA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-zinc-300 font-medium">
          <a href="#features" className="hover:text-metanoia-gold transition-colors">O que é</a>
          <a href="#testimonials" className="hover:text-metanoia-gold transition-colors">Depoimentos</a>
          <a href="#pricing" className="hover:text-metanoia-gold transition-colors">Planos</a>
        </div>

        <a href="https://pay.hotmart.com/G102466880Q?bid=1766516782677" target="_blank" rel="noopener noreferrer" className="bg-metanoia-gold text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform text-sm md:text-base">
          Começar Agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
