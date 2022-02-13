import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    function windowCheck(){
        if(window.matchMedia("(max-height:650px) and (min-width:550px)").matches || window.matchMedia("(min-width: 850px)")){
            document.querySelector(".nav").style.display="flex"
        }
        // sayHello();
    }
    window.onresize=windowCheck;
    const clickEvent = () =>{
        let navbar=document.querySelector(".nav");
        document.getElementById("sandwich").classList.toggle("change");
        // navbar.style.display === 'flex' ? navbar.style.display = 'none': navbar.style.display = 'flex'
        navbar.style.display === 'flex' ? navbar.style.display = 'none': navbar.style.display = 'flex'
    }
    return (
        <div>
            <div className="nav">
                    <Link to="/" >Home</Link>
                    <Link to="/projects" >Projects</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/contact" >Contact</Link>
            </div>
            <div id="sandwich" onClick={clickEvent}>
                <div id="line-one" className='line'></div>
                <div id="line-two" className='line'></div>
                <div id="line-three" className='line'></div>
            </div>
        </div>
    )
}



export default Navbar
