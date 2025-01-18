import React from 'react';
import GreekSalad from '../assets/greek salad.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import LemoneDessert from '../assets/lemon dessert.jpg';
import '../style/MenuSection.css';

const MenuSection = () => {
  return (
    <section className="menu-section">
      <h2>This Week's Specials!</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src={GreekSalad} alt='GreekSalad' className='menu-card'/>
          <h3>Greek Salad</h3>
          <p>Romaine lettuce, sliced cucumbers, chopped tomatoes,
            pitted black olives, red and green bell peppers,
            a red onion, and feta cheese</p>
          <p>$12.99</p>
          <button>Order Delivery</button>
        </div>
        <div className="menu-item">
          <img src={Bruchetta} alt='Bruchetta' className='menu-card'/>
          <h3>Bruschetta</h3>
          <p>Toasted bread is topped with a mixture of juicy tomatoes,
          garlic, Parmesan cheese, fresh basil, and balsamic.</p>
          <p>$5.99</p>
          <button>Order Delivery</button>
        </div>
        <div className="menu-item">
          <img src={LemoneDessert} alt='LemoneDessert' className='menu-card'/>
          <h3>Lemon Dessert</h3>
          <p>The lemon biscuits don’t rise super tall, but you’ll
            enjoy their crisp crumbly texture paired with the soft
            whipped cream and tangy lemon curd.</p>
          <p>$5.00</p>
          <button>Order Delivery</button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
