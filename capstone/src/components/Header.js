import React from "react";
import Logo from '../assets/Logo.svg';
import { Nav }  from "./Nav.js";
import '../style/Header.css';
function Header(){
    return(
        <header className = "header">
            <img src={Logo} alt="Logo" className="logo-img"/>
            <Nav />
        </header>
    );
}
export default Header;