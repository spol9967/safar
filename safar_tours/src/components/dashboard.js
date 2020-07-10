import React from 'react'

const dashboard = () => {
    return (
        <div className="dashboard">
            <div className="">
                <nav class="navbar navbar-expand-sm justify-content-center">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">BOOK CAR</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">HOLIDAYS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">SERVICES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">INFO</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav search-icon position-absolute">
                        <li class="nav-item">
                            <a class="nav-link" href="#">S</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="title text-light text-center position-relative">
            <img src="/images/kite.png" alt="kite bird image" className="kite-logo position-relative"/>
                <h1>SAFAR</h1>
                <h4>TOURS AND TRAVELS</h4>
                <h7>BLA BLA BLA BLA</h7>
            </div>
        </div>
    )
}

export default dashboard
