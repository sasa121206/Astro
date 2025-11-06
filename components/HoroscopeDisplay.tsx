
import React from 'react';
import type { ZodiacSign } from '../types';

interface HoroscopeDisplayProps {
  horoscope: string;
  isLoading: boolean;
  error: string | null;
  selectedSign: ZodiacSign | null;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-400"></div>
        <p className="text-slate-400">Consultando as estrelas...</p>
    </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
        <p className="font-bold">Ocorreu um Erro</p>
        <p className="text-sm">{message}</p>
    </div>
);

const InitialMessage: React.FC = () => (
    <div className="text-center text-slate-500">
        <p>Seu destino diário o aguarda.</p>
    </div>
);


export const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ horoscope, isLoading, error, selectedSign }) => {
    const renderContent = () => {
        if (isLoading) {
            return <LoadingSpinner />;
        }
        if (error) {
            return <ErrorDisplay message={error} />;
        }
        if (horoscope && selectedSign) {
            return (
                <div className="animate-fade-in space-y-4">
                    <h2 className="text-3xl font-bold text-center text-purple-300">{selectedSign.name}</h2>
                    <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">{horoscope}</p>
                </div>
            );
        }
        return <InitialMessage />;
    };

    return (
        <div className="min-h-[200px] max-w-2xl mx-auto p-6 md:p-8 rounded-lg bg-slate-800/50 border border-slate-700 shadow-xl flex items-center justify-center">
            {renderContent()}
        </div>
    );
};

// Add a simple fade-in animation for when the horoscope appears
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
`;
document.head.appendChild(style);
