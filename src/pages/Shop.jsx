import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Shop = () => {
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["Dresses", "Tops", "Bottoms", "Accessories", "Footwear"];

  // Filter & Sort Logic
  const filteredProducts = products
    .filter(p => !category || p.category === category.toLowerCase())
    .sort((a, b) => {
      if (sortBy === 'low') return a.price - b.price;
      if (sortBy === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <motion.div 
      className="shop-container py-4"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <div className="container">
        {/* Editorial Header */}
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-2">The Collection</h1>
          <p className="text-muted small text-uppercase tracking-widest">Timeless Elegance & Modern Style</p>
        </header>

        {/* Minimal Filter Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top border-bottom py-3 mb-5">
          {/* Category Quick-Links */}
          <div className="category-scroll d-flex gap-3 overflow-auto pb-2 pb-md-0 w-100 w-md-auto">
            <button 
              className={`filter-pill ${category === '' ? 'active' : ''}`}
              onClick={() => setCategory('')}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-pill ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
            <span className="text-muted small d-none d-md-inline text-uppercase">Sort:</span>
            <select 
              className="form-select form-select-sm border-0 bg-transparent fw-bold text-uppercase"
              style={{ width: 'auto', cursor: 'pointer', fontSize: '0.75rem' }}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Featured</option>
              <option value="low">Price: Low-High</option>
              <option value="high">Price: High-Low</option>
            </select>
          </div>
        </div>

        {/* Count */}
        <div className="mb-4">
            <small className="text-muted text-uppercase tracking-widest" style={{ fontSize: '0.7rem' }}>
                Showing {filteredProducts.length} Products
            </small>
        </div>

        {/* Responsive Grid */}
        <div className="row g-3 g-lg-4">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                className="col-6 col-md-4 col-lg-3"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No items found in this category.</p>
            <button className="btn btn-dark rounded-0 px-4" onClick={() => setCategory('')}>View All</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .tracking-widest { letter-spacing: 0.2em; }
        
        .filter-pill {
          background: none;
          border: 1px solid transparent;
          color: #888;
          padding: 6px 16px;
          border-radius: 50px;
          white-space: nowrap;
          font-size: 0.85rem;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .filter-pill:hover {
          color: #000;
        }

        .filter-pill.active {
          border-color: #000;
          color: #000;
          font-weight: 600;
        }

        .category-scroll::-webkit-scrollbar {
          display: none; /* Hide scrollbar for clean look */
        }

        .form-select:focus {
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .display-5 { font-size: 2rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default Shop;