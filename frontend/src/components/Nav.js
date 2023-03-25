import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Nav() {

       return (
        <nav>
            <ul>
                <li>
                    <a href="home.js">Home</a>
                </li>
                <li>
                    <a href="Reviews.js">Reviews</a>
                </li>
                <li>
                    <a href="Reviews.js">User</a>
                </li>
            </ul>
        </nav>
       ) 

}

export default Nav;