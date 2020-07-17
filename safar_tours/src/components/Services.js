import React from 'react';
import SectionHeading from './SectionHeading';

const Services = () => {
    return (
        <div className="container">
            <div className="services-container">
                <div className="row">
                    <div className="col-md-3">
                        {
                            //<p className="discover-text">DISCOVER</p>
                            //<h4 className="services-heading">Our Hot Services</h4>
                        }
                        <SectionHeading heading="Our Hot Services" shape="/images/Shape1.png" subheadingColor="#8D8D8D" subheading="DISCOVER" sectionColor="#1A1A1B" align="text-center text-md-left"/>
                        <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 second-row">
                                <div className="services-box">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-1.jpg"} alt="Mumbai Darshan" />
                                    <div className="service-container">
                                        <div className="content">
                                            <button className="service-btn">BOOK NOW</button>
                                        </div>
                                    </div> 
                                </div>
                                <h5 className="service-sub-heading">Mumbai Darshan</h5>
                                <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className="col-lg-4 col-md-6 second-row">
                                <div className="services-box">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-2.jpg"} alt="Agra" />
                                    <div className="service-container">
                                        <div className="content">
                                            <button className="service-btn">BOOK NOW</button>
                                        </div>
                                    </div> 
                                </div>
                                <h5 className="service-sub-heading">Agra</h5>
                                <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className="col-lg-4 col-md-6 second-row">
                                <div className="services-box">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-3.jpg"} alt="Family Trip Planner" />
                                    <div className="service-container">
                                        <div className="content">
                                            <button className="service-btn">BOOK NOW</button>
                                        </div>
                                    </div> 
                                </div>
                                <h5 className="service-sub-heading">Family Trip Planner</h5>
                                <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 second-row">
                                <div className="services-box">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-4.jpg"} alt="Pratapgad Fort" />
                                    <div className="service-container">
                                        <div className="content">
                                        <button className="service-btn">BOOK NOW</button>
                                        </div>
                                        </div> 
                                </div>
                                <h5 className="service-sub-heading">Pratapgad Fort</h5>
                                <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className="col-lg-4 col-md-6 second-row">
                                <div className="services-box">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-5.jpg"} alt="Fire Camp" />
                                    <div className="service-container">
                                        <div className="content">
                                        <button className="service-btn">BOOK NOW</button>
                                        </div>
                                        </div> 
                                </div>
                                <h5 className="service-sub-heading">Fire Camp</h5>
                                <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className="col-lg-4 col-md-6 second-row">
                                <div className="services-box">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-6.jpg"} alt="Jejuri Temple" />
                                    <div className="service-container">
                                        <div className="content">
                                            <button className="service-btn">BOOK NOW</button>
                                        </div>
                                    </div> 
                                </div>
                                <h5 className="service-sub-heading">Jejuri Temple</h5>
                                <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="row">
                            
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Services
