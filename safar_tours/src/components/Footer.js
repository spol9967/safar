import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="main-footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="footer-logo-wrapper text-center text-md-left">
                                <img src={process.env.PUBLIC_URL + '/images/ftrLogo.png'} className="img-fluid" alt="" srcset=""/>
                            </div>
                            <p className="business-info">
                                Fusce dapibus, tellus ac cursus commodo,
                                tortor mauris. Fusce dapibus, tellus ac cursus 
                                commodo, tortor mauris. 
                            </p>
                            <ul className="list-inline d-flex social-links">
                                <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/twitter.svg'} /></a></li>
                                <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/Pinterest.svg'} /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h4 className="footer-grid-heading">QUICK LINKS</h4>
                            <ul className="footer-menu-links">
                                <li>
                                    <a href="#" className="footer-quick-linkd">HOME</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-quick-linkd">ABOUT US</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-quick-linkd">CITY GUIDE</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-quick-linkd">BLOG</a>
                                </li>
                                <li>
                                    <a href="#" className="footer-quick-linkd">FAQ's</a>
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
                                <li>
                                    <a href="tel:+18001232134" className="contact-links" >+1 800 123 1234</a>
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
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Conditions</a>
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
