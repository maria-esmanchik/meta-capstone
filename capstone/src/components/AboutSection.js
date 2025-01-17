import React from 'react';
import MarioAdrianA from '../assets/Mario and Adrian A.jpg';
import MarioAdrianB from '../assets/Mario and Adrian b.jpg';
import RestaurantChef from '../assets/restaurant chef B.jpg';
import Restaurant from '../assets/restaurant.jpg';
//import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>Welcome to Little Lemon</h2>
      <p>Chicago's best Mediterranean cuisine!</p>
      <img src={MarioAdrianA} alt='MarioAdrianA' className='menu-card'/>
      <img src={MarioAdrianB} alt='MarioAdrianB' className='menu-card'/>
      <img src={RestaurantChef} alt='RestaurantChef' className='menu-card'/>
      <img src={Restaurant} alt='Restaurant' className='menu-card'/>
    </section>
  );
};

export default AboutSection;