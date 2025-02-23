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
                <li className="nav-item"><Link to ="#">Home</Link></li>
                <li className="nav-item"><Link to ="#about">About</Link></li>
                <li className="nav-item"><Link to ="#menu">Menu</Link></li>
                <li className="nav-item"><Link to ="#reservation">Reservation</Link></li>
                <li className="nav-item"><Link to ="#menu">Order Online</Link></li>
                <li className="nav-item"><Link to ="#login">Login</Link></li>
            </ul>
        </nav>
    )
}

