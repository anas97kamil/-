
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * المسار المحلي للصورة في مجلد المشروع الرئيسي
 */
const LOGO_PATH = "/logo.png";

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="bg-[#FA8072]/80 dark:bg-slate-900/80 backdrop-blur-lg text-white py-4 shadow-lg fixed top-0 w-full z-50 transition-all border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 cursor-default group">
          <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
            {/* Tiny Background Glow */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
            
            <div className="relative z-10 w-full h-full rounded-full border border-white/40 overflow-hidden bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
              {!imageError ? (
                <img 
                  src={LOGO_PATH} 
                  alt="شعار" 
                  className="w-full h-full object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Tiny Shiny Orb Placeholder */
                <div className="w-full h-full bg-[#FA8072]/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
                </div>
              )}
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-wide transition-transform group-hover:scale-105">مخبز كوكيز</h1>
        </div>
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-2xl bg-white/20 hover:bg-white/30 transition-all active:scale-90 border border-white/20 shadow-inner group"
          aria-label="تبديل الوضع"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-300 group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon className="w-5 h-5 text-white group-hover:-rotate-12 transition-transform" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
