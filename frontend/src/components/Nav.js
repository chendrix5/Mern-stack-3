import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-bootstrap";

function Nav() {

       return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BOOTCAMP REVIEWS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                 </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                       <NavLink to="/">HOME</NavLink>
                </li>
                <li class="nav-item">
                        <NavLink to="./reviews">WRITE A REVIEW</NavLink>
                </li>
                <li class="nav-item">
                         <NavLink to='./reviews'>LOGIN</NavLink>
                 </li>
             </ul>
        </div>
        </div>
        </nav>
       )
}

export default Nav;