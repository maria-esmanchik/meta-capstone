import React from 'react';
import HeroImage from '../assets/restauranfood1.jpg'
import '../style/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <article>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam imperdiet mi lobortis, posuere lacus ac, viverra nulla.
          Aliquam eget arcu eget augue semper ullamcorper.
        </p>
        <button className='reserveTabele-btn'>Reserve a Table</button>
      </article>
      <img src={HeroImage} alt='HeroImage' className='article-image'/>
    </section>
  );
};

export default HeroSection;
