
import { GoogleGenAI, Type } from "@google/genai";
import { QuoteFormData, GeminiResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeQuoteRequest = async (formData: QuoteFormData): Promise<GeminiResponse> => {
  try {
    const prompt = `Analyze this electrical service request for Pat Murphy Electrical (Established 1988).
    
    Service Type: ${formData.serviceType}
    User's Description: ${formData.description}
    
    Tasks:
    1. Create a professional technical summary of the potential work required.
    2. Estimate the urgency (Low/Medium/High) based on safety concerns (e.g., exposed wires, burning smell, power outage).
    3. Provide a brief recommendation for the customer before the electrician arrives.
    
    Return the response in JSON format.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            estimatedUrgency: { type: Type.STRING, enum: ['Low', 'Medium', 'High'] },
            recommendation: { type: Type.STRING }
          },
          required: ['summary', 'estimatedUrgency', 'recommendation']
        }
      }
    });

    const result = JSON.parse(response.text);
    return result as GeminiResponse;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return {
      summary: formData.description,
      estimatedUrgency: 'Medium',
      recommendation: "Please ensure safe access to your switchboard and relevant work areas."
    };
  }
};
