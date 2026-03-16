// src/pages/Checkout.jsx (Add popup)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";
import { formatPrice } from "../utils/currencyFormatter";
import OrderPlacedPopup from "../components/OrderPlacedPopup"; 

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useCart();
  const {
    shippingInfo,
    updateShippingInfo,
    deliveryMethod,
    setDeliveryMethod,
    shippingCost,
    grandTotal,
    processCheckout,
  } = useCheckout();

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  const [placedOrderId, setPlacedOrderId] = useState(""); 

  const isShippingValid = () => {
    return (
      shippingInfo.fullName &&
      shippingInfo.email &&
      shippingInfo.phone &&
      shippingInfo.address &&
      shippingInfo.city &&
      shippingInfo.postalCode
    );
  };

  const handlePlaceOrder = async () => {
    setProcessing(true);
    setError("");

    try {
      const result = await processCheckout();

      if (result.success) {
        // Save order details
        const orderDetails = {
          orderId: result.orderId,
          customer: {
            fullName: shippingInfo.fullName,
            email: shippingInfo.email,
          },
        };
        localStorage.setItem("lastOrder", JSON.stringify(orderDetails));

        // Show popup
        setPlacedOrderId(result.orderId);
        setShowPopup(true);

        // Navigate after popup closes (3 seconds)
        setTimeout(() => {
          navigate(`/order-confirmation/${result.orderId}`);
        });
      } else {
        setError("Failed to place order");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    navigate("/shop");
    return null;
  }

  return (
    <>
      <motion.div
        className="py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <h1 className="text-center mb-4">Checkout</h1>

          {step === 1 ? (
            // Step 1: Shipping Information
           <div className="row justify-content-center">
  <div className="col-lg-8">
    <div className="card border-0 shadow-sm p-4 p-md-5 rounded-0">
      <h4 className="fw-bold mb-4">Shipping Information</h4>

      <div className="row g-4">
        {/* Name & Email */}
        <div className="col-md-6">
          <label className="form-label small fw-bold text-uppercase text-muted">Full Name *</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-0"
            value={shippingInfo.fullName || ""}
            onChange={(e) => updateShippingInfo("fullName", e.target.value)}
            
          />
        </div>
        <div className="col-md-6">
          <label className="form-label small fw-bold text-uppercase text-muted">Email Address *</label>
          <input
            type="email"
            className="form-control form-control-lg rounded-0"
            value={shippingInfo.email || ""}
            onChange={(e) => updateShippingInfo("email", e.target.value)}
         
          />
        </div>

        {/* Phone */}
        <div className="col-12">
          <label className="form-label small fw-bold text-uppercase text-muted">Phone Number *</label>
          <input
            type="tel"
            className="form-control form-control-lg rounded-0"
            value={shippingInfo.phone || ""}
            onChange={(e) => updateShippingInfo("phone", e.target.value)}
            placeholder="03XXXXXXXXX"
          />
        </div>

        {/* Address */}
        <div className="col-12">
          <label className="form-label small fw-bold text-uppercase text-muted">Delivery Address *</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-0"
            value={shippingInfo.address || ""}
            onChange={(e) => updateShippingInfo("address", e.target.value)}
          
          />
        </div>

        {/* City & Postal Code */}
        <div className="col-md-6">
          <label className="form-label small fw-bold text-uppercase text-muted">City *</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-0"
            value={shippingInfo.city || ""}
            onChange={(e) => updateShippingInfo("city", e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label small fw-bold text-uppercase text-muted">Postal Code *</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-0"
            value={shippingInfo.postalCode || ""}
            onChange={(e) => updateShippingInfo("postalCode", e.target.value)}
          />
        </div>
      </div>

      <hr className="my-5" />

      <h5 className="mb-3 fw-bold">Delivery Method</h5>
      <div className="row g-3">
        {[
          { id: "standard", title: "Standard Shipping", time: "5-7 days", cost: "Rs. 200" },
          { id: "express", title: "Express Shipping", time: "2-3 days", cost: "Rs. 500" },
        ].map((method) => (
          <div className="col-md-6" key={method.id}>
            <div
              className={`p-3 border ${deliveryMethod === method.id ? "border-dark bg-light" : "border-light"}`}
              onClick={() => setDeliveryMethod(method.id)}
              style={{ cursor: "pointer", transition: "0.2s" }}
            >
              <div className="d-flex align-items-center mb-1">
                <input type="radio" checked={deliveryMethod === method.id} readOnly className="me-2" />
                <span className="fw-bold">{method.title}</span>
              </div>
              <p className="small text-muted mb-0 ms-4">{method.time} • {method.cost}</p>
            </div>
          </div>
        ))}
      </div>

      {error && <div className="alert alert-danger mt-4 rounded-0">{error}</div>}

      <button
        className="btn btn-dark w-100 mt-5 py-3 fw-bold text-uppercase"
        onClick={() => {
          // Robust Validation Logic
          const required = ['fullName', 'email', 'phone', 'address', 'city', 'postalCode'];
          const isValid = required.every(field => shippingInfo[field] && shippingInfo[field].trim().length > 0);
          
          if (isValid) {
            setError("");
            setStep(2);
          } else {
            setError("Please fill all required fields before continuing.");
          }
        }}
      >
        Continue to Payment
      </button>
    </div>
  </div>
</div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="row justify-content-center"
            >
              <div className="col-lg-6">
                <div className="text-center mb-5">
                  <div className="display-6 mb-3">
                    <i className="bi bi-shield-check text-dark"></i>
                  </div>
                  <h3 className="fw-bold">Payment Method</h3>
                  <p className="text-muted">
                    Secure Cash on Delivery (COD) selected
                  </p>
                </div>

                {/* Elegant Receipt Style */}
                <div className="border border-dark p-4 p-md-5">
                  <h6 className="text-uppercase tracking-widest mb-4">
                    Order Breakdown
                  </h6>

                  <div className="d-flex flex-column gap-3 mb-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span className="text-muted">
                          {item.name} <small>×{item.quantity}</small>
                        </span>
                        <span className="fw-bold">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-top border-bottom py-3 d-flex justify-content-between align-items-center my-3">
                    <span className="text-uppercase small fw-bold">
                      Shipping
                    </span>
                    <span>{formatPrice(shippingCost)}</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <span className="h5 mb-0">Total Amount</span>
                    <span className="h4 mb-0 fw-bold">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>

                  {error && (
                    <div className="alert alert-danger rounded-0 mb-4">
                      {error}
                    </div>
                  )}

                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-dark w-100 py-3 rounded-0 text-uppercase tracking-widest fw-bold"
                      onClick={handlePlaceOrder}
                      disabled={processing}
                    >
                      {processing ? "Processing..." : "Confirm & Place Order"}
                    </button>
                    <button
                      className="btn btn-link text-muted text-decoration-none py-2"
                      onClick={() => setStep(1)}
                    >
                      Modify Shipping Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Order Placed Popup */}
      <OrderPlacedPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        orderId={placedOrderId}
      />
    </>
  );
};

export default Checkout;
