import React from 'react';
import HeroImage from '../assets/restauranfood.jpg'
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
          Phasellus eget pellentesque lorem, a ornare velit.
          Ut ante orci, condimentum non vehicula sit amet, aliquet at
          mauris.</p>
        <button className='reserveTabele-btn'>Reserve a Table</button>
      </article>
      <img src={HeroImage} alt='HeroImage' className='hero-image'/>
    </section>
  );
};

export default HeroSection;
