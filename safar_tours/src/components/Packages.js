import React from 'react';
import SectionHeading from './SectionHeading';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Packages = () => {
    const options = {
        items: 3,
        nav: true,
        loop:true,
        rewind: true,
        autoplay: true,
        margin:20,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    };
    const pakages = [
        {
            id:1,
            pakageImage:'./images/pkg1.png',
            pakageTag:'Honeymoon',
            pakagePricing : '$500/Couple',
            pakagePlace:'Blue Beauty of Greece',
            pakadeDay:'2N/3D'
        },
        {
            id:2,
            pakageImage:'./images/pkg2.png',
            pakageTag:'Honeymoon',
            pakagePricing : '$500/Couple',
            pakagePlace:'Blue Beauty of Greece',
            pakadeDay:'2N/3D'
        },
        {
            id:3,
            pakageImage:'./images/pkg3.png',
            pakageTag:'Honeymoon',
            pakagePricing : '$500/Couple',
            pakagePlace:'Blue Beauty of Greece',
            pakadeDay:'2N/3D'
        },
        {
            id:4,
            pakageImage:'./images/pkg3.png',
            pakageTag:'Holiday',
            pakagePricing : '$500/Couple',
            pakagePlace:'Blue Beauty of Greece',
            pakadeDay:'2N/3D'
        }
    ]
    return (
        <section className="packages-section" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/Background.png'})`}}>
            <div className="container">
                <SectionHeading heading="Popular Tour Package" shape="/images/Shape1.png" subheadingColor="#8D8D8D" subheading="WE OFFER" sectionColor="#1A1A1B" align="text-center"/>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <OwlCarousel className="owl-theme" {...options}>
                            {
                                pakages.map(pData =>(
                                    <div className="item" key={pData.id}>
                                        <div className="pkg-card">
                                            <div className="pkg-img">
                                                <img src={pData.pakageImage} alt={pData.pakagePlace} className="img-fluid" />
                                                <label className="img-label">{pData.pakageTag}</label>
                                            </div>
                                            <div className="pkg-content">
                                                <p className="pkg-price">{pData.pakagePricing}</p>
                                                <p className="pkg-name">{pData.pakagePlace}</p>
                                                <p className="pkg-duration">{pData.pakadeDay}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages
