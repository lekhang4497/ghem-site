import React from "react";
import "./NavigationBar.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarker, faPhone, faPhoneSquare} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";

class BookTable extends React.Component {
    render() {
        return (
            <section id="footer" style={{background:'white'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="block wow fadeInLeft" data-wow-delay="200ms" style={{textAlign: 'left'}}>
                                <h3>CONTACT <span>INFO</span></h3>
                                <div className="info">
                                    <ul>
                                        <li>
                                            <h4>
                                                <FontAwesomeIcon icon={faPhone} style={{marginRight: 8}}/>Telephone</h4>
                                            <p>01677 46 03 04</p>
                                        </li>
                                        <li>
                                            <h4>
                                                <FontAwesomeIcon icon={faMapMarker} style={{marginRight: 8}}/>Address</h4>
                                            <p>103 Pasteur, Bến Nghé, District 1, HCM City</p>
                                        </li>
                                        <li>
                                            <h4>
                                                <FontAwesomeIcon icon={faEnvelope} style={{marginRight: 8}}/>Email</h4>
                                            <p>ghemsaigon@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="block wow fadeInLeft" data-wow-delay="200ms" style={{textAlign: 'left'}}>
                                <h3>BOOK A TABLE <span>NOW</span></h3>
                                <h5>FOR BOOKING A TABLE, PLEASE CONTACT US VIA</h5>
                                <div className="row" style={{marginTop:32}}>
                                    <div className="col-md-4 text-center">
                                        <span style={{fontSize:48}}>
                                            <FontAwesomeIcon icon={faPhoneSquare}/>
                                             <p style={{fontSize:14}}>03774 60 30 4</p>
                                        </span>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <a href="https://www.facebook.com/ghembychuongdang/" style={{fontSize:48}}>
                                            <FontAwesomeIcon icon={faFacebookMessenger}/>
                                            <p style={{fontSize:14}}>ghembychuongdang</p>
                                        </a>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <a href="mailto:ghemsaigon@gmail.com?Subject=Table%20Booking" style={{fontSize:48}}>
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                            <p style={{fontSize:14}}>ghemsaigon@gmail.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default BookTable;
