import React from 'react';
import HeroImage from '../assets/restauranfood1.jpg';
import '../style/HeroSection.css';
import { Link, NavLink, useLocation } from "react-router-dom";

const HeroSection = ({onReserve}) => {
  return (
    <section className="hero-section reservation-section">
      <article>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <NavLink to="/reservation">
        <button className='reserveTabele-btn' onClick={onReserve}>Reserve a Table</button>
        </NavLink>
      </article>
      <img src={HeroImage} alt='HeroImage' className='article-image'/>
    </section>
  );
};

export default HeroSection;
