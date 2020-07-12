import React from 'react';

const Bookcar = () => {
    const carData = [
        {
            id:1,
            date : "Thursday 12 Dec 2019 - 15:10",
            carImage : "/images/Zest.png",
            carName : "Tata Zest",
            carYearModel: 2020,
            seatIcon : "/images/overturned-vehicle.png",
            seats : 7,
            facilityIcon : "/images/lines.png",
            kilpMeterIcon : "/images/lines.png",
            ratePerKiloMeter : "16₹/km",
            facility :{
                ac : "Air conditioning",
                window : "Electric Window",
                music : "Stereo",
                airBags : "Air Bags",
                locking : "Central Locking"
            }
        },
        {
            id:2,
            date : "Thursday 12 Dec 2019 - 15:10",
            carImage : "/images/Zest.png",
            carName : "Tata Zest",
            carYearModel: 2020,
            seatIcon : "/images/overturned-vehicle.png",
            seats : 7,
            facilityIcon : "/images/lines.png",
            kilpMeterIcon : "/images/lines.png",
            ratePerKiloMeter : "16₹/km",
            facility :{
                ac : "Air conditioning",
                window : "Electric Window",
                music : "Stereo",
                airBags : "Air Bags",
                locking : "Central Locking"
            }
        },
        {
            id:3,
            date : "Thursday 12 Dec 2019 - 15:10",
            carImage : "/images/Zest.png",
            carName : "Tata Zest",
            carYearModel: 2020,
            seatIcon : "/images/overturned-vehicle.png",
            seats : 7,
            facilityIcon : "/images/lines.png",
            kilpMeterIcon : "/images/lines.png",
            ratePerKiloMeter : "16₹/km",
            facility :{
                ac : "Air conditioning",
                window : "Electric Window",
                music : "Stereo",
                airBags : "Air Bags",
                locking : "Central Locking"
            }
        },
        {
            id:4,
            date : "Thursday 12 Dec 2019 - 15:10",
            carImage : "/images/Zest.png",
            carName : "Tata Zest",
            carYearModel: 2020,
            seatIcon : "/images/overturned-vehicle.png",
            seats : 7,
            facilityIcon : "/images/lines.png",
            kilpMeterIcon : "/images/lines.png",
            ratePerKiloMeter : "16₹/km",
            facility :{
                ac : "Air conditioning",
                window : "Electric Window",
                music : "Stereo",
                airBags : "Air Bags",
                locking : "Central Locking"
            }
        }
    ]
    return (
        <section className="book-Your-Car">
            <div className="container">
                <div className="section-heading-wrapper text-center mb-5">
                    <h4 className="sub-heading">OUR SMILES</h4>
                    <h2 className="section-heading">Book Your Car</h2>
                    <div className="section-heading-below-image">
                        <img src={process.env.PUBLIC_URL + '/images/Shape1.png'} alt="section Heading below image"/>
                    </div>
                </div>
                <div className="row">
                    {
                        carData.map(data => (
                            <div className="col-md-6 col-lg-3" key={data.id}>
                                <div className="car-grid-wrapper">
                                    <div className="car-date-wrapper">
                                        <h6 className="text-center">
                                            <span>{data.date}</span>
                                        </h6>
                                    </div>
                                    <div className="car-image-wrapper">
                                        <img src={data.carImage} alt={data.carName} className="img-fluid" />
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

export default Bookcar
