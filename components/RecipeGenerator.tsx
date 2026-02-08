
import React, { useState } from 'react';
import { ChefHat, Sparkles, Loader2, UtensilsCrossed, Clock, Star, Send, Copy, Check, Share2, Lightbulb, X } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';
import { Recipe } from '../types';

export const RecipeGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const quickIdeas = [
    "كوكيز نوتيلا سائلة",
    "كوكيز صحي بالشوفان",
    "كوكيز بالزعفران والهيل",
    "كوكيز ريد فيلفيت"
  ];

  const handleGenerate = async (query?: string) => {
    const finalInput = query || input;
    if (!finalInput.trim()) return;
    
    setLoading(true);
    setRecipe(null);
    if (query) setInput(query);
    
    const result = await generateRecipe(finalInput);
    setRecipe(result);
    setLoading(false);
  };

  const copyToClipboard = () => {
    if (!recipe) return;
    const text = `${recipe.title}\n\n${recipe.description}\n\nالمكونات:\n${recipe.ingredients.join('\n')}\n\nالتعليمات:\n${recipe.instructions.join('\n')}\n\nنصيحة الشيف: ${recipe.chefTip}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareRecipe = async () => {
    if (!recipe) return;
    try {
      await navigator.share({
        title: recipe.title,
        text: `وصفة ${recipe.title} من مخبز كوكيز!`,
        url: window.location.href
      });
    } catch (err) {
      console.log('Sharing failed', err);
    }
  };

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-100/40 via-[#FA8072]/10 to-blue-100/40 rounded-[3rem] blur-3xl opacity-60 dark:opacity-10 pointer-events-none"></div>
      
      <div className="relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl w-full max-w-4xl mx-auto p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="bg-[#FA8072] p-4 rounded-2xl text-white shadow-lg animate-bounce">
            <ChefHat className="w-8 h-8" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white tracking-tight mb-2">
              ركن الشيف الذكي
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">أخبرني بأي نكهة في بالك.. وسأبتكر لك الوصفة المثالية!</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="مثلاً: كوكيز ليمون منعش..."
              className="w-full bg-white dark:bg-slate-800 border-2 border-transparent focus:border-[#FA8072]/40 rounded-2xl py-5 px-6 pl-32 text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none transition-all shadow-xl text-lg font-bold"
            />
            <div className="absolute left-2 top-2 bottom-2 flex gap-1">
              {input && (
                <button 
                  onClick={() => setInput('')}
                  className="p-3 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
              <button
                onClick={() => handleGenerate()}
                disabled={loading || !input.trim()}
                className="bg-[#FA8072] text-white px-6 rounded-xl font-black flex items-center gap-2 hover:bg-[#e06d60] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-[#FA8072]/20"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                <span className="hidden md:inline">{loading ? 'جاري الابتكار...' : 'ابتكر'}</span>
              </button>
            </div>
          </div>

          {/* Quick Ideas */}
          {!recipe && !loading && (
            <div className="flex flex-wrap justify-center gap-2">
              {quickIdeas.map((idea, i) => (
                <button
                  key={i}
                  onClick={() => handleGenerate(idea)}
                  className="px-4 py-2 bg-white/50 dark:bg-white/5 rounded-full text-xs font-black text-gray-500 dark:text-gray-400 hover:bg-[#FA8072] hover:text-white transition-all border border-gray-200 dark:border-white/10"
                >
                  {idea} +
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="py-12 flex flex-col items-center gap-4 animate-pulse">
               <div className="relative">
                  <ChefHat size={48} className="text-[#FA8072] animate-spin-slow" />
                  <Sparkles size={24} className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" />
               </div>
               <p className="text-[#FA8072] font-black text-lg">الشيف الذكي يخلط المكونات الآن...</p>
            </div>
          )}

          {recipe && (
            <div className="animate-in fade-in zoom-in slide-in-from-top-4 duration-700 bg-white dark:bg-slate-800/90 rounded-[2.5rem] p-6 md:p-10 border border-[#FA8072]/20 shadow-2xl space-y-8 relative overflow-hidden">
              {/* Recipe Controls */}
              <div className="absolute top-6 left-6 flex gap-2">
                <button 
                  onClick={copyToClipboard}
                  className="p-3 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-500 hover:text-[#FA8072] transition-all hover:bg-orange-50"
                  title="نسخ الوصفة"
                >
                  {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
                <button 
                  onClick={shareRecipe}
                  className="p-3 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-500 hover:text-[#FA8072] transition-all hover:bg-orange-50"
                  title="مشاركة"
                >
                  <Share2 size={20} />
                </button>
              </div>

              {/* Title Section */}
              <div className="text-center pt-8 border-b border-gray-100 dark:border-gray-700 pb-8">
                <h3 className="text-3xl md:text-4xl font-black text-[#FA8072] mb-3">{recipe.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-bold max-w-xl mx-auto leading-relaxed">
                  {recipe.description}
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm font-black bg-orange-50 dark:bg-orange-900/30 text-[#FA8072] px-5 py-2 rounded-full border border-orange-100 dark:border-orange-800">
                    <Clock size={16} /> {recipe.prepTime}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-black bg-blue-50 dark:bg-blue-900/30 text-blue-500 px-5 py-2 rounded-full border border-blue-100 dark:border-blue-800">
                    <Star size={16} /> {recipe.difficulty}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="flex items-center gap-3 text-xl font-black text-gray-800 dark:text-white border-r-4 border-[#FA8072] pr-3">
                    <UtensilsCrossed size={22} className="text-[#FA8072]" />
                    ماذا نحتاج؟
                  </h4>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="text-base text-gray-700 dark:text-gray-300 flex items-start gap-3 bg-gray-50/50 dark:bg-white/5 p-3 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-orange-100">
                        <span className="mt-1.5 w-2 h-2 bg-[#FA8072] rounded-full shrink-0"></span>
                        <span className="font-bold">{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="flex items-center gap-3 text-xl font-black text-gray-800 dark:text-white border-r-4 border-[#FA8072] pr-3">
                    <Send size={22} className="text-[#FA8072]" />
                    خطوات التحضير
                  </h4>
                  <ol className="space-y-4">
                    {recipe.instructions.map((inst, i) => (
                      <li key={i} className="text-base text-gray-700 dark:text-gray-300 relative pr-10 group">
                        <span className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/40 font-black text-[#FA8072] text-sm group-hover:scale-110 transition-transform">
                          {i + 1}
                        </span>
                        <p className="font-bold leading-relaxed">{inst}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Chef Tip */}
              {recipe.chefTip && (
                <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800/40 p-6 rounded-3xl flex items-start gap-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-xl shrink-0 shadow-md">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-yellow-700 dark:text-yellow-400 mb-1">سر الشيف لنجاح الوصفة:</h5>
                    <p className="text-yellow-800 dark:text-yellow-200 font-bold text-sm leading-relaxed italic">
                      " {recipe.chefTip} "
                    </p>
                  </div>
                </div>
              )}
              
              <div className="text-center pt-4">
                <p className="text-[10px] text-gray-400 dark:text-gray-600 font-bold uppercase tracking-widest">
                  ابتُكرت بواسطة ذكاء مخبز كوكيز الاصطناعي 2026
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeGenerator;
