
import React from 'react';

/**
 * استخدام شعار المخبز المحلي من المجلد الرئيسي
 */
export const LOGO_URL = '/logo.png';

interface LogoProps {
  className?: string;
  isAnimated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, isAnimated = true }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <img 
        src={LOGO_URL} 
        alt="مخبز كوكيز" 
        className={`w-full h-full object-contain ${isAnimated ? 'animate-bounce-slow' : ''} transition-transform duration-500 hover:scale-110`}
        style={{ filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))' }}
        onError={(e) => {
          // في حال عدم توفر الصورة المحلية، نستخدم أيقونة احتياطية
          (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/5479/5479008.png';
        }}
      />
    </div>
  );
};

export default Logo;
