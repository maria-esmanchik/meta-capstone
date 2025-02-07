import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './style/App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HeroSection from './components/HeroSection.js';
import MenuSection from './components/MenuSection.js';
import Testimonials from './components/Testimonials.js';
import AboutSection from './components/AboutSection.js';
import { Nav } from './components/Nav.js';

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <MenuSection />
      <Testimonials />
      <AboutSection />
      <Footer/>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="/Reservation" element={<Nav />}></Route>
        {/* <Route path="/About" element={<AboutSection />}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
