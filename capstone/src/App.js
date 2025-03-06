import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import './style/App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HeroSection from './components/HeroSection.js';
import MenuSection from './components/MenuSection.js';
import Testimonials from './components/Testimonials.js';
import AboutSection from './components/AboutSection.js';
import { Nav } from './components/Nav.js';
import Content from './components/Content.js';
import ReservationForm from './components/ReservationForm.js';

// function Content(props) {
//   if (props && props.reservation)
//     return <ReservationForm></ReservationForm>
//   return <>
//       <HeroSection />
//       <MenuSection />
//       <Testimonials />
//       <AboutSection />
//   </>
// }


function App() {
  const [reservationMade, setReservationMade] = useState(false);

  const handleReservation = () => {
    setReservationMade(true);
  };
  // const reservation = document.location.href.endsWith('reservation');
  // console.log('reservation=', reservation);
  return (
    <Router>
      <Header />
      <HeroSection onReserve={handleReservation} />
      <Content reservationMade={reservationMade} />
      <MenuSection />
      <Testimonials />
      <AboutSection />
      <Footer/>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="/reservation" element={<Nav />}></Route>
        {/* <Route path="/About" element={<AboutSection />}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
