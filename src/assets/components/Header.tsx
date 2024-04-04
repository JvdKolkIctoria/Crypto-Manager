import { useEffect, useState } from "react";
import { Route, Routes, Link, Router } from "react-router-dom";
import AboutMe from "./AboutMe";

function Header(){


    return(
        <>
       
            <header className="headerContainer">
                <ul>
               
                    <li> <Link to="/">Home</Link></li>
                <li> <Link to="/AboutMe">About Us</Link></li>
                     <li><div className="inlogImageCointer"><img src="../images/login-xxl.png" alt="Inlog Image" /></div></li>
                 </ul>
                </header>
              
    
        </>
    );
}



export default Header;