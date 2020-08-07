import React from 'react'
import { Link } from 'react-router-dom'

function About(){
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="p">
                <p>Hello, my name is Otabek Akbarov,
                 I am Full Stack Web Developer from
                New York with passion and curiosity towards programming and technology.
                Most of my time i spend coding, learning new technology or coming up with new project ideas. 
                Off coding i spend time with my friends, going to gym, learning something new about stock market, real estate and finance in general.  
                </p>

            </div>
            <div className="aboutLinks">
                <Link to="contact">Contact Me</Link>
                <Link to="projects">My work</Link>
            </div>
        </div>
    )
}

export default About;