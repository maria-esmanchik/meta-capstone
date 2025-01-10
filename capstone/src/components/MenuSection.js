import React from 'react';
//import './MenuSection.css';

const MenuSection = () => {
  return (
    <section className="menu-section">
      <h2>This Week's Specials!</h2>
      <div className="menu-items">
        <div className="menu-item">
          <h3>Greek Salad</h3>
          <p>$12.99</p>
          <button>Order Delivery</button>
        </div>
        <div className="menu-item">
          <h3>Bruschetta</h3>
          <p>$5.99</p>
          <button>Order Delivery</button>
        </div>
        <div className="menu-item">
          <h3>Lemon Dessert</h3>
          <p>$5.00</p>
          <button>Order Delivery</button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
