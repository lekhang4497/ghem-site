import React from "react";
import FlipBook from "./FlipBook";

class MenuBook extends React.Component {
    render() {
        return (
            <div style={{padding: '64px 0'}}>
                <h1 className="heading" style={{marginBottom: 64}}>
                    <span className="ghem ghem-board" style={{marginRight: 16}}>Ghém's</span> Menu
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{marginBottom: 64}}>
                                <FlipBook
                                    color="blue"
                                    ribbon="#1"
                                    title="FISH"
                                    capTitle="Fish menu"
                                    capSubtitle="Description"
                                    text="VIEW MENU"
                                    textLink="#"
                                    subtitle="FISH DISHES"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style={{marginBottom: 64}}>
                                <FlipBook
                                    color="yellow"
                                    ribbon="#1"
                                    title="BEEF"
                                    capTitle="Beef menu"
                                    capSubtitle="Description"
                                    text="VIEW MENU"
                                    textLink="#"
                                    subtitle="BEEF DISHES"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style={{marginBottom: 64}}>
                                <FlipBook
                                    color="blue"
                                    black={true}
                                    ribbon="#1"
                                    title="VEGAN"
                                    capTitle="Vegetable menu"
                                    capSubtitle="Description"
                                    text="VIEW MENU"
                                    textLink="#"
                                    subtitle="VEGAN DISHES"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style={{marginBottom: 64}}>
                                <FlipBook
                                    color="yellow"
                                    black={true}
                                    ribbon="#1"
                                    title="SOUP"
                                    capTitle="Soup menu"
                                    capSubtitle="Description"
                                    text="VIEW MENU"
                                    textLink="#"
                                    subtitle="SOUP DISHES"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuBook;
