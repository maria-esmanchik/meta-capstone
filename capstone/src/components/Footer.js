import React from "react";
import Logo from '../assets/Logo.svg';
import { Nav, NavForFooter } from './Nav.js';



function Footer (){
    return(
        <footer>
            <img src={Logo} alt="Logo" />
            <NavForFooter />
        </footer>
    )
}

export default Footer;