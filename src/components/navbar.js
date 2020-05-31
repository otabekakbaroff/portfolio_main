import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    function windowCheck(){
        if(window.matchMedia("(max-height:650px) and (min-width:550px)").matches || window.matchMedia("(min-width: 850px)")){
            document.querySelector(".nav").style.display="flex"
        }
        sayHello();
    }
    window.onresize=windowCheck;
    function sayHello(){
        if(!(window.matchMedia("(max-height:650px) and (min-width:550px)").matches)){
            if(window.matchMedia("(max-width: 849px)").matches){
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
      }
    }
    return (
        <div>
            <div className="nav">
                    <Link to="/" onClick={sayHello}>Home</Link>
                    <Link to="/projects" onClick={sayHello}>MyWork</Link>
                    <Link to="/about" onClick={sayHello}>AboutMe</Link>
                    <Link to="/contact" onClick={sayHello}>Contact</Link>
            </div>
            <div id="sandwich" onClick={sayHello}>
                <div id="layerOne"></div>
                <div id="layerTwo"></div>
                <div id="layerThree"></div>
            </div>
        </div>
    )
}



export default Navbar
