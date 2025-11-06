
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateHoroscope(sign: string): Promise<string> {
  const prompt = `Gere um horóscopo diário detalhado, positivo e perspicaz para uma pessoa do signo de ${sign}. Concentre-se no amor, carreira e saúde. O tom deve ser místico e encorajador, mas realista. Mantenha-o em um parágrafo conciso.`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating horoscope with Gemini API:", error);
    throw new Error("Failed to communicate with the horoscope service.");
  }
}
