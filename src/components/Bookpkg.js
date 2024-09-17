import React, { Component } from 'react'
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { db } from '../config/fbConfig'
import $ from "jquery";

class Bookpkg extends Component {
    state = {
        subtitle: 0,
        modalIsOpen: false,
        setIsOpen: false,
        disable: "disable",
        formValues: {
            fname: "",
            lname: "",
            address: "",
            email: "",
            mobile: "",
            checkIn: null,
            checkOut: null,
            adultCount: "",
            childCount: "",
            carType: ""
        },
        formReady: false,
        img_arr: ["Client (1).jpg", "Client (2).jpg", "Client (3).jpg", "Client (4).jpg"],
        index: 0
    }

    handleChange = date => {
        const formValues = { ...this.state.formValues, checkIn: date }
        this.setState({ formValues })
        this.checkForm();
    };

    handleChange1 = date => {
        const formValues = { ...this.state.formValues, checkOut: date }
        this.setState({ formValues })
        this.checkForm();
    };

    openModal = () => {
        this.setState({ setIsOpen: true })
        this.setState({ modalIsOpen: true })
    }

    afterOpenModal = () => {
        $(".slider .display img").attr("src", "/images/review/" + this.state.img_arr[0])
        this.setState({ index: 1 })
        setInterval(
            () => {
                $(".slider .display img").attr("src", "/images/review/" + this.state.img_arr[this.state.index ])
                this.setState({ index: this.state.index  + 1 })
                if (this.state.index > 3) this.setState({ index: 0 })
            }, 3000
        )      
        
    }

    greyBox = () => {   
        if ($("#menu2").hasClass("active") && !$(".nav-link[href='#menu2']").parent(".nav-item").hasClass("active")){
            $(".nav-link[href='#menu2']").parent(".nav-item").addClass("active");
            $(".nav-link[href='#home']").parent(".nav-item").removeClass("active");
        }
        else{
            $(".nav-link[href='#menu2']").parent(".nav-item").removeClass("active");
        }
    }    

    displayImg = (e, n) => {      
        this.setState({ index: e.target.getAttribute("data-key") })
        $(".slider .display img").attr("src", "/images/review/" + this.state.img_arr[this.state.index ])
    }

    closeModal = () => {
        this.setState({ setIsOpen: false })
        this.setState({ modalIsOpen: false })
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    componentDidMount() {
    }

    getFormValue = e => {
        const formValues = { ...this.state.formValues, [e.target.name]: e.target.value }
        this.setState({ formValues })
        this.checkForm();
    }

    checkForm = () => {
        this.state.formValues.fname != "" &&
        this.state.formValues.lname != "" &&
        this.state.formValues.address != "" &&
        this.state.formValues.email != "" &&
        this.state.formValues.mobile != "" &&
        this.state.formValues.adultCount != "" &&
        this.state.formValues.childCount != "" &&
        this.state.formValues.checkIn != null &&
        this.state.formValues.checkOut != null &&
        this.state.formValues.carType != "" ? this.setState({ formReady: true }) : this.setState({ formReady: false });
    }

    handleBook = () => {      
        console.log("form submitted");
        db.collection('booktrip')
            .add(this.state.formValues)
            .then(this.closeModal)
            .catch(error => console.log(error))
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
                width: '80%',
                padding: 0
            }
        };


        return (
            <div id="Bookpkg">
                <button type="button" className="btn btn-info btn-lg" onClick={this.openModal}>Saya Book Now</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="BookPkgDiv">
                    <div className="container-fluid BookPkgDiv">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="slider">
                                    <div className="display d-flex justify-content-center">
                                        <div className="d-inline-flex">
                                            <img alt="Client image" className="custom-size-img" />
                                        </div>
                                    </div>
                                    <div className="navdot d-flex justify-content-between">
                                        <div className="d-inline-flex">
                                            <img src="/images/review/Client (1).jpg" alt="Client image" className="custom-size-img" data-key="0" onClick={this.displayImg} />
                                        
                                            <img src="/images/review/Client (2).jpg" alt="Client image" className="custom-size-img" data-key="1" onClick={this.displayImg} />
                                        
                                            <img src="/images/review/Client (3).jpg" alt="Client image" className="custom-size-img" data-key="2" onClick={this.displayImg} />
                                        
                                            <img src="/images/review/Client (4).jpg" alt="Client image" className="custom-size-img" data-key="3" onClick={this.displayImg} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button type="button" className="close" onClick={this.closeModal} >&times;</button>
                                <h4 className="book-drive">Saya BOOK YOUR DRIVE</h4>
 
                                <ul class="nav nav-tabs">
                                    <li class="nav-item mr-lg-3 active">
                                        <a class="nav-link active" data-toggle="tab" href="#home">Personal Details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" disabled={this.state.formReady ? "" : "disabled"} data-toggle="tab" href="#menu2">Payments</a>
                                    </li>
                                </ul>

                                <div class="tab-content">
                                    <div class="tab-pane active container" id="home">
                                        <form className="form-horizontal" action="">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row">
                                                        <input type="text" className="form-control" id="text" placeholder="First Name" name="fname" required onChange={this.getFormValue} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row">
                                                        <input type="text" className="form-control" id="text" placeholder="Last Name" name="lname" required onChange={this.getFormValue} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group form-row">
                                                        <input type="text" className="form-control" id="loc" placeholder="Address" name="address" required onChange={this.getFormValue} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row">
                                                        <input type="email" className="form-control" id="text" placeholder="E-mail" name="email" required onChange={this.getFormValue} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row">
                                                        <input type="text" className="form-control" id="text" placeholder="Phone" name="mobile" required onChange={this.getFormValue} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row d-flex align-items-center">
                                                        <div className="col-xl-5 col-lg-12 col-md-12">
                                                            <label className="mb-0">Check In</label>
                                                        </div>
                                                        <div className="col-xl-7 col-lg-12 col-md-12 pickup1">
                                                            <DatePicker className="form-control" placeholderText="MM/DD/YYYY"
                                                                selected={this.state.formValues.checkIn}
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row d-flex align-items-center">
                                                        <div className="col-xl-5 col-lg-12 col-md-12">
                                                            <label className="mb-0">Check Out</label>
                                                        </div>
                                                        <div className="col-xl-7 col-lg-12 col-md-12 pickup1 custom-datepicker">
                                                            <DatePicker className="form-control" placeholderText="MM/DD/YYYY"
                                                                selected={this.state.formValues.checkOut}
                                                                onChange={this.handleChange1}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row">
                                                        <select name="adultCount" class="custom-select" onChange={this.getFormValue}>
                                                            <option selected value="">Adults</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row">
                                                        <select name="childCount" class="custom-select" onChange={this.getFormValue}>
                                                            <option selected value="">Childern</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group form-row">
                                                        <select name="carType" class="custom-select" onChange={this.getFormValue}>
                                                            <option selected value="">Car-Type</option>
                                                            <option value="4" className="d-flex align-items-end">4 seater <i class="fab fa-car-side"></i></option>
                                                            <option value="6" className="d-flex align-items-end">6 seater <i class="fab fa-car-side"></i></option>
                                                            <option value="7" className="d-flex align-items-end">7 seater <i class="fab fa-car-side"></i></option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <button className="grey-box" disabled={this.state.formReady ? "" : "disabled"} onClick={this.greyBox} data-toggle="tab" href="#menu2">
                                                        <p>
                                                            Go ahead select your hotel and book the tour with <span>Safar tours and travels</span>
                                                        </p>
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                    <div class="tab-pane container" id="menu2">
                                        <div class="payment-div text-center">
                                            <img src="../../images/gpay-logo.jpg" class="d-block m-auto" alt="" />
                                            <label className="d-block">or</label>
                                            <div className="grey-bg">
                                                <p>Please connect for more help :</p>
                                                <a href="tel:9876543210" title="9876543210">9876543210</a>
                                            </div>
                                            <button className="book-btn text-light" disabled={this.state.formReady ? "" : "disabled"} onClick={this.handleBook} >BOOK</button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>


                </Modal>
            </div>
        )
    }
}


export default Bookpkg
