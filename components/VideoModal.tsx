
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // Prevenir scroll do body quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop com animação suave */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl aspect-video bg-zinc-950 rounded-2xl border border-metanoia-gold/40 shadow-[0_0_100px_rgba(212,175,55,0.3)] overflow-hidden animate-in zoom-in-95 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[10000] w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-metanoia-gold hover:text-black transition-all hover:rotate-90"
          aria-label="Fechar vídeo"
        >
          <X size={28} />
        </button>

        {/* Video Player Container */}
        <div className="w-full h-full">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/S_8qKCDhA3Y?autoplay=1&rel=0&modestbranding=1" 
            title="Apresentação Comunidade Metanoia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
