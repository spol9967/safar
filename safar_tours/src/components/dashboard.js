import React,{useState} from 'react';

const Dashboard = () => {
    const[toggleMenu,setToggleMenu] = useState(false)
    const toggleHandler = () => {
        setToggleMenu(!toggleMenu)

    }
    return (
        
        <div className="dashboard">
            {
                // <nav className="navbar navbar-expand-sm dashboard-nav navbar-light">
                // <div className="container">
                //     <button className="navbar-toggler ml-auto" type="button" onClick={toggleHandler} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={toggleMenu} aria-label="Toggle navigation">
                //         <span className="navbar-toggler-icon"></span>
                //     </button>
            
                //         <div className="collapse navbar-collapse" id="navbarSupportedContent" style={ toggleMenu ? { display:'block',transition:'0.3s height ease-in',height:'auto'} : {display:'none'}}>
                //             <ul className="navbar-nav mx-auto">
                //                 <li className="nav-item active">
                //                     <a className="nav-link text" href="#">BOOK CAR</a>
                //                 </li>
                //                 <li className="nav-item">
                //                     <a className="nav-link text" href="#">HOLIDAYS</a>
                //                 </li>
                //                 <li className="nav-item">
                //                     <a className="nav-link  text" href="#">SERVICES</a>
                //                 </li>
                //                 <li className="nav-item">
                //                     <a className="nav-link  text" href="#">INFO</a>
                //                 </li>
                //             </ul>
                //         </div>
                //     </div>
                // </nav>
            }
            
                <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav dashbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">BOOK CAR</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">HOLIDAYS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">SERVICES</a>
                    </li>
                    
                </ul>
            </nav>
            <div className="title text-light text-center position-relative">
                <img src="/images/kite.png" alt="kite bird" className="kite-logo position-relative" />
                <h1>safar</h1>
                <h4>tours and travels</h4>
                <h6>Car-Holiday-Tour-Booking-Trip-Hotels-Travel</h6>
            </div>
            <div className="bottom container mt-5">
                <div className="row">
                    <div className="col-sm-6 key-location ">                       
                        <div className="bg d-inline-block">
                        <div className="img-label text-light playfair">Visit nearby</div>
                        </div>
                        <div className="d-inline-block align-top pt-3">
                            <div className="text-uppercase text-light">Matheran hill station</div>
                            <div className="text-uppercase text-light playfair">matheran magic</div>
                            <div className="sub-title text-light-2 raleway">Cutest little hill-station of India</div>
                            <div className="plus"></div>
                        </div>
                    </div>
                    <div className="col-sm-6 ofiice-details">
                        <div>
                            <div className="text-light palyfair text-sm-right pt-3">Mumbai</div>
                            <div className="playfair text-light-2 text-sm-right"> R-3/507 Satnford, Panvelkar Estate,<br/><br/>Badalpur(E), Maharashtra - 421503  </div>
                            <div className="social-icon text-sm-right raleway">
                                <div className="text-light d-inline rounded-circle border border-light"><i className="fab fa-pinterest"></i></div>
                                <div className="text-light d-inline rounded-circle border border-light"><i className="fab fa-twitter"></i></div>
                                <div className="text-light d-inline rounded-circle border border-light"><i className="fab fa-facebook-f"></i></div>
                            </div>
                        </div>
                        <div className="map"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
