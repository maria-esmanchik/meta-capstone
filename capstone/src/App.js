import React from 'react';
import './style/App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HeroSection from './components/HeroSection.js';
import MenuSection from './components/MenuSection.js';
import Testimonials from './components/Testimonials.js';
import AboutSection from './components/AboutSection.js';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MenuSection />
      <Testimonials />
      <AboutSection />
      <Footer/>
    </>
  );
}

export default App;
