import React from "react";
import "./NavigationBar.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faFacebookMessenger, faTripadvisor} from "@fortawesome/free-brands-svg-icons";

class About extends React.Component {
    render() {
        return (
            <div>
                <section id="about-us" style={{paddingBottom: 64}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block">
                                    <img className="wow fadeInUp about" data-wow-duration="300ms" data-wow-delay="400ms"
                                         src="assets/images/about.jpg" alt="ghem-img" width={200} height={200}/>
                                    <h1 className="heading wow fadeInUp" style={{marginTop: 32}}
                                        data-wow-duration="400ms" data-wow-delay="500ms">
                                        See what people talk about
                                        <span className="ghem" style={{margin: '0 16px'}}>Ghém</span>
                                        on social media
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact-us" style={{paddingTop: 0}}>
                    <div className="container">
                        <div style={{width: '70%', margin: 'auto'}}>
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
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
