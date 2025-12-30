
import React from 'react';
import SectionHeading from './SectionHeading';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { 
    id: 1, 
    name: 'Ricardo Silveira', 
    role: 'Empreendedor', 
    content: 'A Comunidade Metanoia não mudou apenas meu negócio, mudou minha forma de enxergar o mundo. Hoje sou um líder muito mais consciente.', 
    avatar: 'https://picsum.photos/100/100?random=1' 
  },
  { 
    id: 2, 
    name: 'Helena Mendes', 
    role: 'Psicóloga', 
    content: 'O conteúdo é denso, prático e transformador. Recomendo para todos que sentem que estão vivendo abaixo do seu potencial real.', 
    avatar: 'https://picsum.photos/100/100?random=2' 
  },
  { 
    id: 3, 
    name: 'Lucas Ferreira', 
    role: 'Estudante', 
    content: 'Finalmente encontrei um lugar onde espiritualidade e performance caminham juntas. Grato demais por fazer parte desse grupo.', 
    avatar: 'https://picsum.photos/100/100?random=3' 
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0b]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Histórias de Transformação" 
          subtitle="Pessoas comuns que decidiram sair do automático e assumir o controle de suas mentes."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl relative">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-6xl text-metanoia-gold/10 font-serif leading-none">"</span>
              </div>
              <p className="text-zinc-300 text-lg mb-8 italic relative z-10 leading-relaxed">
                {t.content}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-metanoia-gold" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-zinc-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
