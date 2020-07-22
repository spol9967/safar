import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

export class Popup extends Component {
    state = {
        startDate: new Date(),
        time: new Date()
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    onChange = time => this.setState({ time })

    render() {
        return (
            <div className="container-fluid bookcarpopup-modal">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="back-bg">
                            <section>
                                <h4>What We Provide You</h4>
                                <p>24x7 Cab Service Are Available</p>
                                <p>Online Booking Facility</p>
                                <p>GPS Tracking System</p>
                                <p>Credit Card Debit Card Facility</p>
                            </section>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 align-self-center">
                        <button type="button" className="close" onClick={this.props.closeModal} >&times;</button>
                        <h4 className="book-drive">BOOK YOUR DRIVE {this.props.id}</h4>
                        <form className="form-horizontal" action="/action_page.php">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group form-row">
                                        <label className="control-label col-sm-3" htmlFor="name">Name:</label>
                                        <div className="col-sm-9">
                                            <input type="name" className="form-control" id="name" placeholder="Enter Your Name" name="name"
                                                required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group form-row">
                                        <label className="control-label col-sm-3" htmlFor="text">Phone No:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="text" placeholder="987654310" name="text" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group form-row">
                                        <label className="control-label col-sm-3" htmlFor="loc">Location:</label>
                                        <div className="col-sm-9">
                                            <input type="loc" className="form-control" id="loc" placeholder="Your Location" name="loc" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group form-row">
                                        <label className="control-label col-sm-3" htmlFor="loc">Passenger No:</label>
                                        <div className="col-sm-9">
                                            <input type="number" className="form-control" id="number" placeholder="0" name="number" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group form-row">
                                        <label className="control-label col-sm-3" htmlFor="loc">Pick-Up Date:</label>
                                        <div className="col-sm-4 pickup1">
                                            <DatePicker className="form-control"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-3">
                                            <TimePicker className="border-0"
                                                onChange={this.onChange}
                                                value={this.state.time} clearIcon clockIcon
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group form-row">
                                        <label className="control-label col-sm-3" htmlFor="loc">Drop-Off Date:</label>
                                        <div className="col-sm-4 pickup1">
                                            <DatePicker className="form-control"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="col-sm-3">
                                            <TimePicker
                                                onChange={this.onChange}
                                                value={this.state.time} clearIcon clockIcon
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-default">BOOK NOW</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Popup
