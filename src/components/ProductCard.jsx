import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currencyFormatter';
import CartPopup from './CartPopup';

const ProductCard = ({ product }) => {
  const { addToCart, totalAmount, cartItems } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAddedProduct(product);
    setShowPopup(true);
  };

  return (
    <>
      <motion.div 
        className="card h-100 border-0 shadow-sm rounded-0 bg-white" 
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          {/* Responsive Aspect Ratio Fix:
              Uses 3:4 ratio for a luxury portrait look.
              This prevents the "too large" container issue on mobile.
          */}
          <div className="position-relative overflow-hidden bg-light" 
               style={{ 
                 aspectRatio: '3 / 4', 
                 width: '100%' 
               }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'top center' // Keeps the model's head/neckline visible
              }}
              className="transition-transform duration-700 hover-zoom"
            />
          </div>
        </Link>
        
        <div className="card-body text-center p-2 p-md-3">
          <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
            <h6 className="card-title mb-1 fw-normal" 
                style={{ 
                  fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', 
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
              {product.name}
            </h6>
          </Link>
          
          <p className="card-text fw-bold mb-2 text-dark" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            {formatPrice(product.price)}
          </p>
          
          <button 
            className="btn btn-dark w-100 rounded-0 py-2 py-md-2 shadow-none" 
            style={{ 
              fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', 
              textTransform: 'uppercase', 
              letterSpacing: '1px' 
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </motion.div>

      {/* Internal CSS for the zoom effect */}
      <style jsx>{`
        .hover-zoom:hover {
          transform: scale(1.08);
        }
        .card {
          transition: box-shadow 0.3s ease;
        }
        .card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
        }
      `}</style>

      <CartPopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        product={addedProduct}
        cartTotal={totalAmount}
        cartCount={totalItems}
      />
    </>
  );
};

export default ProductCard;