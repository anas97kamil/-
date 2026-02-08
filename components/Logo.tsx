
import React, { useState } from 'react';

/**
 * سيقوم الكود بالبحث عن ملف باسم logo.png في المجلد الرئيسي للمشروع
 */
const LOGO_PATH = "/logo.png"; 

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      
      {/* حاوية اللوغو الرئيسية */}
      <div className="relative w-full h-full flex items-center justify-center">
        {!imageError ? (
          <>
            <img 
              src={LOGO_PATH} 
              alt="شعار المخبز" 
              className={`w-full h-full object-contain transition-all duration-1000 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            
            {/* رمز التحميل الاحترافي - يظهر فقط أثناء تحميل الصورة */}
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* حلقة متوهجة خلفية خفيفة */}
                  <div className="absolute w-16 h-16 rounded-full border-2 border-[#FA8072]/10 animate-pulse"></div>
                  
                  {/* حلقة التحميل الأساسية بتصميم عصري */}
                  <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-[#FA8072] border-l-2 border-l-transparent border-b-2 border-b-transparent animate-spin shadow-[0_0_15px_rgba(250,128,114,0.3)]"></div>
                  
                  {/* نقطة مركزية نابضة */}
                  <div className="absolute w-2 h-2 bg-[#FA8072] rounded-full animate-ping"></div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* في حالة الخطأ: عرض رمز تعبيري أو شكل بسيط */
          <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40">
            <div className="w-8 h-8 rounded-full border-2 border-[#FA8072]/30 border-t-[#FA8072] animate-spin"></div>
          </div>
        )}
      </div>

      {/* الرمز السفلي (جاري التحميل) بتصميم شفاف وأنيق */}
      {!isImageLoaded && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-md border border-white/30 dark:border-white/5 shadow-sm">
            <div className="w-1.5 h-1.5 bg-[#FA8072] rounded-full animate-bounce [animation-duration:0.8s]"></div>
            <div className="w-1.5 h-1.5 bg-[#FA8072] rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.2s]"></div>
            <div className="w-1.5 h-1.5 bg-[#FA8072] rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.4s]"></div>
          </div>
        </div>
      )}

      {/* لمسة فنية خفيفة تظهر بعد التحميل فقط لتأكيد الجودة */}
      {isImageLoaded && (
        <div className="mt-6 flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
           <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#FA8072] to-transparent rounded-full"></div>
           <div className="w-4 h-0.5 bg-gradient-to-r from-transparent via-[#FA8072] to-transparent rounded-full opacity-50"></div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default Logo;
