
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
        Astrology Insights
      </h1>
      <p className="text-slate-400 mt-2 text-sm md:text-base">Selecione seu signo para revelar a sabedoria das estrelas.</p>
    </header>
  );
};
