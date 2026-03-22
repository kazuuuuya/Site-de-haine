import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-bg border-t border-glass-border py-20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter mb-6">LUXECLOTH</h2>
          <p className="text-secondary mb-8 max-w-sm">
            Elevating the standard of modern essentials. Sustainable, ethically sourced, and designed for longevity.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
          <ul className="flex flex-col gap-4 text-secondary text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Collections</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sale</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Inspiration</h4>
          <ul className="flex flex-col gap-4 text-secondary text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Lookbook</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Campaigns</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">The Journal</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
          </ul>
        </div>
      </div>

      <div className="container mt-20 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center text-xs text-secondary gap-4">
        <p>© 2026 LUXECLOTH. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a>
        </div>
      </div>

      <style jsx="true">{`
        .footer-bg { background-color: #0c0c0e; }
        .col-span-1 { grid-column: span 1 / span 1; }
        .mt-20 { margin-top: 5rem; }
        .pt-8 { padding-top: 2rem; }
        
        @media (min-width: 768px) {
          .md\\:col-span-2 { grid-column: span 2 / span 2; }
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .md\\:flex-row { flex-direction: row; }
        }
           .flex-col { flex-direction: column; }
      `}</style>
    </footer>
  );
};

export default Footer;
