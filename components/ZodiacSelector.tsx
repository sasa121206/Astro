
import React from 'react';
import type { ZodiacSign } from '../types';

interface ZodiacSelectorProps {
  signs: ZodiacSign[];
  onSelectSign: (sign: ZodiacSign) => void;
  selectedSign: ZodiacSign | null;
  isLoading: boolean;
}

export const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({ signs, onSelectSign, selectedSign, isLoading }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
      {signs.map((sign) => {
        const isSelected = selectedSign?.name === sign.name;
        const Icon = sign.icon;
        return (
          <button
            key={sign.name}
            onClick={() => onSelectSign(sign)}
            disabled={isLoading}
            className={`
              group aspect-square flex flex-col items-center justify-center p-2 rounded-lg 
              border border-slate-700 bg-slate-800/50
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-purple-500
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isSelected
                ? 'bg-purple-600/50 border-purple-500 scale-105 shadow-lg shadow-purple-900/50'
                : 'hover:border-purple-500 hover:bg-slate-700/50 hover:scale-105'
              }
            `}
          >
            <Icon className={`
              w-10 h-10 md:w-12 md:h-12 
              transition-colors duration-300
              ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-purple-300'}
            `} />
            <span className={`
              mt-2 text-xs md:text-sm font-medium
              transition-colors duration-300
              ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}
            `}>
              {sign.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};
