import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import { Formik } from 'formik';
import { db } from '../config/fbConfig'


export class Popup extends Component {
    state = { time: new Date(), date: new Date(), name: "", number: "", loc: "", count: "", carName: "", bookText:"BOOK NOW" }

    handleChangeInputDate = e => this.setState({ date: e })
    handleChangeInputTime = e => this.setState({ time: e })
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
                        <h4 className="book-drive">BOOK YOUR DRIVE</h4>
                        <Formik
                            initialValues={{ time: this.state.time, name: "", number: "", loc: "", count: "", date: this.state.date, carName: this.props.carName }}
                            onSubmit={(values, { setSubmitting }) => {
                                
                                this.setState({ bookText: "Loading....." })
                                db.collection('booking')
                                    .add(values)
                                    .then(this.props.closeModal)
                                    .catch(error => console.log(error))
                            }}
                        >
                            {formik => (
                                <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlFor="name">Car Name:</label>
                                                <div className="col-sm-9">
                                                    <input type="name" disabled className="form-control" id="carName" value={this.props.carName} name="carName"
                                                        required {...formik.getFieldProps('carName')} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlFor="name">Name:</label>
                                                <div className="col-sm-9">
                                                    <input type="name" className="form-control" id="name" placeholder="Enter Your Name" name="name"
                                                        required {...formik.getFieldProps('name')} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlFor="number">Phone No:</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" id="number" placeholder="987654310" name="number"
                                                        required {...formik.getFieldProps('number')} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlFor="loc">Location:</label>
                                                <div className="col-sm-9">
                                                    <input type="loc" className="form-control" id="loc" placeholder="Your Location" name="loc"
                                                        required {...formik.getFieldProps('loc')} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlFor="count">Passenger No:</label>
                                                <div className="col-sm-9">
                                                    <input type="number" className="form-control" id="count" placeholder="0" name="count"
                                                        required {...formik.getFieldProps('count')} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlFor="date">Pick-Up Date:</label>
                                                <div className="col-sm-4 pickup1">
                                                    <DatePicker className="form-control"
                                                        selected={this.state.date}
                                                        value={this.state.date}
                                                        onChange={this.handleChangeInputDate}
                                                        name="date"
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    <TimePicker className="border-0"
                                                        onChange={this.handleChangeInputTime}
                                                        value={this.state.time} clearIcon clockIcon
                                                        name="time"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" disabled={this.state.bookText=="Loading....."? "disabled": ""} className="btn btn-default">{this.state.bookText}</button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>
        )
    }
}

export default Popup
