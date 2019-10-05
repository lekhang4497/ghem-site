import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/site/NavigationBar";
import FoodCarousel from "./components/site/FoodCarousel";
import About from "./components/site/About";
import Showcase from "./components/site/Showcase";
import SocialMedia from "./components/site/SocialMedia";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <FoodCarousel/>
      <About/>
      <Showcase/>
      <SocialMedia/>
    </div>
  );
}

export default App;
