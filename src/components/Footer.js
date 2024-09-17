import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="main-footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="footer-logo-wrapper text-center text-md-left">
                                <img src={process.env.PUBLIC_URL + '/images/ftrLogo.png'} className="img-fluid" alt="LOGO"/>
                            </div>
                            <p className="business-info">
                                R-3/507 Satnford, Panvelkar Estate, <br/>Badalpur(E), Maharashtra - 421503  
                            </p>
                            <ul className="list-inline d-flex social-links">
                                <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/twitter.svg'} alt="twitter Icon"/></Link></li>
                                <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Pinterest.svg'} alt="pinterest Icon" /></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h4 className="footer-grid-heading">QUICK LINKS</h4>
                            <ul className="footer-menu-links">
                                <li>
                                    <Link to="/" className="footer-quick-linkd">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/" className="footer-quick-linkd">ABOUT US</Link>
                                </li>
                                <li>
                                    <Link to="/" className="footer-quick-linkd">CITY GUIDE</Link>
                                </li>
                                <li>
                                    <Link to="/" className="footer-quick-linkd">BLOG</Link>
                                </li>
                                <li>
                                    <Link to="/" className="footer-quick-linkd">FAQ's</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h4 className="footer-grid-heading">CONTACT US</h4>
                            <p className="business-info">
                                Feel free to get in touch with us via phone or send
                                us a message
                            </p>
                            <ul className="list-inline">
                                <li className="d-sm-flex justify-content-between mb-2 flex-md-column flex-lg-row">
                                    <div className="mb-3 mb-sm-0">
                                        <p className="contact-name">Suraj Thorat</p>
                                        <a href="tel:+917028196267" className="contact-links" >+91 70281 96267</a>
                                        <a href="tel:+919324171201" className="contact-links" >+91 93241 71201</a>
                                    </div>
                                    <div className="pl-1">
                                        <p className="contact-name">Rupesh Dhobale</p>
                                        <a href="tel:+919697982315" className="contact-links" >+91 96979 82315</a>
                                        <a href="tel:+919503456481" className="contact-links" >+91 95034 56481</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="mailto:email@website.com" className="contact-links" >email@website.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-footer">
                <div className="container-md">
                    <div className="row">
                        <div className="col-md-6 text-md-left text-center">
                            <p>&copy; Copyright 2020 .All rights Reserved</p>
                        </div>
                        <div className="col-md-6 text-md-right text-center" >
                            <ul className="list-inline d-flex justify-content-center justify-content-md-end">
                                <li>
                                    <Link to="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
