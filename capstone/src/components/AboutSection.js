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
      <div className='about-cards'>
        <img src={MarioAdrianA} alt='MarioAdrianA' className='about-card'/>
        <img src={MarioAdrianB} alt='MarioAdrianB' className='about-card'/>
        <img src={RestaurantChef} alt='RestaurantChef' className='about-card'/>
        <img src={Restaurant} alt='Restaurant' className='about-card'/>
      </div>
    </section>
  );
};

export default AboutSection;