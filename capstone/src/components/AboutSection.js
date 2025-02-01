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
        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, 
          who moved to the United States to pursue their shared dream of 
          owning a restaurant. To craft the menu, Mario relies on family 
          recipes and his experience as a chef in Italy. Adrian does all 
          the marketing for the restaurant and led the effort to expand the 
          menu beyond classic Italian to incorporate additional cuisines from 
          the Mediterranean region.
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