
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-metanoia-gold opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 opacity-5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-full text-zinc-400 text-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-metanoia-gold animate-pulse"></span>
          Inscrições abertas para a nova turma
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
          A Jornada para a sua <br />
          <span className="text-metanoia-gold italic">Renovação Mental.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Descubra como reprogramar sua mente, encontrar seu propósito e viver uma vida de abundância através da Comunidade Metanoia. O próximo nível da sua existência começa aqui.
        </p>

        <div className="flex justify-center mb-16">
          <a href="https://pay.hotmart.com/G102466880Q?bid=1766516782677" target="_blank" rel="noopener noreferrer" className="gradient-gold text-black font-extrabold px-10 py-5 rounded-full text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-2 group">
            Quero Minha Transformação <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto border-t border-zinc-800 pt-10">
          {[
            'mais de 1000 pessoas impactadas',
            'Aulas Semanais',
            'Sorteio de Mentoria individual todos os meses',
            'Comunidade Ativa'
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <CheckCircle className="text-metanoia-gold mb-2" size={20} />
              <span className="text-xs md:text-sm font-medium text-zinc-400 max-w-[180px]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
