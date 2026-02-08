import React from 'react';
import { Facebook, Instagram, Users, Sparkles } from 'lucide-react';

export const SocialCard: React.FC = () => {
  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
      {/* Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FA8072]/20 via-orange-100/10 to-purple-200/20 rounded-[3rem] blur-3xl opacity-50 dark:opacity-10 animate-soft-pulse pointer-events-none"></div>
      
      <div className="relative bg-white/50 dark:bg-slate-900/40 backdrop-blur-2xl w-full max-w-3xl mx-auto p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
        <div className="absolute top-4 right-4 text-[#FA8072] opacity-30">
          <Sparkles size={24} />
        </div>
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/80 dark:bg-slate-800 rounded-2xl shadow-sm text-[#FA8072]">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white tracking-tight">تابعنا عبر منصاتنا</h2>
          </div>
          <p className="text-base md:text-lg font-bold text-gray-600 dark:text-gray-300 max-w-md">
            انضم إلى عائلتنا على وسائل التواصل الاجتماعي لتبقى على اطلاع بكل جديد
          </p>
          <div className="flex flex-row items-center justify-center gap-6 md:gap-10 w-full overflow-x-auto pb-2">
            <a 
              href="https://wa.me/963957432958" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-2 shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#25D366] rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative p-4 md:p-5 bg-white dark:bg-slate-800 shadow-lg rounded-2xl group-hover:bg-[#25D366] transition-colors duration-300">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-7 h-7 md:w-8 md:h-8 fill-[#25D366] group-hover:fill-white transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.553 4.189 1.606 6.06L0 24l6.117-1.605a11.81 11.81 0 005.925 1.577h.005c6.632 0 12.032-5.401 12.035-12.035a11.776 11.776 0 00-3.417-8.414z"/>
                  </svg>
                </div>
              </div>
              <span className="text-[11px] font-black text-gray-700 dark:text-gray-300 group-hover:text-[#25D366] uppercase tracking-tighter">واتساب</span>
            </a>
            <a 
              href="https://www.facebook.com/share/1EVGzxvb3y/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-2 shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#1877F2] rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative p-4 md:p-5 bg-white dark:bg-slate-800 shadow-lg rounded-2xl group-hover:bg-[#1877F2] transition-colors duration-300">
                  <Facebook className="w-7 h-7 md:w-8 md:h-8 text-[#1877F2] group-hover:text-white transition-colors" />
                </div>
              </div>
              <span className="text-[11px] font-black text-gray-700 dark:text-gray-300 group-hover:text-[#1877F2] uppercase tracking-tighter">فيسبوك</span>
            </a>
            <a 
              href="https://www.instagram.com/cookies.hama?igsh=bWx0YWIydjRiOGZn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-2 shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative p-4 md:p-5 bg-white dark:bg-slate-800 shadow-lg rounded-2xl group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 transition-all duration-300">
                  <Instagram className="w-7 h-7 md:w-8 md:h-8 text-[#E4405F] group-hover:text-white transition-colors" />
                </div>
              </div>
              <span className="text-[11px] font-black text-gray-700 dark:text-gray-300 group-hover:text-red-500 uppercase tracking-tighter">إنستغرام</span>
            </a>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            <span>cookis.hama</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;