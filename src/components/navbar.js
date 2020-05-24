import React from 'react';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function Navbar(){
    
    return (
        <div className="nav">
            
                <Link to="/">Home</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/About">About</Link>
        </div>
    )
}



export default Navbar
