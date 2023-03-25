import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Nav() {

       return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Reviews">Reviews</Link>
                </li>
            </ul>
        </nav>
       ) 

}

export default Nav;