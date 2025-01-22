import React from 'react';
import MarioAdrianA from '../assets/Mario and Adrian A.jpg';
import MarioAdrianB from '../assets/Mario and Adrian b.jpg';
import RestaurantChef from '../assets/restaurant chef B.jpg';
import Restaurant from '../assets/restaurant.jpg';
import '../style/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <article>
        <h2>Welcome to Little Lemon</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam imperdiet mi lobortis, posuere lacus ac, viverra nulla.
            Aliquam eget arcu eget augue semper ullamcorper.
            Phasellus eget pellentesque lorem, a ornare velit. Aliquam imperdiet 
            mi lobortis, posuere lacus ac, viverra nulla.
        </p>
      </article>
      <img src={MarioAdrianA} alt='MarioAdrianA' className='menu-card'/>
      <img src={MarioAdrianB} alt='MarioAdrianB' className='menu-card'/>
      <img src={RestaurantChef} alt='RestaurantChef' className='menu-card'/>
      <img src={Restaurant} alt='Restaurant' className='menu-card'/>
    </section>
  );
};

export default AboutSection;