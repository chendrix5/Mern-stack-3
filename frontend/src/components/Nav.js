import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

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
                       <a class="nav-link inactive" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link inactive" aria-current="page" href="#">LEAVE A REVIEW</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link inactive" aria-current="page" href="#">LOGIN</a>
                 </li>
             </ul>
        </div>
        </div>
        </nav>
       )
}

export default Nav;