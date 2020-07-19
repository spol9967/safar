<<<<<<< HEAD
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

=======
import React from 'react'

const Bookcarpopup = () => {
    return (
        <div className="">
           <div className="container-fluid">
    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Book Now</button>
    <div className="modal fade desk" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
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
              <div className="col-sm-8">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
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
                          <input type="text" className="form-control" id="text" placeholder="987654310" name="text" required/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group form-row">
                        <label className="control-label col-sm-3" htmlfor="loc">Location:</label>
                        <div className="col-sm-9">
                          <input type="loc" className="form-control" id="loc" placeholder="Your Location" name="loc" required/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group form-row">
                        <label className="control-label col-sm-3" htmlfor="loc">Passenger No:</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" id="number" placeholder="0" name="number" required/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group form-row">
                        <label className="control-label col-sm-3" htmlfor="loc">Pick-Up Date:</label>
                        <div className="col-sm-9">
                          <input type="pick-up-date" className="form-control pickup" id="pick-up-date"
                          placeholder="pick-up-date" name="pick-up-date" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group form-row">
                        <label className="control-label col-sm-3" htmlfor="loc">Drop-Off Date:</label>
                        <div className="col-sm-6 pickup1">
                          <input type="drop-off-date" className="form-control pickup" id="drop-off-date"
                          placeholder="drop-off-date" name="drop-off-date" />
                        </div>
                        <div className="col-sm-3">
                          <input type="drop-off-date" className="form-control" id="drop-off-date" placeholder="10:00 Am"
                          name="drop-off-date" />
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
>>>>>>> e570adabef03530261dc80bc5d21bfe3b770b59b

// var subtitle;
// const [modalIsOpen, setIsOpen] = React.useState(false);


class Bookcarpopup extends Component {
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
                    <div className="col-sm-8">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
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
                            <div className="col-sm-9">
                              <input type="pick-up-date" className="form-control pickup" id="pick-up-date"
                                placeholder="pick-up-date" name="pick-up-date" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group form-row">
                            <label className="control-label col-sm-3" htmlfor="loc">Drop-Off Date:</label>
                            <div className="col-sm-6 pickup1">
                              <input type="drop-off-date" className="form-control pickup" id="drop-off-date"
                                placeholder="drop-off-date" name="drop-off-date" />
                            </div>
                            <div className="col-sm-3">
                              <input type="drop-off-date" className="form-control" id="drop-off-date" placeholder="10:00 Am"
                                name="drop-off-date" />
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
