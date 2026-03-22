import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/hero.png" 
          alt="Luxe Fashion" 
          className="w-full h-full object-cover scale-110 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent"></div>
      </div>

      <div className="container relative z-10 fade-in">
        <div className="max-w-2xl">
          <span className="text-secondary uppercase tracking-[0.3em] font-medium mb-4 block">Spring/Summer 2026</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
            REDEFINING <br /> 
            <span className="text-outline">MINIMALISM</span>
          </h1>
          <p className="text-lg text-secondary mb-10 max-w-lg leading-relaxed">
            Elevate your wardrobe with our latest collection of premium, 
            sustainably sourced garments designed for the modern individual.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary px-10 py-4 text-lg">Shop Now</button>
            <button className="btn btn-outline px-10 py-4 text-lg">New Collection</button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        section {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .z-0 { z-index: 0; }
        .z-10 { z-index: 10; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .block { display: block; }
        .text-6xl { font-size: 3.75rem; }
        .text-lg { font-size: 1.125rem; }
        .leading-tight { line-height: 1.1; }
        .leading-relaxed { line-height: 1.625; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-lg { max-width: 32rem; }
        .px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        
        .bg-gradient-to-r {
          background: linear-gradient(to right, var(--bg) 0%, rgba(9, 9, 11, 0.4) 50%, transparent 100%);
        }

        .text-outline {
          -webkit-text-stroke: 1px var(--primary);
          color: transparent;
        }

        @keyframes subtleZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1.05); }
        }

        .animate-subtle-zoom {
          animation: subtleZoom 20s ease-out forwards;
        }

        @media (min-width: 768px) {
          .md\\:text-8xl { font-size: 6rem; }
        }
           .object-cover { object-fit: cover; }
           .w-full { width: 100%; }
              .h-full { height: 100%; }
      `}</style>
    </section>
  );
};

export default Hero;
