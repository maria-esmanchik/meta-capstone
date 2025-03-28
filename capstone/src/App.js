import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import './style/App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HeroSection from './components/HeroSection.js';
import MenuSection from './components/MenuSection.js';
import Testimonials from './components/Testimonials.js';
import AboutSection from './components/AboutSection.js';
import Content from './components/Content.js';


function App() {
  // const [number, setNumber] = React.useState(1);
  // function increment() {
  //   setNumber((prevNumber) => prevNumber + 1);
  // }

  const [reservationMade, setReservationMade] = useState(0);

  const handleReservation = () => {
    setReservationMade(1);
  };
  // const reservation = document.location.href.endsWith('reservation');
  // console.log('reservation=', reservation);
  return (
    <Router>
      <Header />
      <HeroSection onReserve={handleReservation} />
      <Content reservationMade={reservationMade} setReservationMade={setReservationMade} />
      <MenuSection />
      <Testimonials />
      <AboutSection />
      <Footer/>
    </Router>
  );
};

export default App;
