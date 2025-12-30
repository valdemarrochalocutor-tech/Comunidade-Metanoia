
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GeminiRoadmap from './components/GeminiRoadmap';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Pain Section / Introduction */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight">
              Você já sentiu que está vivendo no <span className="text-metanoia-gold italic">piloto automático</span>, repetindo os mesmos erros e perdendo sua essência?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <p className="text-zinc-400 text-lg leading-relaxed">
                A maioria das pessoas passa a vida tentando mudar o exterior sem nunca olhar para o que realmente governa suas ações: a mente. Sem uma renovação mental profunda, qualquer mudança externa é temporária.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Na Comunidade Metanoia, nós não damos apenas ferramentas. Nós construímos um ecossistema de transformação onde você aprende a dominar seus pensamentos, alinhar-se ao seu propósito e agir com intenção.
              </p>
            </div>
          </div>
        </section>

        <Features />
        
        <GeminiRoadmap />

        <div id="testimonials">
          <Testimonials />
        </div>

        <Pricing />

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
