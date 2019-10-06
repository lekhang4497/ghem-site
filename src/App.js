import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/site/NavigationBar";
import FoodCarousel from "./components/site/FoodCarousel";
import About from "./components/site/About";
import Showcase from "./components/site/Showcase";
import BookTable from "./components/site/BookTable";
import MenuBook from "./components/site/MenuBook";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <FoodCarousel/>
            <About/>
            <Showcase/>
            <MenuBook/>
            <BookTable/>
            <div style={{textAlign: 'center', padding: '20px 0', background: '#E9E9E9'}}>
                Copyright @ 2016 Ghem Vietnamese Cuisine
            </div>
        </div>
    );
}

export default App;
