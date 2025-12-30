
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-serif font-bold mb-6 text-metanoia-gold">METANOIA</div>
        <p className="text-zinc-500 max-w-md mx-auto mb-8 text-sm">
          A Comunidade Metanoia é um ambiente de desenvolvimento pessoal focado na renovação da mente. Resultados individuais podem variar.
        </p>
        <div className="flex justify-center gap-8 text-zinc-400 text-sm mb-8">
          <a href="#" className="hover:text-metanoia-gold transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-metanoia-gold transition-colors">Políticas de Privacidade</a>
          <a href="#" className="hover:text-metanoia-gold transition-colors">Suporte</a>
        </div>
        <div className="text-zinc-600 text-xs">
          © 2024 Comunidade Metanoia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
