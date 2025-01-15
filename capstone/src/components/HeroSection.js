import React from 'react';
import HeroImage from '../assets/restauranfood.jpg'
import '../style/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h2>Welcome to Little Lemon</h2>
      <p>Chicago's best Mediterranean cuisine!</p>
      <button>Reserve a Table</button>
      <img src={HeroImage} alt='HeroImage' className='hero-image'/>
    </section>
  );
};

export default HeroSection;
