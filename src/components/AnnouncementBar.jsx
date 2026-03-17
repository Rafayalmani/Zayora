// src/components/AnnouncementBar.jsx
import React, { useState, useEffect } from 'react';

const messages = [
  '🎉 Summer Sale - 20% OFF on all orders above PKR 5000',
  '🚚 Free delivery on orders PKR 6000 and above',
  '✨ New Festive Collection is now live  Shop Now',
  '↩️ Easy 7-day returns on all orders',
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % messages.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="ann">
        <button
          className="ann__arrow"
          onClick={() => setCurrent(prev => (prev - 1 + messages.length) % messages.length)}
          aria-label="Previous"
        >
          
        </button>

        <span className={`ann__msg ${visible ? 'ann__msg--in' : 'ann__msg--out'}`}>
          {messages[current]}
        </span>

        <button
          className="ann__arrow"
          onClick={() => setCurrent(prev => (prev + 1) % messages.length)}
          aria-label="Next"
        >
          
        </button>

        <button
          className="ann__close"
          onClick={() => setShow(false)}
          aria-label="Close"
        >
          
        </button>
      </div>

      <style jsx>{`
        .ann {
          width: 100%;
          background: #1a1a18;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.55rem 1rem;
          position: relative;
          min-height: 36px;
        }

        .ann__msg {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 300;
          letter-spacing: 0.08em;
          text-align: center;
          transition: opacity 0.35s ease, transform 0.35s ease;
          flex: 1;
          max-width: 600px;
        }

        .ann__msg--in  { opacity: 1; transform: translateY(0); }
        .ann__msg--out { opacity: 0; transform: translateY(-6px); }

        .ann__arrow {
          background: none;
          border: none;
          color: rgba(255,255,255,0.45);
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0 0.25rem;
          line-height: 1;
          transition: color 0.2s;
          flex-shrink: 0;
        }

        .ann__arrow:hover { color: #fff; }

        .ann__close {
          background: none;
          border: none;
          color: rgba(255,255,255,0.35);
          font-size: 1rem;
          cursor: pointer;
          padding: 0;
          line-height: 1;
          position: absolute;
          right: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          transition: color 0.2s;
        }

        .ann__close:hover { color: #fff; }

        @media (max-width: 576px) {
          .ann { gap: 0.4rem; padding: 0.5rem 2.5rem 0.5rem 0.75rem; }
          .ann__msg { font-size: 0.67rem; }
          .ann__arrow { display: none; }
        }
      `}</style>
    </>
  );
};

export default AnnouncementBar;