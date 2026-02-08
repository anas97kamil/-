
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Recipe } from '../types';

export const generateRecipe = async (userRequest: string): Promise<Recipe | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [{
        parts: [{
          text: `أنت شيف حلويات عالمي في "مخبز كوكيز". يريد المستخدم ابتكار وصفة لـ: "${userRequest}".
        
          تعليماتك:
          1. قدم وصفة دقيقة واحترافية باللغة العربية الفصحى البسيطة.
          2. اجعل الوصفة مبتكرة وشهية.
          3. أضف "نصيحة الشيف" (chefTip) تكون نصيحة تقنية لضمان أفضل نتيجة (مثلاً عن درجة حرارة الزبدة أو وقت التبريد).
          
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
            difficulty: { type: Type.STRING, enum: ["سهل", "متوسط", "صعب"] },
            chefTip: { type: Type.STRING, description: "نصيحة تقنية من الشيف لنجاح الوصفة" }
          },
          required: ["title", "description", "ingredients", "instructions", "prepTime", "difficulty", "chefTip"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    
    return JSON.parse(text) as Recipe;
  } catch (error) {
    console.error("Error generating recipe:", error);
    return null;
  }
};
