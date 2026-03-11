// src/pages/Home.jsx (Fully mobile responsive)
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <div className="w-full bg-[#0a0a0a] flex justify-center items-center overflow-hidden">
  {/* The Wrapper ensures the image never exceeds the screen width */}
  <div className="w-full max-w-[1920px] relative">
    <img 
      src="/images/hero4.png" 
      alt="Zayora Festive Collection"
      className="w-full h-auto block" 
      style={{ 
 
        display: 'block',
        width: '100%',
        height: 'auto',
        // Smoothly handles high-resolution screens
        imageRendering: 'auto'
      }}
    />
    
    {/* Luxury Finishing: A subtle dark gradient at the bottom 
        to blend the image into your website's dark background */}
    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
  </div>
</div>
      

      {/* Featured Products - Mobile Responsive */}
      <div className="container py-4 py-md-5">
        <h2 className="text-center mb-3 mb-md-5">Featured Products</h2>

        {/* Responsive Grid */}
        <div className="row g-3 g-md-4">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="col-6 col-md-4 col-lg-3"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button - Mobile Responsive */}
        <div className="text-center mt-4 mt-md-5">
          <Link
            to="/shop"
            className="btn btn-outline-dark btn-sm btn-md-lg"
            style={{
              padding: '0.5rem 1.5rem',
              fontSize: '0.9rem'
            }}
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Optional: Add some spacing at bottom for mobile */}
      <style jsx>{`
        @media (max-width: 576px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .btn-outline-dark {
            width: 100%;
            max-width: 250px;
          }
        }

        @media (min-width: 577px) and (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }
        }

        @media (min-width: 769px) {
          .btn-md-lg {
            padding: 0.75rem 2rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
