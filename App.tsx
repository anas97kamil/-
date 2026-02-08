
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InfoBox from './components/InfoBox';
import OrderForm from './components/OrderForm';
import SocialCard from './components/SocialCard';
import FooterFeedback from './components/FooterFeedback';
import { ProductsTab } from './components/ProductsTab';
import { Cookie, ChefHat, Utensils, Star, Phone, LayoutGrid, Home } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'products'>('home');
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bakery-theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bakery-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bakery-theme', 'light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  const handleGlobalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea') || target.closest('label')) {
      return;
    }
    const id = Date.now();
    setClicks(prev => [...prev, { id, x: e.pageX, y: e.pageY }]);
    setTimeout(() => {
      setClicks(prev => prev.filter(c => c.id !== id));
    }, 600);
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div 
      className={`min-h-screen flex flex-col cursor-pointer sm:cursor-auto relative overflow-hidden pb-20 transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`} 
      onClick={handleGlobalClick}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[5%] left-[5%] text-[#FA8072] opacity-[0.1] dark:opacity-[0.05] will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0) rotate(15deg)` }}><Cookie size={120} /></div>
        <div className="absolute top-[15%] right-[8%] text-[#D4A76A] opacity-[0.1] dark:opacity-[0.05] will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0) rotate(-10deg)` }}><ChefHat size={140} /></div>
        <div className="absolute top-[45%] left-[10%] text-gray-400 opacity-[0.08] dark:opacity-[0.03] will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0) rotate(45deg)` }}><Utensils size={100} /></div>
        <div className="absolute top-[30%] right-[30%] text-[#FA8072] opacity-[0.05] dark:opacity-[0.02] will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0) scale(${1 + scrollY * 0.0005})` }}><Star size={80} fill="currentColor" /></div>
      </div>

      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto px-4 pt-32 space-y-12 relative z-10 max-w-5xl">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-1.5 rounded-full border border-white/50 dark:border-white/10 shadow-xl flex gap-2">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'home' ? 'bg-[#FA8072] text-white shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-slate-800/40'}`}
            >
              <Home size={18} />
              <span>الرئيسية</span>
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'products' ? 'bg-[#FA8072] text-white shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-slate-800/40'}`}
            >
              <LayoutGrid size={18} />
              <span>المنتجات</span>
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'home' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 animate-in fade-in duration-700 pb-10">
              <div className="md:col-span-2 transform transition-all duration-500 hover:scale-[1.01] animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-200">
                <OrderForm />
              </div>
              <div className="md:col-span-1 transform transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300">
                <SocialCard />
              </div>
              <div className="md:col-span-1 transform transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-400">
                <InfoBox />
              </div>
              {/* Values and Rating Section - Compact */}
              <div className="md:col-span-2">
                <FooterFeedback />
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <ProductsTab />
            </div>
          )}
        </div>
      </main>

      <footer className="mt-12 py-12 relative z-10 text-center">
        <div className="inline-block bg-white/20 dark:bg-slate-900/30 backdrop-blur-md px-10 py-5 rounded-full border border-white/30 dark:border-white/10 shadow-sm transition-transform active:scale-95 duration-200">
          <p className="text-gray-700 dark:text-gray-300 font-bold mb-1">جميع الحقوق محفوظة 2026 - مخبز كوكيز</p>
          <p className="text-xs text-[#FA8072] font-medium tracking-widest uppercase">صُنع يدوياً بكل حُب ❤️</p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <a 
        href="tel:+963957432958"
        className="fixed bottom-6 left-6 z-[60] bg-[#16a34a] text-white pl-3 pr-5 py-2.5 rounded-full shadow-[0_15px_35px_rgba(22,163,74,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center gap-2.5 border-2 border-white/30 backdrop-blur-md"
        aria-label="اتصل بنا"
      >
        <div className="bg-white/10 p-2 rounded-full">
          <Phone className="w-4 h-4 animate-pulse group-hover:rotate-12 transition-transform" />
        </div>
        <span className="text-[13px] font-black whitespace-nowrap tracking-wide">اتصل بنا</span>
        <div className="absolute inset-0 rounded-full bg-[#16a34a] opacity-30 animate-ping -z-10"></div>
      </a>

      {clicks.map(click => (
        <span
          key={click.id}
          className="fixed pointer-events-none rounded-full bg-[#FA8072] opacity-40 z-50 w-8 h-8 -ml-4 -mt-4 animate-ripple"
          style={{ left: click.x, top: click.y - window.scrollY }}
        />
      ))}
    </div>
  );
};

export default App;
