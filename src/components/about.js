import React from 'react'
import { Link } from 'react-router-dom'

function About(){
    return(
        <div className="about">
            <h1>About Me</h1>
            <p>
                Hello, my name is Otabek Akbarov, I am Full Stack Web Developer from New York with passion and curriosity towards programming and technology.
            </p>
            <div className="aboutLinks">
                <Link to="contact">Contact Me</Link>
                <Link to="projects">My work</Link>
            </div>
        </div>
    )
}

export default About;