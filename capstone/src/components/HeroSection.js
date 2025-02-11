import React from 'react';
import HeroImage from '../assets/restauranfood1.jpg'
import '../style/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section reservation-section">
      <article>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist.
        </p>
        <button className='reserveTabele-btn'>Reserve a Table</button>
      </article>
      <img src={HeroImage} alt='HeroImage' className='article-image'/>
    </section>
  );
};

export default HeroSection;
