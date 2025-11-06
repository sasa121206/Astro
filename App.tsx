import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ZodiacSelector } from './components/ZodiacSelector';
import { HoroscopeDisplay } from './components/HoroscopeDisplay';
import { generateHoroscope } from './services/geminiService';
import { zodiacSigns } from './constants';
import type { ZodiacSign } from './types';

const App: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [horoscope, setHoroscope] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelectSign = useCallback(async (sign: ZodiacSign) => {
    setSelectedSign(sign);
    setIsLoading(true);
    setError(null);
    setHoroscope('');

    try {
      const result = await generateHoroscope(sign.name);
      setHoroscope(result);
    } catch (err) {
      setError('Failed to generate horoscope. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white selection:bg-purple-500 selection:text-white flex flex-col">
      <main className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        <Header />
        <ZodiacSelector
          signs={zodiacSigns}
          onSelectSign={handleSelectSign}
          selectedSign={selectedSign}
          isLoading={isLoading}
        />
        <HoroscopeDisplay
          horoscope={horoscope}
          isLoading={isLoading}
          error={error}
          selectedSign={selectedSign}
        />
      </main>
      <footer className="text-center py-4 text-xs text-slate-500">
        <p>Powered by Gemini API. For entertainment purposes only.</p>
      </footer>
    </div>
  );
};

export default App;