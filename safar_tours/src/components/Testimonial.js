import React, { Component } from 'react'
import SectionHeading from './SectionHeading';
import { db, auth } from '../config/fbConfig'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Testimonial extends Component {
    state = { review: [] }

    componentDidMount() {
        //console.log("hii");
        db.collection('review')
            .get()
            .then(snapshot => {
                const review = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    review.push(data)
                })
                console.log(review);
                this.setState({ review: review })

            })
            .catch(error => console.log(error))
    }

    render() {
        const options = {
            items: this.state.review.length,
            nav: true,
            loop: true,
            rewind: true,
            autoplay: true,
            margin: 20,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }
        return (
            <section className="testimonial">
                <div className="container">
                    <div>
                        <SectionHeading heading="Happy Travelers" shape="/images/Shape1.png" subheadingColor="#8D8D8D" subheading="OUR SMILES" sectionColor="#1A1A1B" align="text-center" />
                        <div className="row">
                            {this.state.review.length > 0 ?
                                <OwlCarousel
                                    className="owl-theme" {...options}>
                                    {
                                        this.state.review && this.state.review.map(data => (
                                            <div className="item" key={data.id}>
                                                <div className="test-card">
                                                    <img src={process.env.PUBLIC_URL + "/images/review/"+data.name+".jpg"} alt="Client image" className="t-1 img-responsive custom-size-img" />
                                                    <div className="test-content">
                                                        <p className="test-name">{data.name}</p>
                                                        <p className="test-para">{data.review}</p>
                                                        <img src={process.env.PUBLIC_URL + "/images/quotes.png"} alt="" className="img-responsive quotes" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </OwlCarousel>

                                : ""}

                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Testimonial
