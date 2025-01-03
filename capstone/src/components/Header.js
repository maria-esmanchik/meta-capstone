import React from "react";
import Logo from '../assets/Logo.svg'
import { Nav }  from "./Nav.js";
function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo" />
            <Nav />
        </header>
    );
}
export default Header;