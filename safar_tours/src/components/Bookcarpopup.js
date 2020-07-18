import React from 'react'

const Bookcarpopup = () => {
    return (
        <div className="">
           <div className="container">
    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Book Now</button>
    <div className="modal fade desk" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
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
                <h4 className="book-drive">BOOK YOUR DRIVE</h4>
                <form className="form-horizontal" action="/action_page.php">
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlfor="name">Name:</label>
                    <div className="col-sm-9">
                      <input type="name" className="form-control" id="name" placeholder="Enter Your Name" name="name"
                        required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlfor="text">Phone No:</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="text" placeholder="987654310" name="text" required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlfor="loc">Location:</label>
                    <div className="col-sm-9">
                      <input type="loc" className="form-control" id="loc" placeholder="Your Location" name="loc" required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlfor="number">Passenger No:</label>
                    <div className="col-sm-9">
                      <input type="number" className="form-control" id="number" placeholder="0" name="number" required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlfor="pick-up-date">Pick-Up Date:</label>
                    <div className="col-sm-6 pickup1">
                      <input type="pick-up-date" className="form-control pickup" id="pick-up-date"
                        placeholder="pick-up-date" name="pick-up-date" />
                    </div>
                    <div className="col-sm-3">
                      <input type="pick-up-date" className="form-control" id="pick-up-date" placeholder="10:00 Am"
                        name="pick-up-date" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-3" htmlfor="drop-off-date">Drop-Off Date:</label>
                    <div className="col-sm-6 pickup1">
                      <input type="drop-off-date" className="form-control pickup" id="drop-off-date"
                        placeholder="drop-off-date" name="drop-off-date" />
                    </div>
                    <div className="col-sm-3">
                      <input type="drop-off-date" className="form-control" id="drop-off-date" placeholder="10:00 Am"
                        name="drop-off-date" />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-default">BOOK NOW</button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>


        </div>

      </div>
    </div>



  </div>

        </div>
    )
}

export default Bookcarpopup
