import React from 'react';
import { Clock, Sparkles, ChefHat } from 'lucide-react';

export const ProductsTab: React.FC = () => {
  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
      {/* Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FA8072]/20 via-orange-100/10 to-yellow-200/20 rounded-[3rem] blur-3xl opacity-50 dark:opacity-10 animate-soft-pulse pointer-events-none"></div>
      
      <div className="relative bg-white/50 dark:bg-slate-900/40 backdrop-blur-2xl w-full max-w-3xl mx-auto p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden text-center flex flex-col items-center space-y-8">
        <div className="absolute top-4 right-4 text-[#FA8072] opacity-30">
          <Sparkles size={24} />
        </div>
        <div className="relative">
          <div className="bg-[#FA8072] p-8 rounded-3xl text-white shadow-xl shadow-orange-200 dark:shadow-none mb-4 transform hover:scale-110 transition-transform duration-500 relative">
            <div className="relative z-10">
              <ChefHat size={64} strokeWidth={1.5} />
            </div>
            <svg 
              className="absolute -bottom-2 -left-2 w-12 h-12 text-white/40 opacity-50"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M11 20L7 12l4-2 4 2-4 8z" />
              <path d="M11 10V2" />
            </svg>
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 p-1.5 rounded-full border-2 border-white dark:border-slate-900 shadow-md">
              <Clock size={16} className="animate-spin-slow" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white tracking-tight">
            القائمة قيد التجهيز
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#FA8072] font-extrabold text-lg">
            <span>نحضر لكم أشهى الأصناف...</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 font-bold text-lg max-w-md leading-relaxed">
          نحن نقوم الآن بجمع واختيار أفضل المكونات وترتيب قائمة المنتجات لتكون جاهزة لطلباتكم قريباً جداً.
        </p>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
        <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em]">
          <Sparkles size={14} />
          <span>قريباً في cookis.hama</span>
          <Sparkles size={14} />
        </div>
      </div>
    </div>
  );
};

export default ProductsTab;