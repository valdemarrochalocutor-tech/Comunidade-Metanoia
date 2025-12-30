
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-metanoia-gold mt-6 ${centered ? 'mx-auto' : 'mr-auto'}`}></div>
    </div>
  );
};

export default SectionHeading;
