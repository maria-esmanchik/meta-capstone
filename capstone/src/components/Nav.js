import React from "react";

export function Nav (){
    return(
        <nav className="navbat">
            <ul className="nav-link">
                <li className="nav-item"><a href ="#Home">Home</a></li>
                <li className="nav-item"><a href ="#About">About</a></li>
                <li className="nav-item"><a href ="#Menu">Menu</a></li>
                <li className="nav-item"><a href ="#Reservations">Reservations</a></li>
                <li className="nav-item"><a href ="#Order Online">Order Online</a></li>
                <li className="nav-item"><a href ="#Login">Login</a></li>
            </ul>
        </nav>
    )
}

export function NavForFooter () {
    return (
        <>
            <ul>
                <li><a href ="Home">Home</a></li>
                <li><a href ="About">About</a></li>
                <li><a href ="Menu">Menu</a></li>
                <li><a href ="Reservations">Reservations</a></li>
                <li><a href ="Order Online">Order Online</a></li>
                <li><a href ="Login">Login</a></li>
            </ul>
            <ul>
                <li>Contact information</li>
                <li><a href="Adress">Adress</a></li>
                <li><a href="Contact number">Contact number</a></li>
                <li><a href="Email">Email</a></li>
            </ul>
            <ul>
                <li>Social media</li>
                <li><a href="link">Link</a></li>
                <li><a href="link">Link</a></li>
                <li><a href="link">Link</a></li>
            </ul>
        </>
    );
}

