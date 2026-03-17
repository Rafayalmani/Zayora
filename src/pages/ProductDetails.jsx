import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/currencyFormatter";
import CartPopup from "../components/CartPopup";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart, totalAmount, totalItems } = useCart();

  // State for gallery
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.image);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) setMainImage(product.image);
  }, [product]);

  if (!product)
    return (
      <div className="py-5 text-center">
        <h2>Product not found</h2>
      </div>
    );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setShowPopup(true);
  };

  return (
    <>
      <motion.div
        className="py-4 py-lg-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <div className="row g-4">
            {/* 1. GALLERY SECTION (Multi-Image) */}
            <div className="col-12 col-lg-7">
              <div className="row g-2">
                {/* Thumbnails (Desktop side, Mobile bottom) */}
                <div className="col-12 col-md-2 order-2 order-md-1">
                  <div className="d-flex d-md-block gap-2 overflow-auto">
                    {[product.image, ...(product.gallery || [])].map(
                      (img, idx) => (
                        <div
                          key={idx}
                          className={`thumb-box mb-md-2 ${mainImage === img ? "active" : ""}`}
                          onClick={() => setMainImage(img)}
                        >
                          <img
                            src={img}
                            alt="thumbnail"
                            className="img-fluid"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Main View - Fixed "Fitting" issue */}
                <div className="col-12 col-md-10 order-1 order-md-2">
                  <div className="main-img-container bg-white border">
                    <img
                      src={mainImage}
                      alt={product.name}
                      className="img-fluid full-view-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. PRODUCT INFO SECTION */}
            <div className="col-12 col-lg-5">
              <div className="sticky-lg-top" style={{ top: "100px" }}>
                <h1 className="h2 fw-bold mb-2">{product.name}</h1>
                <h3 className="h4 mb-4 text-dark">
                  {formatPrice(product.price)}
                </h3>

                
                <ul
                  className="list-unstyled text-muted small mb-4"
                  style={{ lineHeight: "1.8" }}
                >
                  {product.details.map((detail, index) => (
                    <li key={index}>• {detail}</li>
                  ))}
                </ul>

                <div className="d-grid gap-3">
                  <div
                    className="d-flex align-items-center border p-2"
                    style={{ width: "fit-content" }}
                  >
                    <button
                      className="btn btn-sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-4 fw-bold">{quantity}</span>
                    <button
                      className="btn btn-sm"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    >
                      +
                    </button>
                  </div>

                  <motion.button
                    className="btn btn-dark btn-lg rounded-0 w-100 py-3 text-uppercase"
                    style={{ fontSize: "0.9rem", letterSpacing: "1px" }}
                    onClick={handleAddToCart}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Bag
                  </motion.button>
                </div>

                {/* Shipping Details */}
                <div className="mt-5 pt-4 border-top">
                  <div className="row g-3">
                    {/* Shipping Policy */}
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-truck fs-5 me-3 text-dark"></i>
                        <div>
                          <h6 className="mb-1 fw-bold">Shipping Rates</h6>
                          <p className="small text-muted mb-0">
                            Standard delivery across Pakistan. Rates calculated
                            at checkout based on your city.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <CartPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        product={product}
        cartTotal={totalAmount}
        cartCount={totalItems}
      />

      <style jsx>{`
        /* Fixes the "Image not showing all" issue */
        .main-img-container {
          width: 100%;
          height: 700px; /* Adjust this for your preferred desktop height */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .full-view-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* This ensures the whole image is visible */
        }

        .thumb-box {
          cursor: pointer;
          border: 1px solid #eee;
          transition: 0.3s;
          width: 80px;
          height: 100px;
          flex-shrink: 0;
        }

        .thumb-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumb-box.active {
          border-color: #000;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .main-img-container {
            height: 450px;
          }
          .thumb-box {
            width: 60px;
            height: 75px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductDetails;
