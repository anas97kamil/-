
import React, { useState } from 'react';
import { Cookie } from 'lucide-react';
// @ts-ignore - نستخدم هذا التعليق لضمان عدم توقف الـ Build في حال لم يتم التقاط التعريف الجديد فوراً
import logoImg from '../logo.png';

/**
 * تصدير الرابط ليتم استخدامه في الهيدر أيضاً
 */
export const LOGO_URL = logoImg;

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        {!imageError ? (
          <>
            <img 
              src={LOGO_URL} 
              alt="مخبز كوكيز" 
              className={`w-full h-full object-contain transition-all duration-700 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => {
                console.error("فشل تحميل الشعار من المسار:", LOGO_URL);
                setImageError(true);
              }}
            />
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-t-2 border-[#FA8072] animate-spin"></div>
              </div>
            )}
          </>
        ) : (
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FA8072] to-[#FFB6C1] rounded-full blur-2xl opacity-20"></div>
            <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-full border-4 border-[#FA8072]/30 flex flex-col items-center justify-center shadow-2xl">
               <Cookie size={60} className="text-[#FA8072] animate-bounce mb-1" />
               <span className="text-[10px] font-black text-[#FA8072]">COOKIES</span>
            </div>
          </div>
        )}
      </div>

      {isImageLoaded && (
        <div className="mt-4 flex flex-col items-center gap-1 opacity-30">
           <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FA8072] to-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Logo;
