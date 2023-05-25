import React from "react";
import Logo from "../images/airbnb.png";


export default function Navbar() {
    return (
        <div>
            <nav>
                <img src={Logo} alt="logo"></img>
            </nav>
        </div>
    )
}