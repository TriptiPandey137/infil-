mport React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main.jsx'; // or whatever you named the main file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React, { useState } from 'react';

// --- STYLES (Zyden Aesthetic) ---
const theme = {
  primary: '#008080', // Teal
  secondary: '#2F4F4F', // Slate
  bg: '#F4F7F9',
  white: '#FFFFFF',
  accent: '#5DADE2' // COD Blue
};

export default function ZydenApp() {
  const [view, setView] = useState('shop'); // shop, cart, success, admin, profile
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);

  const products = [
    { id: 1, name: "Minimalist Watch", price: 89, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" },
    { id: 2, name: "Teal Earbuds", price: 120, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200" },
  ];

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = (method) => {
    const id = "ZYD-" + Math.floor(Math.random() * 10000);
    setOrderId(id);
    setView('success');
    setCart([]);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: theme.bg, minHeight: '100vh' }}>
      {/* HEADER */}
      <nav style={{ background: theme.primary, color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 onClick={() => setView('shop')} style={{ cursor: 'pointer', margin: 0 }}>Zyden</h1>
        <div>
          <button onClick={() => setView('shop')} style={navBtn}>Shop</button>
          <button onClick={() => setView('cart')} style={navBtn}>Cart ({cart.length})</button>
          <button onClick={() => setView('admin')} style={navBtn}>Seller</button>
        </div>
      </nav>

      {/* SHOP VIEW */}
      {view === 'shop' && (
        <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {products.map(p => (
            <div key={p.id} style={cardStyle}>
              <img src={p.img} alt={p.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h3>{p.name}</h3>
              <p style={{ color: theme.primary, fontWeight: 'bold' }}>${p.price}</p>
              <button onClick={() => addToCart(p)} style={buyBtn}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {/* CART & CHECKOUT VIEW */}
      {view === 'cart' && (
        <div style={{ padding: '20px' }}>
          <h2>Your Shopping Bag</h2>
          {cart.map((item, i) => <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>{item.name} - ${item.price}</div>)}
          <h3 style={{ marginTop: '20px' }}>Total: ${total}</h3>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={() => handleCheckout('Card')} style={buyBtn}>Pay with Card</button>
            <button onClick={() => handleCheckout('COD')} style={{ ...buyBtn, background: theme.accent }}>Cash on Delivery (COD)</button>
          </div>
        </div>
      )}

      {/* SUCCESS VIEW */}
      {view === 'success' && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1 style={{ color: '#2ecc71' }}>✓ Confirmed!</h1>
          <p>Order ID: {orderId}</p>
          <p>Your aesthetic finds are on the way.</p>
          <button onClick={() => setView('shop')} style={buyBtn}>Back to Shop</button>
        </div>
      )}

      {/* ADMIN PANEL */}
      {view === 'admin' && (
        <div style={{ padding: '20px' }}>
          <h2>Seller Dashboard</h2>
          <div style={cardStyle}>
            <input placeholder="Product Name" style={inputStyle} />
            <input placeholder="Price" style={inputStyle} />
            <button style={buyBtn}>List New Product</button>
          </div>
        </div>
      )}
    </div>
  );
}

const navBtn = { background: 'none', border: 'none', color: 'white', marginLeft: '15px', cursor: 'pointer' };
const cardStyle = { background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' };
const buyBtn = { width: '100%', background: theme.primary, color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' };
