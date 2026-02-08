
import React, { useState } from 'react';
import { ChefHat, Sparkles, Loader2, UtensilsCrossed, Clock, Star, Send } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';
import { Recipe } from '../types';

export const RecipeGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setRecipe(null);
    const result = await generateRecipe(input);
    setRecipe(result);
    setLoading(false);
  };

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-100/40 via-[#FA8072]/10 to-blue-100/40 rounded-[3rem] blur-3xl opacity-60 dark:opacity-10 pointer-events-none"></div>
      
      <div className="relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl w-full max-w-3xl mx-auto p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-[#FA8072] p-3 rounded-2xl text-white shadow-lg">
            <ChefHat className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white tracking-tight">
            ركن الشيف الذكي
          </h2>
        </div>

        <div className="space-y-6">
          <div className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="مثلاً: كوكيز الشوكولاتة الداكنة بلمسة كراميل..."
              className="w-full bg-white/80 dark:bg-slate-800/60 border-2 border-transparent focus:border-[#FA8072]/40 rounded-2xl py-4 px-6 text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none transition-all shadow-inner"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="absolute left-2 top-2 bottom-2 bg-[#FA8072] text-white px-6 rounded-xl font-bold flex items-center gap-2 hover:bg-[#e06d60] transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
              <span>{loading ? 'جاري التحضير...' : 'ابتكر وصفة'}</span>
            </button>
          </div>

          {recipe && (
            <div className="animate-in fade-in zoom-in duration-500 bg-white dark:bg-slate-800/80 rounded-3xl p-6 border border-[#FA8072]/20 shadow-xl space-y-6">
              <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-700 pb-4">
                <div>
                  <h3 className="text-2xl font-black text-[#FA8072] mb-1">{recipe.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-bold italic">{recipe.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-[10px] font-black bg-orange-50 dark:bg-orange-900/30 text-[#FA8072] px-3 py-1 rounded-full border border-orange-100 dark:border-orange-800">
                    <Clock size={12} /> {recipe.prepTime}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-black bg-blue-50 dark:bg-blue-900/30 text-blue-500 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                    <Star size={12} /> {recipe.difficulty}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 font-black text-gray-800 dark:text-white border-r-4 border-[#FA8072] pr-2">
                    <UtensilsCrossed size={18} className="text-[#FA8072]" />
                    المكونات
                  </h4>
                  <ul className="space-y-1">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FA8072] rounded-full"></span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 font-black text-gray-800 dark:text-white border-r-4 border-[#FA8072] pr-2">
                    <Send size={18} className="text-[#FA8072]" />
                    طريقة التحضير
                  </h4>
                  <ol className="space-y-2">
                    {recipe.instructions.map((inst, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 relative pr-6">
                        <span className="absolute right-0 top-0 font-black text-[#FA8072] opacity-50">{i + 1}.</span>
                        {inst}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeGenerator;
