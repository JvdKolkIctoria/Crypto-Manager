import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

function Nav(){


    return(
        <header className="headerContainer">
            <ul>
                <li>
                    <form action="">
                        <span>
                            <img src="" alt="Search Image" />
                            <input type="text" placeholder="Search"/>   
                        </span> 
                    </form>
                </li>
                <li>Favorites</li>
                <li><div className="inlogImageCointer"><img src="../images/login-xxl.png" alt="Inlog Image" /></div></li>
            </ul>
        </header>
    );
}



export default Nav;