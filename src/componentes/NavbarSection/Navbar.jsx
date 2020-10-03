import React from 'react';

const Navbar = () => {
    return(
        <>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="">
                <img src="images/Logo sonrisa feliz.png" width="%100" height="45" alt=""/>
                SONRISA FELIZ
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#bannerSection">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servicesSection">SERVICIOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutUsSection">QUIENES SOMOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#covidSection">CONTACTO</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );

};

export default Navbar;
