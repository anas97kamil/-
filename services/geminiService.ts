
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Recipe } from '../types';

export const generateRecipe = async (userRequest: string): Promise<Recipe | null> => {
  try {
    // Create a new GoogleGenAI instance right before the call to ensure the latest config/key usage
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    // Using gemini-3-pro-preview for complex reasoning tasks like structured recipe generation
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [{
        parts: [{
          text: `أنت شيف حلويات خبير في "مخبز كوكيز". يريد المستخدم وصفة لـ: "${userRequest}".
        
          قدم وصفة دقيقة وشهية باللغة العربية.
          إذا طلب المستخدم شيئاً لا علاقة له بالمخبوزات، حاول تقديم بديل من عالم الكوكيز أو الحلويات.

          يجب أن يكون الرد بتنسيق JSON حصراً.`
        }]
      }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
            instructions: { type: Type.ARRAY, items: { type: Type.STRING } },
            prepTime: { type: Type.STRING },
            difficulty: { type: Type.STRING, enum: ["سهل", "متوسط", "صعب"] }
          },
          required: ["title", "description", "ingredients", "instructions", "prepTime", "difficulty"]
        }
      }
    });

    // Access .text property directly as per latest guidelines
    const text = response.text;
    if (!text) return null;
    
    return JSON.parse(text) as Recipe;
  } catch (error) {
    console.error("Error generating recipe:", error);
    return null;
  }
};