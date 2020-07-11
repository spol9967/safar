import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Packages = () => {
    return (
        <section class="packages-section">
            <div className="container">
                <div className="row">
                    <div className="packages-header text-center w-100">
                        <h4>WE OFFER</h4>
                        <h4>Popular Tour Package</h4>
                    </div>

                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        nav>

                        <div className="item">
                            <div className="pkg-card">
                                <div className="pkg-img">
                                    <img src={process.env.PUBLIC_URL + "/images/banner-bg.jpg"} alt="card img" />
                                    <label className="img-label">Honeymoon</label>
                                </div>

                                <div className="pkg-content">
                                    <p className="pkg-price">$255/person</p>
                                    <p className="pkg-name">Blue Beauty of Greece</p>
                                    <p className="pkg-duration">5 Days/ 5 Night</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Packages
