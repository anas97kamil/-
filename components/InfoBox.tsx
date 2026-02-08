
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

export const InfoBox: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/N7pMpwAZ2utdm8jj8";

  return (
    <div className="relative animate-in fade-in zoom-in duration-1000">
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FA8072]/20 via-orange-100/10 to-blue-200/20 rounded-[3rem] blur-3xl opacity-50 dark:opacity-10 animate-soft-pulse pointer-events-none"></div>
      
      <div className="relative bg-white/50 dark:bg-slate-900/40 backdrop-blur-2xl w-full max-w-3xl mx-auto p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden transform transition-all duration-500">
        <div className="absolute top-4 right-4 text-[#FA8072] opacity-30">
          <Sparkles size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white text-center mb-10 select-none tracking-tight">
          تواصل معنا مباشرة
        </h2>
        <div className="space-y-8">
          <div className="flex items-center gap-5 group">
            <div className="bg-white/80 dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-[#FA8072]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#FA8072] uppercase tracking-wider">أرقام التواصل</span>
              <a href="tel:+963957432958" className="text-sm font-black text-gray-800 dark:text-gray-100" style={{ direction: 'ltr', textAlign: 'right' }}>+963 957 432 958</a>
              <a href="tel:+963993986953" className="text-sm font-black text-gray-800 dark:text-gray-100" style={{ direction: 'ltr', textAlign: 'right' }}>+963 993 986 953</a>
            </div>
          </div>
          <div className="flex items-center gap-5 group">
            <div className="bg-white/80 dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-[#FA8072]">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#FA8072] uppercase tracking-wider">البريد الإلكتروني</span>
              <a href="mailto:Cookies.hama@tuta.io" className="text-sm font-black text-gray-800 dark:text-gray-100 break-all">Cookies.hama@tuta.io</a>
            </div>
          </div>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
            <div className="bg-white/80 dark:bg-slate-800 p-4 rounded-2xl shadow-sm text-[#FA8072]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#FA8072] uppercase tracking-wider">الموقع الجغرافي</span>
              <span className="text-sm font-black text-gray-800 dark:text-gray-100 flex items-center gap-2 text-right">
                حماة - الصابونية - شارع الزاغة - مقابل سنتر الجمان <ExternalLink size={12} />
              </span>
            </div>
          </a>
        </div>
        <div className="mt-10 pt-8 border-t border-white/30 dark:border-white/10">
          <a 
            href="https://wa.me/963957432958"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-8 rounded-2xl font-black shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[12px] md:text-sm">تحدث معنا عبر واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
