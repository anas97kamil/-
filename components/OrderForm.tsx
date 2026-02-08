
import React, { useState } from 'react';
import { Send, ShoppingBag, MessageCircle, Sparkles } from 'lucide-react';

export const OrderForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const phoneNumber = "963957432958";

  const handleSendOrder = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FA8072]/30 via-orange-200/20 to-[#D4A76A]/30 rounded-[3rem] blur-3xl opacity-60 dark:opacity-20 animate-soft-pulse pointer-events-none"></div>
      
      <div className="relative bg-white/50 dark:bg-slate-900/40 backdrop-blur-2xl w-full max-w-3xl mx-auto p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/60 dark:border-white/10 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(250,128,114,0.3)]">
        <div className="absolute top-4 right-4 text-[#FA8072] opacity-30">
          <Sparkles size={24} />
        </div>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-[#FA8072] p-3 rounded-2xl text-white shadow-lg">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white select-none tracking-tight">
            اطلب الآن
          </h2>
        </div>
        <div className="space-y-6">
          <div className="relative group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب هنا طلبك بالتفصيل (نوع الطلب، الكمية، وأي ملاحظات)..."
              className="w-full h-40 bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-transparent focus:border-[#FA8072]/40 rounded-3xl p-6 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-300 resize-none shadow-inner"
            />
          </div>
          <button
            onClick={handleSendOrder}
            disabled={!message.trim()}
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black shadow-xl transition-all duration-300 transform active:scale-95 border border-white/40 dark:border-white/10 ${
              message.trim() 
                ? 'bg-[#25D366] text-white hover:bg-[#20ba5a]' 
                : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[12px] md:text-sm">إرسال الطلب عبر واتساب</span>
            <Send className="w-4 h-4 opacity-50 mr-2 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
