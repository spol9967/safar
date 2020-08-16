import React from 'react';
import { CountUp } from 'use-count-up';





const Counts = () => {
    return (
        <div className="counter-section">
            <div className="container">
                <div className="row">
                <div className="col-sm-3 col-6">
                <div className="numbs">
                <img src="./images/Layer 3.svg"/>
                <div className="value"><CountUp isCounting end={120859} duration={3.2} thousandsSeparator="," /></div>
                <p>HAPPY TRAVELLERS</p>
                </div>
                </div>

                <div className="col-sm-3 col-6">
                <div className="numbs">
                <img src="./images/Layer 4.svg"/>
                <div className="value"><CountUp isCounting end={2594} duration={3.2} thousandsSeparator="," /></div>
                <p>SATISFIED TOURS</p>
                </div>
                </div>

                <div className="col-sm-3 col-6">
                <div className="numbs">
                <img src="./images/Layer 5.svg"/>
                <div className="value"><CountUp isCounting end={854} duration={3.2} thousandsSeparator="," /></div>
                <p>DESTINATION</p>
                </div>
                </div>

                <div className="col-sm-3 col-6">
                <div className="numbs">
                <img src="./images/Rounded Rectangle 1 copy 2.svg"/>
                <div className="value"><CountUp isCounting end={978} duration={3.2} thousandsSeparator="," /></div>
                <p>HOTELS RESORT</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Counts
