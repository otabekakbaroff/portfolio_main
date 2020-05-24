import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
function App() {
  function sayHello(){
    let navbar=document.querySelector(".nav");
    if(navbar.style.display=="flex"){
          navbar.style.display="none";
    }else{
        navbar.style.display="flex";
      }
    }
  return (
    <div className="App">
      <Navbar/>
      <div id="sandwich" onClick={sayHello}>
        <div id="layerOne"></div>
        <div id="layerTwo"></div>
        <div id="layerThree"></div>
      </div>
      <div className="main">
        <h1 className="name">OTABEK</h1>
        <p >Full-Stack Web Developer</p>
      </div>
    </div>
  );
}

export default App;
