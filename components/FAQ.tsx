
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from './SectionHeading';

const faqs = [
  { 
    q: "A Metanoia é religiosa?", 
    a: "Sim. A Comunidade Metanoia é fundamentada na Fé Católica Apostólica Romana, compreendendo a espiritualidade como pilar central da vida humana. Nossa proposta une fé, autoconhecimento e renovação interior, sempre à luz dos ensinamentos cristãos, respeitando cada pessoa em sua caminhada, mas sem abrir mão da nossa identidade católica." 
  },
  { 
    q: "Não tenho muito tempo, consigo acompanhar?", 
    a: "Com certeza. As aulas são divididas em pequenos blocos para que você possa consumir no seu ritmo. Além disso, os encontros ao vivo ficam gravados." 
  },
  { 
    q: "Para quem é a Comunidade Metanoia?", 
    a: "Para pessoas que sentem que estão presas a ciclos repetitivos, que buscam um propósito maior e que querem dominar suas emoções e pensamentos para viver com mais paz e prosperidade." 
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0d0d0f]">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeading title="Perguntas Frequentes" />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-zinc-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-metanoia-gold" /> : <ChevronDown className="text-zinc-500" />}
              </button>
              {openIndex === idx && (
                <div className="p-6 bg-zinc-900/20 text-zinc-400 border-t border-zinc-800 animate-in fade-in duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
