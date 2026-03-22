import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter">LUXECLOTH</div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-secondary">
          <a href="#" className="hover:text-primary transition-colors">Shop All</a>
          <a href="#" className="hover:text-primary transition-colors">New Arrivals</a>
          <a href="#" className="hover:text-primary transition-colors">Collections</a>
          <a href="#" className="hover:text-primary transition-colors">Our Story</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-secondary hover:text-primary transition-colors">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button 
            className="relative text-secondary hover:text-primary transition-colors"
            onClick={onCartClick}
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-bg text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden text-secondary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-glass-border py-8 px-6 flex flex-col gap-6 text-lg font-medium animate-fadeIn">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Shop All</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
        </div>
      )}

      <style jsx="true">{`
        nav {
          display: flex;
          align-items: center;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .gap-8 { gap: 2rem; }
        .gap-6 { gap: 1.5rem; }
        .text-sm { font-size: 0.875rem; }
        .text-2xl { font-size: 1.5rem; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .uppercase { text-transform: uppercase; }
        .tracking-widest { letter-spacing: 0.1em; }
        .tracking-tighter { letter-spacing: -0.05em; }
        .text-secondary { color: var(--secondary); }
        .text-primary { color: var(--primary); }
        .hidden { display: none; }
        @media (min-width: 768px) {
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
        }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .w-full { width: 100%; }
        .z-50 { z-index: 50; }
        .fixed { position: fixed; }
        .transition-all { transition-property: all; }
        .duration-300 { transition-duration: 300ms; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      `}</style>
    </nav>
  );
};

export default Navbar;
