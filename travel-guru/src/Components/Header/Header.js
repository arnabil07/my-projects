import React from 'react';
import logo from '../../images/Logo.png';
import './Header.css';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg container">
                <a class="navbar-brand" href="/"><img  style={{width:'100px', filter:'contrast(0%) brightness(250%)'}} src={logo} alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <form class="form-inline my-2 my-lg-0">
                <input type="text" className="input-form" placeholder="Search Destination" />

                </form>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                        <a class="nav-link" href="/Home"> Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/News"> News <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/Destination"> Destination </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Blog"> Blog </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href="/Contact"> Contact </a>
                    </li>
                    <a href="/login" class="btn btn-warning" role="button"> Log in </a>
                </ul>

            </div>
    </nav>

    );
};

export default Header;