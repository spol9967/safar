import React, { Component } from 'react';
import SectionHeading from './SectionHeading';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { db, auth } from '../config/fbConfig'
import Modal from 'react-modal';
import Popup from './Popup';


class Bookcar extends Component {
    state = {
        cars: null,
        carName: null,
        id: 0,
        subtitle: 0,
        modalIsOpen: false,
        setIsOpen: false,
        startDate: new Date(),
        time: '10:00'
    }

    componentDidMount() {
        //console.log("hii");
        db.collection('cars')
            .get()
            .then(snapshot => {
                const cars = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    cars.push(data)
                })
                console.log(cars);
                this.setState({ cars: cars })
            })
            .catch(error => console.log(error))
    }

    ModelOpen = (e) => {
        var stateID = e.target.getAttribute("data-id")
        var carName = e.target.getAttribute("data-carName")
        this.setState({ id: stateID })
        this.setState({ carName: carName })
        this.setState({ setIsOpen: true })
        this.setState({ modalIsOpen: true })
    }
    closeModal = () => {
        this.setState({ setIsOpen: false })
        this.setState({ modalIsOpen: false })
    }

    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '80%'
            }
        };
        const options = {
            items: 3,
            nav: true,
            loop: true,
            rewind: true,
            autoplay: true,
            margin: 10,
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
            <section className="book-Your-Car" id="bookCar">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="bookcarpopup-modal"
                >
                    <Popup id={this.state.id} carName={this.state.carName} closeModal={this.closeModal}/>
                </Modal>
                <div className="container">
                    <SectionHeading heading="Book Your Car" shape="/images/Shape1.png" subheadingColor="#8D8D8D" subheading="OUR SMILES" sectionColor="#1A1A1B" align="text-center" />
                    <div className="row">
                        {this.state.cars ? 
                            <OwlCarousel {...options}>
                                {
                                    this.state.cars && this.state.cars.map(data => (
                                        <div className="item col-10 col-sm-8 mx-auto col-md-12 col-lg-12 mb-4 d-flex" key={data.id}>
                                            <div className="car-grid-wrapper  flex-column justify-content-between">
                                                <div className="car-date-wrapper">
                                                    <h6 className="text-center">
                                                        <span>{data.date}</span>
                                                    </h6>
                                                </div>
                                                <div className="car-image-wrapper">
                                                    <img src={data.carImage} alt={data.carName} className="img-fluid w-100" />
                                                </div>
                                                <div className="car-info-wrapper">
                                                    <div className="car-model-year">
                                                        <h4 className="d-flex justify-content-between">
                                                            <span className="car-name">{data.carName}</span>
                                                            <span className="car-year">{data.carYearModel}</span>
                                                        </h4>
                                                    </div>
                                                    <div className="car-seater">
                                                        <div className="car-facility-icon">
                                                            <img src={process.env.PUBLIC_URL + '/images/overturned-vehicle.png'} className="img-fluid" alt="seat icon" />
                                                        </div>
                                                        <h6 className="d-inline seats">{data.seats}</h6>
                                                    </div>
                                                    <div className="car-facilities d-flex">
                                                        <div className="car-facility-icon align-self-center">
                                                            <img src={process.env.PUBLIC_URL + '/images/lines.png'} className="img-fluid" alt={data.facilityIcon} />
                                                        </div>
                                                        <ul className="list-inline facility-lists d-inline mb-0 pl-3">
                                                            <li className="d-inline-flex">{data.facility.airBags}</li>
                                                            <li className="d-inline-flex">{data.facility.locking}</li>
                                                            <li className="d-inline-flex">{data.facility.music}</li>
                                                            <li className="d-inline-flex">{data.facility.window}</li>
                                                            <li className="d-inline-flex">{data.facility.ac}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="car-rate d-flex">
                                                        <div className="car-facility-icon">
                                                            <img src={data.kilpMeterIcon} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="rate align-self-center">
                                                            <p className="mb-0">{data.ratePerKiloMeter}</p>
                                                        </div>
                                                    </div>
                                                    <div className="book-now-button">
                                                        <button className="d-flex text-center align-items-center justify-content-center" data-id={data.id} data-carName={data.carName} onClick={this.ModelOpen}>
                                                            Book Now 
                                                            <span className="book-arrow"><img src={process.env.PUBLIC_URL + "/images/Path.png"} alt=""/></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </OwlCarousel>
                        : ''   }
                    </div>
                </div>
            </section>
        )
    }
}
export default Bookcar
