import { useState } from "react";

export default function Navbar(){
    return(
        <div className="navbar-container">
            <div className="logo-wrapper"><h1>ARCE</h1></div>
            <div className="links-wrapper">
                <a href="/">Counter</a>
            </div>
        </div>
    )
};