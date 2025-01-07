import React from "react";
import Logo from '../assets/Logo.svg';
import { Nav, NavForFooter } from './Nav.js';



function Footer (){
    return(
        <footer className="footer">
            <img src={Logo} alt="Logo" className="footer-logo" />
            <NavForFooter />
        </footer>
    )
}

export default Footer;