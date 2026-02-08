
import React from 'react';
import { Heart, Star, Award, MessageCircle } from 'lucide-react';

export const FooterFeedback: React.FC = () => {
  const phoneNumber = "963957432958";
  
  const sendRating = (emoji: string, label: string) => {
    const text = encodeURIComponent(`تحية لمخبز كوكيز! تقييمي لتجربتي معكم هو: ${emoji} (${label})`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const values = [
    { icon: <Heart size={10} />, text: 'شغف وحب' },
    { icon: <Award size={10} />, text: 'أعلى جودة' },
    { icon: <Star size={10} />, text: 'إتقان يدوي' },
  ];

  const ratings = [
    { emoji: '😍', label: 'ممتاز' },
    { emoji: '😋', label: 'لذيذ' },
    { emoji: '👌', label: 'رائع' },
    { emoji: '❤️', label: 'مفضل' },
  ];

  return (
    <div className="mt-6 flex flex-col items-center gap-3 animate-in fade-in duration-1000">
      {/* Values Section */}
      <div className="flex items-center gap-4">
        {values.map((v, i) => (
          <div key={i} className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[#FA8072]">{v.icon}</span>
            <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tight">{v.text}</span>
          </div>
        ))}
      </div>

      {/* Small Rating Bar */}
      <div className="flex items-center gap-3 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/40 dark:border-white/5 shadow-sm">
        <span className="text-[9px] font-black text-gray-400 dark:text-gray-500 border-l border-gray-200 dark:border-gray-800 pl-2">قيمنا:</span>
        <div className="flex items-center gap-2.5">
          {ratings.map((r, i) => (
            <button
              key={i}
              onClick={() => sendRating(r.emoji, r.label)}
              className="text-sm hover:scale-125 transition-transform active:scale-90 opacity-80 hover:opacity-100"
              title={r.label}
            >
              {r.emoji}
            </button>
          ))}
        </div>
        <div className="pr-2 border-r border-gray-200 dark:border-gray-800">
          <MessageCircle size={10} className="text-[#25D366] opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default FooterFeedback;
