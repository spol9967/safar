import React, { Component }  from 'react';
import SectionHeading from './SectionHeading';
import {db, auth} from '../config/fbConfig'
class Bookcar extends Component{
    state = {cars: null}

    componentDidMount(){
        //console.log("hii");
        db.collection('cars')
            .get()
            .then( snapshot =>{
                    const cars = [];
                    snapshot.forEach(doc =>{
                        const data = doc.data();
                        cars.push(data)
                    })
                //console.log(cars);
                this.setState({cars: cars})
            })
            .catch(error => console.log(error))
    }

    render(){ 
        return (
            <section className="book-Your-Car">
                <div className="container">
                    <SectionHeading heading="Book Your Car" shape="/images/Shape1.png" subheadingColor="#8D8D8D" subheading="OUR SMILES" sectionColor="#1A1A1B" align="text-center"/>
                    <div className="row">
                        {
                            this.state.cars && this.state.cars.map(data => (
                                <div className="col-10 col-sm-8 mx-auto col-md-6 col-lg-3 mb-4 mb-lg-0" key={data.id}>
                                    <div className="car-grid-wrapper">
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
                                                    <img src={data.seatIcon} className="img-fluid" alt=""/>
                                                </div>
                                                <h6 className="d-inline seats">{data.seats}</h6>
                                            </div>
                                            <div className="car-facilities d-flex">
                                                <div className="car-facility-icon align-self-center">
                                                    <img src={data.facilityIcon} className="img-fluid" alt={data.facilityIcon}/>
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
                                                    <img src={data.kilpMeterIcon} className="img-fluid" alt=""/>
                                                </div>
                                                <div className="rate align-self-center">
                                                    <p className="mb-0">{data.ratePerKiloMeter}</p>
                                                </div>
                                            </div>
                                            <div className="book-now-button">
                                                <a href="#" className="d-block text-center"><span>Book Now </span><span className="book-arrow"><img src={process.env.PUBLIC_URL + "/images/Path.png"} alt=""/></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default Bookcar
