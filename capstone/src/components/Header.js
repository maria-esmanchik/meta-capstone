import React from "react";
import Logo from '../assets/Logo.svg';
import { Nav }  from "./Nav.js";
import '../style/Header.css';
function Header(){
    return(
        <header className = "header">
            <img src={Logo} alt="Logo" />
            <Nav />
        </header>
    );
}
export default Header;