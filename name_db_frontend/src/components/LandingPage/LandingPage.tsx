import React from 'react';
import "./LandingPage.css"
import logo from "../../media/images/schabelprojects-logos/schabelprojects-logos_transparent.png"
import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <>
         <div className="overlay-bg">
             <img className="logo-img" src={logo} alt="default-img"/>
             <Link className="lnk-register" to="/register">Register Now</Link>
         </div>
        </>
    );
}

export default LandingPage;
