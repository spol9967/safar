import React, { Component } from 'react'
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from "jquery";

class Bookpkg extends Component {
    state = {
        subtitle: 0,
        modalIsOpen: false,
        setIsOpen: false
    }

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

    componentDidMount() {
        // jQuery
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

        const slider_options = {
            video:true,
            startPosition: 0,
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:6000,
            autoplayHoverPause:false,
            nav: true,
            dots: true
        }

        return (
            <div id="Bookpkg">
                <button type="button" className="btn btn-info btn-lg" onClick={this.openModal}>Saya Book Now</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <div className="container-fluid BookPkgDiv">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="slider">
                                    <OwlCarousel className="owl-theme" {...slider_options}>
                                        <div className="item">
                                            <div className="test-card">
                                                <img src="/images/review/Client (1).jpg" alt="Client image" className="t-1 img-responsive custom-size-img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="test-card">
                                                <img src="/images/review/Client (2).jpg" alt="Client image" className="t-1 img-responsive custom-size-img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="test-card">
                                                <img src="/images/review/Client (3).jpg" alt="Client image" className="t-1 img-responsive custom-size-img" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="test-card">
                                                <img src="/images/review/Client (4).jpg" alt="Client image" className="t-1 img-responsive custom-size-img" />
                                            </div>
                                        </div>
                                    </OwlCarousel>

                                </div>
                            </div>
                            <div className="col-sm-6 align-self-center">
                                <button type="button" className="close" onClick={this.closeModal} >&times;</button>
                                <h4 className="book-drive">Saya BOOK YOUR DRIVE</h4>
                                <form className="form-horizontal" action="">
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


export default Bookpkg
