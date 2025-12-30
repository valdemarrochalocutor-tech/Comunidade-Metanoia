
import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Pricing: React.FC = () => {
  const checkoutLink = "https://pay.hotmart.com/G102466880Q?bid=1766516782677";

  return (
    <section id="pricing" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Escolha o seu plano de acesso" 
          subtitle="Investimento na única coisa que ninguém pode tirar de você: seu conhecimento e evolução pessoal."
        />

        <div className="max-w-lg mx-auto">
          {/* Annual Plan - Single Plan focused */}
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900 border-2 border-metanoia-gold/30 relative flex flex-col h-full hover:border-metanoia-gold transition-all shadow-[0_0_50px_rgba(212,175,55,0.05)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-metanoia-gold text-black px-6 py-1 rounded-full font-bold text-sm uppercase tracking-wider">
              Oferta Especial
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
              <p className="text-zinc-400">Acesso completo à nossa comunidade e metodologia.</p>
            </div>
            
            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-zinc-400 text-xl">12x de</span>
                <span className="text-5xl font-bold text-metanoia-gold">R$ 23</span>
                <span className="text-metanoia-gold font-bold text-2xl">,25</span>
              </div>
              <p className="text-zinc-500 mt-2 text-sm">Ou R$ 279,00 / ano à vista</p>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {[
                'Acesso a todos os módulos atuais',
                'Todas as aulas ao vivo futuras',
                'Acesso à comunidade por 1 ano',
                'Material de apoio (Workbooks)',
                'Certificado de conclusão',
                'Bônus: Masterclass com convidados'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="text-metanoia-gold mt-1" size={18} />
                  <span className="text-zinc-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <a 
              href={checkoutLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center gradient-gold text-black font-extrabold py-5 rounded-xl hover:scale-[1.02] transition-all shadow-lg text-lg"
            >
              QUERO MINHA TRANSFORMAÇÃO AGORA
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center gap-4 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 max-w-2xl">
            <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-metanoia-gold" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Garantia Incondicional de 7 Dias</h4>
              <p className="text-zinc-400 text-sm">
                Entre, assista às aulas, participe da comunidade. Se por qualquer motivo você achar que não é para você, basta pedir o reembolso e devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
