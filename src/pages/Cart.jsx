import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currencyFormatter';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <motion.div 
        className="py-5 my-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container text-center">
          <div className="mb-4">
             <i className="bi bi-bag-heart text-muted" style={{ fontSize: '5rem', opacity: 0.3 }}></i>
          </div>
          <h2 className="fw-bold mb-3">Your Bag is Empty</h2>
          <p className="text-muted mb-4">It looks like you haven't added any of our pieces to your bag yet.</p>
          <Link to="/shop" className="btn btn-dark rounded-0 px-5 py-3 text-uppercase tracking-widest">
            Explore Collections
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container">
        {/* Progress Header */}
        <div className="row justify-content-center mb-5">
           <div className="col-lg-6 text-center">
              <h1 className="display-6 fw-bold mb-4">Shopping Bag</h1>
              <div className="d-flex justify-content-center align-items-center gap-3 small text-uppercase tracking-widest fw-bold">
                 <span className="text-dark">Bag</span>
                 <i className="bi bi-chevron-right text-muted"></i>
                 <span className="text-muted opacity-50">Checkout</span>
                 <i className="bi bi-chevron-right text-muted"></i>
                 <span className="text-muted opacity-50">Payment</span>
              </div>
           </div>
        </div>

        <div className="row g-5">
          {/* Items List */}
          <div className="col-lg-8">
            <div className="table-responsive d-none d-md-block">
              <table className="table align-middle">
                <thead className="text-uppercase small tracking-widest text-muted border-top-0">
                  <tr>
                    <th className="ps-0 border-0">Product</th>
                    <th className="border-0">Quantity</th>
                    <th className="border-0">Total</th>
                    <th className="border-0 text-end pe-0"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-bottom">
                      <td className="ps-0 py-4">
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.name} className="me-3 object-fit-cover" style={{ width: '80px', height: '100px', backgroundColor: '#f8f9fa' }} />
                          <div>
                            <h6 className="mb-1 fw-bold">{item.name}</h6>
                            <p className="text-muted small mb-0">{formatPrice(item.price)}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center border" style={{ width: 'fit-content' }}>
                          <button className="btn btn-sm px-3 py-2 rounded-0 border-0" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span className="px-3 fw-bold">{item.quantity}</span>
                          <button className="btn btn-sm px-3 py-2 rounded-0 border-0" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td className="fw-bold">{formatPrice(item.price * item.quantity)}</td>
                      <td className="text-end pe-0">
                        <button className="btn btn-link text-muted p-0" onClick={() => removeFromCart(item.id)}>
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View Items */}
            <div className="d-md-none">
               {cartItems.map(item => (
                 <div key={item.id} className="d-flex border-bottom py-3 position-relative">
                   <img src={item.image} alt={item.name} className="object-fit-cover me-3" style={{ width: '100px', height: '130px' }} />
                   <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1 pe-4">{item.name}</h6>
                      <p className="small text-muted mb-2">{formatPrice(item.price)}</p>
                      <div className="d-flex align-items-center border mb-2" style={{ width: 'fit-content' }}>
                          <button className="btn btn-sm px-3 py-1 border-0" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span className="px-2 fw-bold">{item.quantity}</span>
                          <button className="btn btn-sm px-3 py-1 border-0" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <p className="fw-bold mb-0">{formatPrice(item.price * item.quantity)}</p>
                   </div>
                   <button className="btn btn-link text-muted p-0 position-absolute top-0 end-0" onClick={() => removeFromCart(item.id)}>
                      <i className="bi bi-x-lg"></i>
                   </button>
                 </div>
               ))}
            </div>

            <button className="btn btn-link text-muted text-decoration-none p-0 mt-4 small text-uppercase tracking-widest fw-bold" onClick={clearCart}>
               <i className="bi bi-trash3 me-2"></i> Clear Shopping Bag
            </button>
          </div>

          {/* Summary Sidebar */}
          <div className="col-lg-4">
            <div className="bg-light p-4 p-md-5 position-sticky" style={{ top: '100px' }}>
              <h4 className="fw-bold mb-4">Summary</h4>
              <div className="d-flex justify-content-between mb-3 text-muted">
                <span className="text-uppercase small tracking-wide">Subtotal</span>
                <span>{formatPrice(totalAmount)}</span>
              
                
              </div>
              <hr className="my-4" />
              <div className="d-flex justify-content-between mb-5 align-items-end">
                <span className="h5 fw-bold mb-0">Total</span>
                <span className="h4 fw-bold mb-0">{formatPrice(totalAmount)}</span>
              </div>
              
              <button className="btn btn-dark w-100 py-3 rounded-0 text-uppercase tracking-widest fw-bold mb-3" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </button>
              
              <p className="text-center text-muted small mb-0">
                <i className="bi bi-shield-check me-2"></i> Secure Checkout Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .tracking-widest { letter-spacing: 0.15em; }
        .object-fit-cover { object-fit: cover; }
        .btn-dark { background-color: #000; border-color: #000; }
        .btn-dark:hover { background-color: #222; }
      `}</style>
    </motion.div>
  );
};

export default Cart;