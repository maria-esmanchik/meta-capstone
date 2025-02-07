import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.svg"

export function Nav (){
    return(
        <nav className="navbat">
            <ul className="nav-link">
                <li className="nav-item"><a href ="/">Home</a></li>
                <li className="nav-item"><Link to ="/About">About</Link></li>
                <li className="nav-item"><a href ="/Menu">Menu</a></li>
                <li className="nav-item"><a href ="/Reservation">Reservation</a></li>
                <li className="nav-item"><a href ="/Order Online">Order Online</a></li>
                <li className="nav-item"><a href ="/Login">Login</a></li>
            </ul>
        </nav>
    )
}

