import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-bg border-l border-glass-border h-full flex flex-col animate-slide-in">
        <div className="p-8 border-b border-glass-border flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">SHOPPING BAG</h2>
          <button onClick={onClose} className="text-secondary hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-secondary mb-8">Your bag is currently empty.</p>
              <button onClick={onClose} className="btn btn-primary">Start Shopping</button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-24 h-32 flex-shrink-0 bg-secondary/10 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium tracking-tight">{item.name}</h4>
                        <button onClick={() => onRemove(item.id)} className="text-secondary hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-secondary text-sm mb-4">€{item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-glass-border rounded-lg overflow-hidden">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-2 hover:bg-glass transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-2 hover:bg-glass transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-8 border-t border-glass-border bg-glass">
            <div className="flex justify-between items-center mb-6">
              <span className="text-secondary uppercase tracking-widest text-sm font-medium">Subtotal</span>
              <span className="text-2xl font-bold">€{subtotal}</span>
            </div>
            <button className="btn btn-primary w-full py-4 text-lg">Checkout Now</button>
            <p className="text-center text-secondary text-xs mt-4">Shipping and taxes calculated at checkout.</p>
          </div>
        )}
      </div>

      <style jsx="true">{`
        .z-\\[100\\] { z-index: 100; }
        .justify-end { justify-content: flex-end; }
        .bg-black\\/60 { background-color: rgba(0, 0, 0, 0.6); }
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
        .max-w-md { max-width: 28rem; }
        .border-l { border-left-width: 1px; }
        .h-full { height: 100%; }
        .flex-col { flex-direction: column; }
        .p-8 { padding: 2rem; }
        .border-b { border-bottom-width: 1px; }
        .flex-1 { flex: 1; }
        .overflow-y-auto { overflow-y: auto; }
        .flex-shrink-0 { flex-shrink: 0; }
        .mt-4 { margin-top: 1rem; }
        .text-xs { font-size: 0.75rem; }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .animate-slide-in {
          animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hover\\:text-red-500:hover { color: #ef4444; }
      `}</style>
    </div>
  );
};

export default CartDrawer;
