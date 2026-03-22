import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card fade-in group">
      <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-[#18181b]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 bg-primary text-bg p-4 rounded-full opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <Plus size={20} strokeWidth={2.5} />
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium tracking-tight mb-1">{product.name}</h3>
          <p className="text-secondary text-sm uppercase tracking-widest">{product.category}</p>
        </div>
        <p className="text-lg font-bold">€{product.price}</p>
      </div>

      <style jsx="true">{`
        .product-card {
          margin-bottom: 2rem;
        }
        .relative { position: relative; }
        .overflow-hidden { overflow: hidden; }
        .mb-6 { margin-bottom: 1.5rem; }
        .aspect-\\[4\\/5\\] { 
          aspect-ratio: 4 / 5; 
        }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .object-cover { object-fit: cover; }
        .transition-transform { transition-property: transform; }
        .duration-700 { transition-duration: 700ms; }
        .absolute { position: absolute; }
        .bottom-4 { bottom: 1rem; }
        .right-4 { right: 1rem; }
        .p-4 { padding: 1rem; }
        .rounded-full { border-radius: 9999px; }
        .opacity-0 { opacity: 0; }
        .translate-y-4 { transform: translateY(1rem); }
        .group-hover\\:opacity-100 { 
          opacity: 1 !important; 
        }
        .group-hover\\:translate-y-0 { 
          transform: translateY(0) !important; 
        }
        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .items-start { align-items: flex-start; }
        .text-lg { font-size: 1.125rem; }
        .font-medium { font-weight: 500; }
        .tracking-tight { letter-spacing: -0.025em; }
        .mb-1 { margin-bottom: 0.25rem; }
        .text-secondary { color: var(--secondary); }
        .text-sm { font-size: 0.875rem; }
        .uppercase { text-transform: uppercase; }
        .tracking-widest { letter-spacing: 0.1em; }
        .font-bold { font-weight: 700; }
      `}</style>
    </div>
  );
};

export default ProductCard;
