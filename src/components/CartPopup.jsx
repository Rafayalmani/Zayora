import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/currencyFormatter';

const CartPopup = ({ isOpen, onClose, product, cartTotal, cartCount }) => {
  // Auto-close timer with progress bar sync
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cart-popup-wrapper"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          style={{
            position: 'fixed',
            zIndex: 9999,
            right: '20px',
            bottom: '20px',
            width: 'calc(100% - 40px)',
            maxWidth: '380px',
          }}
        >
          <div className="card border-0 shadow-2xl overflow-hidden shadow-dark">
            {/* Minimal Progress Bar */}
            <motion.div 
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 4, ease: "linear" }}
              style={{ height: '3px', backgroundColor: '#000', position: 'absolute', top: 0, left: 0 }}
            />

            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center">
                   <div className="bg-black text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '20px', height: '20px' }}>
                      <i className="bi bi-check" style={{ fontSize: '14px' }}></i>
                   </div>
                   <span className="text-uppercase tracking-widest fw-bold small">Added to Bag</span>
                </div>
                <button onClick={onClose} className="btn-close small" style={{ fontSize: '0.7rem' }}></button>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0" style={{ width: '70px', height: '90px', backgroundColor: '#f5f5f5' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="ms-3 flex-grow-1 overflow-hidden">
                  <h6 className="text-truncate mb-1 fw-bold">{product.name}</h6>
                  <p className="text-muted small mb-1">Qty: 1</p>
                  <p className="fw-bold mb-0">{formatPrice(product.price)}</p>
                </div>
              </div>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted small text-uppercase">Subtotal ({cartCount} items)</span>
                  <span className="fw-bold">{formatPrice(cartTotal)}</span>
                </div>
                
                <div className="row g-2">
                  <div className="col-6">
                    <Link to="/cart" onClick={onClose} className="btn btn-outline-dark w-100 rounded-0 text-uppercase small py-2 fw-bold">
                      View Bag
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/checkout" onClick={onClose} className="btn btn-dark w-100 rounded-0 text-uppercase small py-2 fw-bold">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .shadow-2xl {
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
            .tracking-widest {
              letter-spacing: 0.1em;
            }
            .object-fit-cover {
              object-fit: cover;
            }
            @media (max-width: 576px) {
              .cart-popup-wrapper {
                right: 10px !important;
                bottom: 10px !important;
                left: 10px !important;
                width: auto !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartPopup;