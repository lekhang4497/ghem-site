import React from "react";
import "./NavigationBar.scss";

class FoodCarousel extends React.Component {
    render() {
        return (
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="title">
                                    <h3>Feature <span>Dishes</span></h3>
                                </div>
                                <div id="owl-example" className="owl-carousel">
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/1.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/2.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/3.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/4.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/5.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/6.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/7.jpg" alt=""/>
                                    </div>
                                    <div>
                                        <img className="img-responsive" src="assets/images/slider/8.jpg" alt=""/>
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

export default FoodCarousel;
