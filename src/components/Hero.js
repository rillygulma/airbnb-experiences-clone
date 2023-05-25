import React from "react";
import Grid from "../images/grid.png"

export default function Hero() {
    return(
        <section className="hero">
             <img src={Grid} alt="section" className="hero-photo"></img>

             <h1 className="hero-header">Online Experiences</h1>

             <p className="hero-text">Join unique interactive activies led by one-of-a-kind hosts-all without leaving home.</p>
        </section>

    )
}