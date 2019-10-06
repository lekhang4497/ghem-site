import React from "react";
import "./NavigationBar.scss";

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <section id="hero-area" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/images/header/2.jpg)'}}>
                </section>
                <nav id="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block">
                                    <nav className="navbar navbar-default">
                                        <div className="container-fluid">
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#bs-example-navbar-collapse-1">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </button>
                                                <a className="navbar-brand ghem" href="#"> Ghém </a>

                                            </div>
                                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                                <ul className="nav navbar-nav navbar-right" id="top-nav">
                                                    <li className="active">
                                                        <a href="/website/home" href="#hero-area">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="/website/menu" href="#menu-book">Menu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#footer">Contact</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavigationBar;
