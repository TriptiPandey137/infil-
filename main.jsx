import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ShoppingCart, ShoppingBag, User, Search, Menu, X, ChevronRight, Star, CreditCard, Truck, ShieldCheck, ArrowRight, Github, Twitter, Instagram } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
                <ShoppingBag className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">ZYDEN</span>
            </div>
            
            <div className="hidden md:flex items-center space-gap-8">
              {['New Arrivals', 'Men', 'Women', 'Accessories'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors px-4">{item}</a>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button className="p-2 text-slate-600 hover:text-teal-600 transition-colors"><Search className="w-5 h-5" /></button>
              <button className="p-2 text-slate-600 hover:text-teal-600 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-teal-600 text-white text-[10px] flex items-center justify-center rounded-full">0</span>
              </button>
              <button className="hidden md:block p-2 text-slate-600 hover:text-teal-600 transition-colors"><User className="w-5 h-5" /></button>
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-wider uppercase">
                <Star className="w-3 h-3 fill-teal-700" /> New Collection 2024
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
                Define Your <span className="text-teal-600">Digital</span> Style.
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Experience the intersection of luxury and modern aesthetics. Our curated collection brings world-class fashion directly to your doorstep.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-xl shadow-teal-200 flex items-center gap-2 group">
                  Shop Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $150" },
              { icon: ShieldCheck, title: "Secure Payment", desc: "100% Protected" },
              { icon: CreditCard, title: "Quick Checkout", desc: "Easy process" },
              { icon: Star, title: "Premium Quality", desc: "Certified goods" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-teal-600">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// THE RENDER CONNECTION
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;

