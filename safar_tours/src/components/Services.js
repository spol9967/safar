import React from 'react'

const Services = () => {
    return (
        <div className="container">
        <div className="services-container">
           <div className="row">
               <div className="col-sm-3">
                   <p className="discover-text">DISCOVER</p>
                   <h4 className="services-heading">Our Hot Services</h4>
                   <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               <div className="col-sm-9">
               <div className="row">
                   <div className="col-sm-4 second-row">
                   <div className="services-box">
                       <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-1.jpg"} alt="Mumbai Darshan" />
                        <div class="service-container">
                           <div class="content">
                           <button class="service-btn">BOOK NOW</button>
                           </div>
                        </div> 
                   </div>
                       <h5 className="service-sub-heading">Mumbai Darshan</h5>
                       <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div>

                   <div className="col-sm-4 second-row">
                   <div className="services-box">
                       <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-2.jpg"} alt="Agra" />
                       <div className="service-container">
                           <div className="content">
                           <button className="service-btn">BOOK NOW</button>
                           </div>
                        </div> 
                   </div>
                       <h5 className="service-sub-heading">Agra</h5>
                       <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div>

                   <div className="col-sm-4 second-row">
                   <div className="services-box">
                       <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-3.jpg"} alt="Family Trip Planner" />
                       <div class="service-container">
                           <div class="content">
                           <button class="service-btn">BOOK NOW</button>
                           </div>
                        </div> 
                   </div>
                       <h5 className="service-sub-heading">Family Trip Planner</h5>
                       <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div>
                   </div>

                   <div className="row">
                   <div className="col-sm-4 second-row">
                   <div className="services-box">
                       <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-4.jpg"} alt="Pratapgad Fort" />
                       <div class="service-container">
                           <div class="content">
                           <button class="service-btn">BOOK NOW</button>
                           </div>
                        </div> 
                   </div>
                       <h5 className="service-sub-heading">Pratapgad Fort</h5>
                       <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div>

                   <div className="col-sm-4 second-row">
                   <div className="services-box">
                       <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-5.jpg"} alt="Fire Camp" />
                       <div class="service-container">
                           <div class="content">
                           <button class="service-btn">BOOK NOW</button>
                           </div>
                        </div> 
                   </div>
                       <h5 className="service-sub-heading">Fire Camp</h5>
                       <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div>

                   <div className="col-sm-4 second-row">
                   <div className="services-box">
                       <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/services-6.jpg"} alt="Jejuri Temple" />
                       <div class="service-container">
                           <div class="content">
                           <button class="service-btn">BOOK NOW</button>
                           </div>
                        </div> 
                   </div>
                       <h5 className="service-sub-heading">Jejuri Temple</h5>
                       <p className="services-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div>
                   </div>
               </div>
           </div> 
        </div>
        </div>
    )
}

export default Services
