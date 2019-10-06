import React from "react";
import "./NavigationBar.scss";

class Showcase extends React.Component {
    render() {
        return (
            <div id="blog" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/images/blog/bg.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h1 className="heading">
                                    <span className="ghem ghem-board" style={{marginRight: 16}}>Ghém's</span> Delicious food
                                </h1>
                                <ul>
                                    <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="300ms">
                                        <div className="blog-img">
                                            <img src="assets/images/blog/1.jpg" alt="blog-img"
                                                 className="img-responsive"/>
                                        </div>
                                        <div className="content-right">
                                            <h3>Fish cake in green young rice</h3>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="400ms">
                                        <div className="blog-img">
                                            <img src="assets/images/blog/2.jpg" alt="blog-img"
                                                 className="img-responsive"/>
                                        </div>
                                        <div className="content-right">
                                            <h3>Ghem's springroll</h3>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="500ms">
                                        <div className="content-left">
                                            <h3>Sauteed beef tripe with pickled cabbage</h3>
                                        </div>
                                        <div className="blog-img">
                                            <img src="assets/images/blog/3.jpg" alt="blog-img"
                                                 className="img-responsive"/>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="600ms">
                                        <div className="content-left">
                                            <h3>Sauteed duck with salt</h3>
                                        </div>
                                        <div className="blog-img">
                                            <img src="assets/images/blog/4.jpg" alt="blog-img"
                                                 className="img-responsive"/>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="700ms">
                                        <div className="blog-img">
                                            <img src="assets/images/blog/5.jpg" alt="blog-img"
                                                 className="img-responsive"/>
                                        </div>
                                        <div className="content-right">
                                            <h3>Noodle with fried tofu & shrimp paste</h3>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="800ms">
                                        <div className="blog-img">
                                            <img src="assets/images/blog/6.jpg" alt="blog-img"
                                                 className="img-responsive"/>
                                        </div>
                                        <div className="content-right">
                                            <h3>Blue crabs and calabash hot pot</h3>
                                        </div>
                                    </li>
                                </ul>
                                <a className="btn btn-default btn-more-info wow bounceIn" data-wow-duration="500ms"
                                   data-wow-delay="1200ms" href="/website/menu" role="button">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Showcase;
