import React from 'react'
import SectionHeading from './SectionHeading';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    return (
        <section className="book-Your-Car">
            <div className="container">
                <div>
                    <SectionHeading heading="Happy Travelers" subheading="OUR SMILES" sectionColor="#1A1A1B" />
                    
                    <div className="row">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        nav>
                        <div className="item">
                            <div className="test-card">
                                    <img src={process.env.PUBLIC_URL + "/images/test-1.jpg"} alt="test 1" className="t-1 img-responsive" />
                                <div className="test-content">
                                    <p className="test-name">Jimmy Dean</p>
                                    <p className="test-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry of the printing and typesetting industry. </p>
                                    <img src={process.env.PUBLIC_URL + "/images/quotes.png"} alt="" className="img-responsive quotes" />
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

                </div>
            </div>
            
        </section>
    )
}

export default Testimonial
