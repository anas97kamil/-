
export interface ContactDetail {
  type: 'phone' | 'email' | 'address';
  value: string;
  label?: string;
}

// Added Recipe interface to fix missing export errors in services/geminiService.ts and components/RecipeGenerator.tsx
export interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  difficulty: "سهل" | "متوسط" | "صعب";
  chefTip: string;
}
