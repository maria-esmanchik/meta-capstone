import React from "react";
import Logo from '../assets/Asset 20@4x.png';
import '../style/Footer.css';

function Footer (){
    return(
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-nav">
          <div className="footer-logo">
            <img  src={Logo} alt="Logo" className="logo" />
          </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href ="Home">Home</a></li>
                <li><a href ="About">About</a></li>
                <li><a href ="Menu">Menu</a></li>
                <li><a href ="Reservations">Reservations</a></li>
                <li><a href ="Order Online">Order Online</a></li>
                <li><a href ="Login">Login</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact information</h4>
              <ul>
                <li><a href="Adress">Adress</a></li>
                <li><a href="Contact number">Contact number</a></li>
                <li><a href="Email">Email</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;