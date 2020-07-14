import React from 'react';

const dashboard = () => {
    return (
        <div className="dashboard">
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav dashbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">BOOK CAR</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">HOLIDAYS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">INFO</a>
                    </li>
                </ul>
                {/* <ul className="navbar-nav search-icon position-absolute">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="/images/ico_search.svg" alt="" /></a>
                    </li>
                </ul> */}
            </nav>
            <div className="title text-light text-center position-relative">
                <img src="/images/kite.png" alt="kite bird" className="kite-logo position-relative" />
                <h1>safar</h1>
                <h4>tours and travels</h4>
                <h6>Car-Holiday-Tour-Booking-Trip-Hotels-Travel</h6>
            </div>
            <div className="bottom container mt-5">
                <div className="row">
                    <div className="col-6 key-location ">
                        <div className="bg d-inline-block"></div>
                        <div className="d-inline-block align-top pt-3">
                            <div className="text-uppercase popin text-light-2">Matheran hill station</div>
                            <div className="text-uppercase text-light playfair">matheran magic</div>
                            <div className="sub-title popin text-light-2">Cutest little hill-station of India</div>
                            <div className="plus"></div>
                        </div>
                    </div>
                    <div className="col-6 ofiice-details">
                        <div>
                            <div className="playfair text-light text-right">Pune</div>
                            <div className="sub-title popin text-light-2 text-right">Sexten Dolomites,<br></br> Elevation2,999 m (9,839 ft)</div>
                            <div className="social-icon text-right">
                                <div className="text-light d-inline">P</div>
                                <div className="text-light d-inline">T</div>
                                <div className="text-light d-inline">F</div>
                            </div>
                        </div>
                        <div className="map"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard
