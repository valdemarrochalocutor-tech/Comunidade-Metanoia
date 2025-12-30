
import React from 'react';
import { BookOpen, Users, Video, Award, Target, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Module } from '../types';

const modules: Module[] = [
  { id: 1, title: 'Domínio Mental', description: 'Técnicas avançadas para reprogramação de crenças limitantes e foco inabalável.', icon: 'Zap' },
  { id: 2, title: 'Equilíbrio Espiritual', description: 'Uma jornada profunda para reconectar-se com seu propósito e paz interior.', icon: 'Target' },
  { id: 3, title: 'Aulas ao Vivo', description: 'Encontros semanais para tirar dúvidas e aprofundar o conhecimento em tempo real.', icon: 'Video' },
  { id: 4, title: 'Comunidade Exclusiva', description: 'Network com pessoas que estão no mesmo nível de comprometimento que você.', icon: 'Users' },
  { id: 5, title: 'Material de Apoio', description: 'PDFs, Workbooks e guias práticos para acelerar sua implementação.', icon: 'BookOpen' },
  { id: 6, title: 'Certificação', description: 'Ao completar a jornada, receba o selo de membro oficial da Comunidade Metanoia.', icon: 'Award' },
];

const IconMap: Record<string, any> = { BookOpen, Users, Video, Award, Target, Zap };

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0d0d0f]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="O que você terá acesso" 
          subtitle="Uma estrutura completa desenhada para levar você do caos mental à clareza absoluta."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m) => {
            const Icon = IconMap[m.icon];
            return (
              <div key={m.id} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-metanoia-gold transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-metanoia-gold transition-colors duration-300">
                  <Icon className="text-metanoia-gold group-hover:text-black" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{m.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
