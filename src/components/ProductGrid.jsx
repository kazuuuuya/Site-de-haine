import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: "Charcoal Overcoat",
      price: 249,
      category: "Outerwear",
      image: "src/assets/coat.png"
    },
    {
      id: 2,
      name: "Minimal Silk Blouse",
      price: 159,
      category: "Tops",
      image: "src/assets/blouse.png"
    },
    {
      id: 3,
      name: "Premium Leather Boots",
      price: 329,
      category: "Footwear",
      image: "src/assets/boots.png"
    }
  ];

  return (
    <section className="section-padding" id="shop">
      <div className="container">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">CURATED COLLECTION</h2>
            <p className="text-secondary max-w-md">Our pieces are crafted with precision, and focus on timeless design and exceptional quality.</p>
          </div>
          <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">
            View All Products
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .mb-16 { margin-bottom: 4rem; }
        .mb-4 { margin-bottom: 1rem; }
        .text-4xl { font-size: 2.25rem; }
        .max-w-md { max-width: 28rem; }
        .border-b-2 { border-bottom-width: 2px; }
        .pb-2 { padding-bottom: 0.5rem; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .gap-12 { gap: 3rem; }
        
        @media (min-width: 768px) {
          .md\\:text-5xl { font-size: 3rem; }
          .md\\:block { display: block; }
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        
        @media (min-width: 1024px) {
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
           .items-end { align-items: flex-end; }
      `}</style>
    </section>
  );
};

export default ProductGrid;
