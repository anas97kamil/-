
import React, { useState } from 'react';
import { Sun, Moon, Cookie } from 'lucide-react';
import { LOGO_URL } from './Logo';

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="bg-[#FA8072] dark:bg-slate-900/95 backdrop-blur-xl text-white py-3 shadow-lg fixed top-0 w-full z-50 transition-all border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* حاوية الشعار */}
          <div className="relative">
            <div className="relative flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl border border-white/20 shadow-sm overflow-hidden backdrop-blur-sm">
              {!imageError ? (
                <img 
                  src={LOGO_URL} 
                  alt="مخبز كوكيز" 
                  className="w-full h-full object-contain p-1 transform transition-transform duration-500 group-hover:scale-110"
                  onError={() => setImageError(true)}
                />
              ) : (
                <Cookie className="w-7 h-7 text-white animate-pulse" />
              )}
            </div>
          </div>
          
          <div className="flex flex-col -space-y-1">
            <h1 className="text-xl md:text-2xl font-black tracking-tight text-white transition-colors">
              مخبز كوكيز
            </h1>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em]">Cookies Bakery</span>
          </div>
        </div>

        <button
          onClick={onToggleDarkMode}
          className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all active:scale-90 border border-white/10 group"
          aria-label="تبديل الوضع"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon className="w-5 h-5 text-white group-hover:-rotate-12 transition-transform" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
