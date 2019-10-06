import React from "react";
import FlipBook from "./FlipBook";
import Modal from 'react-modal';
import DISHES from '../../dishes';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const customStyles = {
    content: {
        top: '128px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)'
    }
};

const DISPLAY_BOOKS = ['fish', 'chicken', 'beef', 'soup', 'seafood'];

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

class MenuBook extends React.Component {

    state = {
        modalIsOpen: false,
        modalFoodName: '',
        modalDishes: []
    };

    dishMap = {};

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    getDishes = (name) => {
        let res = this.dishMap[name];
        if (res)
            return res;
        res = DISHES.filter(dish => dish.type === name);
        this.dishMap[name] = res;
        return res;
    };

    onBookClick = (name) => {
        let dishes = this.getDishes(name);
        this.setState({
            modalFoodName: capitalizeFirstLetter(name),
            modalDishes: dishes
        });
        this.openModal();
    };

    render() {
        return (
            <div style={{padding: '64px 0'}} id="menu-book">
                <h1 className="heading" style={{marginBottom: 64}}>
                    <span className="ghem ghem-board" style={{marginRight: 16}}>Ghém's</span> Menu
                </h1>
                <div className="container">
                    <div className="row">
                        {DISPLAY_BOOKS.map(name =>
                            <div className="col-md-6">
                                <div className="pointer-hover" style={{marginBottom: 64}}
                                     onClick={() => this.onBookClick(name)}>
                                    <FlipBook
                                        imgSrc={`${process.env.PUBLIC_URL}/assets/images/book/${name}-cover.png`}
                                        capTitle={capitalizeFirstLetter(name) + " menu"}
                                        capSubtitle={"Healthy and delicious " + name + " dishes"}
                                        text="VIEW MENU"/>
                                </div>
                            </div>
                        )}
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className="pointer-hover" style={{position: 'absolute', top: 16, right: 16, fontSize: 36, color: '#ff8100f2'}}
                             onClick={this.closeModal}><
                            FontAwesomeIcon icon={faTimesCircle}/>
                        </div>
                        <h2 style={{fontSize: 36, marginBottom: 16}}>{this.state.modalFoodName}</h2>
                        <table style={{width: '100%'}} className="table">
                            <tbody>
                            {this.state.modalDishes.map(dish =>
                                <tr style={{fontSize: 24}}>
                                    <td style={{padding: '8px 0'}}>{dish.name}</td>
                                    <td style={{
                                        fontWeight: 'bold',
                                        color: '#ff8100f2',
                                        textAlign: 'right'
                                    }}>{dish.price} VND
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default MenuBook;
