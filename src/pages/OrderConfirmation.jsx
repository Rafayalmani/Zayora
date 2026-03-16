import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) setOrderDetails(JSON.parse(savedOrder));
  }, []);

  return (
    <motion.div 
      className="py-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            
            {/* Header Section */}
            <div className="text-center mb-5">
              <i className="bi bi-bag-check" style={{ fontSize: '3rem' }}></i>
              <h1 className="display-6 fw-bold mt-3 mb-2">Thank You for Your Order</h1>
              <p className="text-muted">Your order <span className="fw-bold text-dark">#{orderId}</span> has been successfully placed.</p>
            </div>

            {/* Receipt Box */}
            <div className="border border-dark p-4 p-md-5">
              <h5 className="text-uppercase tracking-widest mb-4">Summary</h5>
              
              <div className="row mb-4">
                <div className="col-6">
                  <small className="text-muted text-uppercase d-block mb-1">Customer</small>
                  <strong className="d-block">{orderDetails?.customer?.fullName || 'Valued Customer'}</strong>
                </div>
                <div className="col-6">
                  <small className="text-muted text-uppercase d-block mb-1">Date</small>
                  <strong className="d-block">{new Date().toLocaleDateString()}</strong>
                </div>
              </div>

              <div className="bg-light p-3 mb-4">
                <p className="small text-muted mb-0">
                  <i className="bi bi-info-circle me-2"></i>
                  A confirmation email has been sent to <strong>{orderDetails?.customer?.email}</strong> with your order details and delivery timeline.
                </p>
              </div>

              <div className="d-grid gap-2 mt-4">
                <Link to="/shop" className="btn btn-dark py-3 rounded-0 text-uppercase tracking-widest fw-bold">
                  Continue Shopping
                </Link>
                <button className="btn btn-outline-dark py-3 rounded-0 text-uppercase tracking-widest fw-bold" onClick={() => window.print()}>
                  Download Receipt
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;