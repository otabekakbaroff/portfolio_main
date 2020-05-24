import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
function App() {
  function sayHello(){
    let navbar=document.querySelector(".nav");
    let sandwichX=document.querySelector("#layerTwo")
    let layerOne=document.querySelector("#layerOne")
    let layerThree=document.querySelector("#layerThree")
    if(navbar.style.display==="flex"){
          navbar.style.display="none";
          layerOne.style.transform="rotate(0deg)"
          layerThree.style.transform="rotate(0deg)"
          layerOne.style.position="relative";
          layerThree.style.position="relative";
          sandwichX.style.display="block"
    }else{
        navbar.style.display="flex";
        sandwichX.style.display="none";
        layerOne.style.position="absolute";
        layerThree.style.position="absolute";
        layerOne.style.transform="rotate(50deg)";
        layerThree.style.transform="rotate(-50deg)";

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
