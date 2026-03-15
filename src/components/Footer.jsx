import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          
          {/* Brand & Socials */}
          <div className="col-12 col-md-6">
            <h5 className="fw-bold mb-3">Zayora</h5>
            <p className="text-white-50 mb-4" style={{ maxWidth: "350px", margin: "0 auto 1.5rem auto", marginLeft: "md:0" }}>
              Your premier destination for the latest fashion trends and timeless classics.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-4">
              <motion.a href="https://www.instagram.com/nvm_almani" target="_blank" className="text-white-50" whileHover={{ color: "#fff" }}><i className="bi bi-instagram fs-4"></i></motion.a>
              <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=almanidotcompany@gmail.com" target="_blank" className="text-white-50" whileHover={{ color: "#fff" }}><i className="bi bi-envelope-fill fs-4"></i></motion.a>
              <motion.a href="https://x.com/Rafayalmani" target="_blank" className="text-white-50" whileHover={{ color: "#1DA1F2" }}><i className="bi bi-twitter-x fs-4"></i></motion.a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><i className="bi bi-envelope me-2"></i>almanidotcompany@gmail.com</li>
              <li className="mb-2"><i className="bi bi-telephone me-2"></i>+92 (315) 508 9965</li>
              <li className="mb-2"><i className="bi bi-geo-alt me-2"></i>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-4 mt-4 border-top border-secondary">
          <p className="text-white-50 mb-1" style={{ fontSize: "0.85rem" }}>
            &copy; {currentYear} Zayora. All rights reserved.
          </p>
          <p className="text-white-50" style={{ fontSize: "0.75rem", opacity: 0.7 }}>
            Designed & Developed by <a href="https://almani-lime.vercel.app" target="_blank" className="text-white-50" style={{ textDecoration: "none" }}>Rafay Almani</a>
          </p>
        </div>
      </div>

      <style>{`
        footer a { text-decoration: none; transition: 0.3s; }
        .list-unstyled li { font-size: 0.95rem; }
        @media (max-width: 768px) {
          .col-md-6 { margin-bottom: 1rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;