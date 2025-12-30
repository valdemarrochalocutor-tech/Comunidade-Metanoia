
import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { getPersonalizedRoadmap } from '../services/geminiService';
import { GeminiResponse } from '../types';

const GeminiRoadmap: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeminiResponse | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const data = await getPersonalizedRoadmap(input);
      setResult(data);
    } catch (error) {
      alert("Houve um erro ao processar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0d0d0f]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 border-b border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-metanoia-gold" size={28} />
              <span className="text-metanoia-gold font-semibold uppercase tracking-widest text-sm">Assistente de Transformação IA</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">
              Como seria seu plano de 30 dias na Metanoia?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Conte-nos um pouco sobre seu maior desafio atual ou o que você deseja alcançar. Nossa IA treinada na metodologia Metanoia criará um roadmap exclusivo para você.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Sinto-me travado na carreira e sem propósito..."
                className="flex-1 bg-black border border-zinc-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-metanoia-gold transition-colors"
              />
              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="gradient-gold text-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={18} /> Gerar Roadmap</>}
              </button>
            </div>
          </div>

          {result && (
            <div className="p-8 md:p-12 bg-black animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-8">
                <h3 className="text-metanoia-gold font-bold text-xl mb-3">Nossa Análise:</h3>
                <p className="text-gray-300 leading-relaxed italic">"{result.analysis}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {result.roadmap.map((step, idx) => (
                  <div key={idx} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <div className="text-metanoia-gold font-bold mb-2">PASSO 0{idx + 1}</div>
                    <h4 className="font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-metanoia-gold">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-metanoia-gold" size={20} />
                  O veredito Metanoia
                </h4>
                <p className="text-gray-400 text-sm">
                  {result.recommendation}
                </p>
              </div>
              
              <div className="mt-10 text-center">
                <a href="https://pay.hotmart.com/G102466880Q?bid=1766516782677" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-metanoia-gold font-bold border-b-2 border-metanoia-gold pb-1 hover:gap-4 transition-all">
                  Gostou do plano? Comece agora a executá-lo <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiRoadmap;
