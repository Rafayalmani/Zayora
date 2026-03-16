import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="about-container"
    >
      {/* 1. IMPACT HERO - Optimized for Mobile Viewport */}
      <section className="hero-section position-relative">
        <div className="hero-image-wrapper">
          <img 
            src="/images/11.jpeg" 
            alt="Zayora Craftsmanship" 
            className="about-hero-img" 
          />
          <div className="hero-overlay d-flex align-items-end p-4 p-md-5">
            <div className="text-white">
              <span className="badge bg-white text-dark rounded-0 mb-2 px-3">SINCE 2026</span>
              <h1 className="display-4 fw-bold">Zayora.</h1>
              <p className="opacity-75 tracking-wide">Modernizing Heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY - Mobile-First Typography */}
      <section className="py-5 px-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="section-title text-center mb-4">Our Narrative</h2>
              <p className="story-text text-muted text-center mb-0">
                Born in the heart of Islamabad, **Zayora** is a celebration of the contemporary woman. 
                We believe that clothing is more than just fabric—it's a story of identity. 
                Our design philosophy bridges the gap between traditional **Eastern motifs** and the minimalist aesthetic of **Modern Architecture**.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE CARDS - Horizontal Scroll on Mobile */}
      <section className="py-5 bg-light">
        <div className="container px-0 px-md-3">
          <div className="d-flex flex-nowrap overflow-auto px-3 gap-3 value-scroll pb-4">
            {[
              { title: 'Artisanal', icon: 'bi-scissors', desc: 'Hand-stitched precision in every lace and border.' },
              { title: 'Ethical', icon: 'bi-heart', desc: 'Sourcing premium cotton with respect for our makers.' },
              { title: 'Exclusive', icon: 'bi-stars', desc: 'Limited edition drops to ensure your look is unique.' }
            ].map((v, i) => (
              <div key={i} className="value-card bg-white p-4 shadow-sm flex-shrink-0">
                <i className={`bi ${v.icon} fs-2 text-dark mb-3 d-block`}></i>
                <h3 className="h6 fw-bold text-uppercase mb-2">{v.title}</h3>
                <p className="small text-muted mb-0">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S NOTE - Professional Branding */}
      <section className="py-5 bg-white border-bottom">
        <div className="container text-center px-4">
          <div className="mb-4">
             <div className="founder-signature mb-2">Rafay Almani</div>
             <p className="text-muted small text-uppercase tracking-widest">Founder & Creative Lead</p>
          </div>
          <p className="fst-italic text-muted quote-text">
            "We don't just create clothes; we create confidence."
          </p>
        </div>
      </section>

      <style jsx>{`
        .hero-image-wrapper {
          height: 80vh; /* Taller on mobile for impact */
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .about-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          letter-spacing: -0.02em;
        }

        .story-text {
          line-height: 1.8;
          font-size: 1.05rem;
        }

        /* Value Cards - Scrollable on Mobile, Grid on Desktop */
        .value-scroll {
          scrollbar-width: none; /* Firefox */
        }
        .value-scroll::-webkit-scrollbar { display: none; }

        .value-card {
          width: 260px;
          border-radius: 8px;
        }

        .founder-signature {
          font-family: 'Dancing Script', cursive; /* Optional: adds a signature look */
          font-size: 1.5rem;
          font-weight: 600;
        }

        .quote-text {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .value-scroll {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
            overflow: visible;
          }
          .value-card { width: auto; }
          .hero-image-wrapper { height: 60vh; }
        }
      `}</style>
    </motion.div>
  );
};

export default About;