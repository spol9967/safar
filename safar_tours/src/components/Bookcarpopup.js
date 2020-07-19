import React, { Component } from 'react'
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

// var subtitle;
// const [modalIsOpen, setIsOpen] = React.useState(false);


class Bookcarpopup extends Component {
    state = {
        subtitle: 0,
        modalIsOpen: false,
        setIsOpen: false,
        startDate: new Date(),
        time: '10:00'
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    onChange = time => this.setState({ time })

    openModal = () => {
        this.setState({ setIsOpen: true })
        this.setState({ modalIsOpen: true })
    }
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    }

    closeModal = () => {
        this.setState({ setIsOpen: false })
        this.setState({ modalIsOpen: false })
    }
    componentWillMount() {
        Modal.setAppElement('body');
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

        return (
            <div id="bookcarpopup">
                <button type="button" className="btn btn-info btn-lg" onClick={this.openModal}>Book Now</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-4">
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
                            <div className="col-sm-8 align-self-center">
                                <button type="button" className="close" onClick={this.closeModal} >&times;</button>
                                <h4 className="book-drive">BOOK YOUR DRIVE</h4>
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlfor="name">Name:</label>
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
                                                <label className="control-label col-sm-3" htmlfor="text">Phone No:</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" id="text" placeholder="987654310" name="text" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlfor="loc">Location:</label>
                                                <div className="col-sm-9">
                                                    <input type="loc" className="form-control" id="loc" placeholder="Your Location" name="loc" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlfor="loc">Passenger No:</label>
                                                <div className="col-sm-9">
                                                    <input type="number" className="form-control" id="number" placeholder="0" name="number" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group form-row">
                                                <label className="control-label col-sm-3" htmlfor="loc">Pick-Up Date:</label>
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
                                                <label className="control-label col-sm-3" htmlfor="loc">Drop-Off Date:</label>
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


                </Modal>
            </div>
        )
    }
}


export default Bookcarpopup
