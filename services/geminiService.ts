
import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getPersonalizedRoadmap = async (userGoals: string): Promise<GeminiResponse> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `O usuário quer entrar na Comunidade Metanoia (uma comunidade de renovação mental e espiritual). 
    Seus objetivos/dores são: "${userGoals}". 
    Como um mentor da Metanoia, analise a situação dele, crie um roadmap de 3 passos práticos e dê uma recomendação de como a comunidade ajudará especificamente nesse caso.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analysis: {
            type: Type.STRING,
            description: "Uma análise empática da situação do usuário."
          },
          roadmap: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["title", "description"]
            },
            description: "Um roadmap de 3 passos."
          },
          recommendation: {
            type: Type.STRING,
            description: "Conclusão de como a comunidade resolve o problema."
          }
        },
        required: ["analysis", "roadmap", "recommendation"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (e) {
    console.error("Erro ao parsear resposta do Gemini", e);
    throw new Error("Falha ao gerar seu plano personalizado.");
  }
};
