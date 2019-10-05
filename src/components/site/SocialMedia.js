import React from "react";
import "./NavigationBar.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTripadvisor, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'

class SocialMedia extends React.Component {
    render() {
        return (
            <section id="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <div className="row">
                                    <div className="col-md-3 text-center">
                                        <a href="https://www.facebook.com/ghembychuongdang/" className="social">
                                            <FontAwesomeIcon icon={faFacebookF}/>
                                            {/*<i className="fa fa-facebook"></i>*/}
                                        </a>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <a href="https://www.tripadvisor.com/Restaurant_Review-g293925-d11954019-Reviews-Ghem-Ho_Chi_Minh_City.html"
                                           className="social">
                                            <FontAwesomeIcon icon={faTripadvisor}/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <a href="https://www.foody.vn/ho-chi-minh/ghem-com-viet-nam-cafe"
                                           className="social">
                                            <img style={{width: '100%', borderRadius: '50%'}}
                                                 src="assets/images/foody.png"/>
                                        </a>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <a href="https://www.foody.vn/ho-chi-minh/ghem-com-viet-nam-cafe"
                                           className="social">
                                            <FontAwesomeIcon icon={faFacebookMessenger}/>
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

export default SocialMedia;
