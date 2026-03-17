import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import AnnouncementBar from '../components/AnnouncementBar';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* ── Announcement Bar — sits above navbar ── */}
      <AnnouncementBar />

      <nav className="zayora-nav sticky-top bg-white border-bottom">
        <div className="container nav-wrapper">

          {/* 1. LEFT: Brand Identity */}
          <div className="nav-section section-left">
            <NavLink to="/" className="nav-logo">
              ZAYORA
            </NavLink>
          </div>

          {/* 2. CENTER: Slim Desktop Links */}
          <div className="nav-section section-center d-none d-lg-flex">
            <ul className="desktop-links">
              <li><NavLink to="/" className="link-item">Home</NavLink></li>
              <li><NavLink to="/shop" className="link-item">Shop</NavLink></li>
              <li><NavLink to="/about" className="link-item">About</NavLink></li>
            </ul>
          </div>

          {/* 3. RIGHT: Actions */}
          <div className="nav-section section-right">
            <NavLink to="/cart" className="cart-btn">
              <i className="bi bi-bag"></i>
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </NavLink>

            <button
              className={`mobile-toggler d-lg-none ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-drawer d-lg-none"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="mobile-links-wrapper">
                <NavLink to="/" className="mobile-link">Home</NavLink>
                <NavLink to="/shop" className="mobile-link">Shop</NavLink>
                <NavLink to="/about" className="mobile-link">About</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          .zayora-nav {
            height: 60px;
            display: flex;
            align-items: center;
            z-index: 2000;
            transition: all 0.3s ease;
          }

          @media (min-width: 992px) {
            .zayora-nav { height: 70px; }
          }

          .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          .nav-section { flex: 1; display: flex; align-items: center; }
          .section-center { justify-content: center; }
          .section-right { justify-content: flex-end; gap: 20px; }

          .nav-logo {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            text-decoration: none;
            color: #000;
            letter-spacing: 2px;
            font-size: clamp(1rem, 3vw, 1.4rem);
          }

          .desktop-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 35px;
          }

          .link-item {
            text-decoration: none;
            color: #444;
            text-transform: uppercase;
            font-size: 0.7rem;
            font-weight: 500;
            letter-spacing: 1.2px;
            transition: 0.3s;
          }

          .link-item:hover, .link-item.active { color: #000; }

          .cart-btn { font-size: 1.2rem; color: #000; position: relative; }
          .cart-count {
            position: absolute;
            top: -4px;
            right: -8px;
            background: #000;
            color: #fff;
            font-size: 0.55rem;
            padding: 1px 5px;
            border-radius: 50%;
          }

          .mobile-toggler { background: none; border: none; display: flex; flex-direction: column; gap: 5px; }
          .bar { width: 20px; height: 1.2px; background: #000; transition: 0.3s; }
          .active .bar:nth-child(1) { transform: translateY(3.1px) rotate(45deg); }
          .active .bar:nth-child(2) { transform: translateY(-3.1px) rotate(-45deg); }

          .mobile-drawer {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: #fff;
            border-bottom: 1px solid #eee;
          }

          .mobile-links-wrapper { display: flex; flex-direction: column; padding: 15px 20px; }
          .mobile-link {
            padding: 10px 0;
            text-decoration: none;
            color: #000;
            text-transform: uppercase;
            font-size: 0.8rem;
            border-bottom: 1px solid #f9f9f9;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;