
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { LOGO_URL } from './Logo';

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="bg-[#FA8072]/80 dark:bg-slate-900/80 backdrop-blur-lg text-white py-3 shadow-lg fixed top-0 w-full z-50 transition-all border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 cursor-default group">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
            <div className="relative z-10 w-full h-full rounded-full border border-white/40 overflow-hidden bg-white shadow-inner flex items-center justify-center">
              {!imageError ? (
                <img 
                  src={LOGO_URL} 
                  alt="L" 
                  className="w-full h-full object-contain p-0.5"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-[#FA8072]/30 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight">مخبز كوكيز</h1>
        </div>
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all active:scale-90 border border-white/20"
          aria-label="تبديل الوضع"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
