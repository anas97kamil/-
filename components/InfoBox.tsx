import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

export const InfoBox: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/N7pMpwAZ2utdm8jj8";

  return (
    <div className="relative animate-in fade-in zoom-in duration-1000">
      {/* Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FA8072]/20 via-orange-100/10 to-blue-200/20 rounded-[3rem] blur-3xl opacity-50 dark:opacity-10 animate-soft-pulse pointer-events-none"></div>
      
      <div className="relative bg-white/50 dark:bg-slate-900/40 backdrop-blur-2xl w-full max-w-3xl mx-auto p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
        <div className="absolute top-4 right-4 text-[#FA8072] opacity-30">
          <Sparkles size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white text-center mb-10 select-none tracking-tight">
          تواصل معنا مباشرة
        </h2>
        <div className="space-y-8">
          <div className="flex items-center gap-5 group">
            <div className="bg-white/80 dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-[#FA8072] group-hover:bg-[#FA8072] group-hover:text-white transition-all duration-300">
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#FA8072] uppercase tracking-wider mb-0.5">أرقام التواصل</span>
              <div className="flex flex-col gap-0.5">
                <a 
                  href="tel:+963957432958" 
                  className="text-base md:text-lg font-black text-gray-800 dark:text-gray-100 hover:text-[#FA8072] transition-colors leading-tight"
                  style={{ direction: 'ltr', unicodeBidi: 'embed', textAlign: 'right' }}
                >
                  +963 957 432 958
                </a>
                <a 
                  href="tel:+963993986953" 
                  className="text-base md:text-lg font-black text-gray-800 dark:text-gray-100 hover:text-[#FA8072] transition-colors leading-tight"
                  style={{ direction: 'ltr', unicodeBidi: 'embed', textAlign: 'right' }}
                >
                  +963 993 986 953
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 group">
            <div className="bg-white/80 dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-[#FA8072] group-hover:bg-[#FA8072] group-hover:text-white transition-all duration-300">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#FA8072] uppercase tracking-wider mb-0.5">البريد الإلكتروني</span>
              <a href="mailto:Cookies.hama@tuta.io" className="text-base md:text-lg font-black text-gray-800 dark:text-gray-100 hover:text-[#FA8072] transition-colors break-all leading-tight">
                Cookies.hama@tuta.io
              </a>
            </div>
          </div>
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 group cursor-pointer"
          >
            <div className="bg-white/80 dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-[#FA8072] group-hover:bg-[#FA8072] group-hover:text-white transition-all duration-300">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#FA8072] uppercase tracking-wider mb-0.5">الموقع الجغرافي</span>
              <span className="text-base md:text-lg font-black text-gray-800 dark:text-gray-100 group-hover:text-[#FA8072] transition-colors flex items-center gap-2 leading-tight">
                سوريا – حماة – شارع الزاغة
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </span>
              <span className="text-[11px] text-black dark:text-gray-400 font-bold">مقابل سنتر الجمان (اضغط للخريطة)</span>
            </div>
          </a>
        </div>
        <div className="mt-10 pt-8 border-t border-white/30 dark:border-white/10">
          <a 
            href="https://wa.me/963957432958"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md hover:bg-[#25D366] text-gray-800 dark:text-gray-100 hover:text-white py-5 px-8 rounded-2xl font-black shadow-lg transition-all hover:-translate-y-1 active:scale-95 border border-white/50 dark:border-white/10"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xl">تحدث معنا عبر واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;