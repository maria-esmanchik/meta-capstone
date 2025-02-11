import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import Logo from "../assets/Logo.svg"

export function Nav (){
    const location = useLocation();
        useEffect(() => {
        const hash = location.hash;
        
        if (hash) {
            const selector = hash.toLowerCase().replace('#', '.') + '-section';
            const targetElement = document.querySelector(selector);
            console.log(selector, 'targetElement', targetElement);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
            }, [location]);
    return(
        <nav className="navbat">
            <ul className="nav-link">
                <li className="nav-item"><a href ="/">Home</a></li>
                <li className="nav-item"><Link to ="#about">About</Link></li>
                <li className="nav-item"><a href ="/Menu">Menu</a></li>
                <li className="nav-item"><a href ="#reservation">Reservation</a></li>
                <li className="nav-item"><a href ="/Order Online">Order Online</a></li>
                <li className="nav-item"><a href ="/Login">Login</a></li>
            </ul>
        </nav>
    )
}

