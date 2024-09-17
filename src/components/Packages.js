import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { db, auth } from '../config/fbConfig'

class Packages extends Component {
    state = { packages: [] }

    componentDidMount() {
        //console.log("hii");
        db.collection('packages')
            .get()
            .then(snapshot => {
                const packages = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    packages.push(data)
                })
                //console.log(packages);
                this.setState({ packages: packages })
            })
            .catch(error => console.log(error))
    }

    render() {

        const options = {
            items: 3,
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
        };


        return (
            <section className="packages-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Background.png'})` }}>
                <div className="container">
                    <SectionHeading heading="Popular Tour Package" shape="/images/Shape1.png" subheadingColor="#8D8D8D" subheading="WE OFFER" sectionColor="#1A1A1B" align="text-center" />
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            {this.state.packages.length > 0 ?
                                <OwlCarousel
                                    className="owl-theme" {...options}>
                                    {
                                        this.state.packages && this.state.packages.map(pData => (
                                            <div className="item col-lg-12 col-md-12 col-10 mx-auto" key={pData.id}>
                                                <div className="pkg-card">
                                                    <div className="pkg-img">
                                                        <img src="./images/pkg2.png" alt={pData.pakagePlace} className="img-fluid" />
                                                        <label className="img-label">{pData.pakageTag}</label>
                                                    </div>
                                                    <div className="pkg-content">
                                                        <p className="pkg-price text-dark">{pData.pakagePricing}</p>
                                                        <p className="pkg-name text-dark">{pData.pakagePlace}</p>
                                                        <p className="pkg-duration text-dark">{pData.pakadeDay}</p>
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
                </div>
            </section>
        )
    }
}




export default Packages
