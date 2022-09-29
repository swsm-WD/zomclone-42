import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


const Footer = ()=>{


    return (
        <React.Fragment>
            <div className="container-fluid footer">
                <div className="row ">
                    <div className="col-md-4">
                        <h5 className="text-center footer_header my-4">Meal Types</h5>
                        <ul>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Break fast</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Lunch</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Dinner</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Snacks</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Drinks</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Night Life</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-center footer_header my-4">Cuisines</h5>
                        <ul>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>South Indian</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>North Indian</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Chinese</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Fast Food</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Streat Food</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>Mediterranean</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-center footer_header my-4">Booking Online</h5>
                        <ul>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>example.com</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>hello.com</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>example.com</Link></li>
                            <li className="py-1"><Link to="/" className="footer_link"><i class="fa fa-circle mr-2" aria-hidden="true"></i>hello.com</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-12 container-fluid copyright pt-3">
                      <p className="text-center"><i class="fa fa-copyright" aria-hidden="true"></i> 2020-2021<b id="site_name"> edurekaInternship.com </b>. All rights received.<span id="tou"> Terms of use | Privacy Policy</span></p>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Footer;