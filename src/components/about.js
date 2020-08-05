import React from 'react'
import { Link } from 'react-router-dom'

function About(){
    return(
        <div className="about">
            <h1>About Me</h1>
            <div className="p">
                <p>Hello, my name is Otabek Akbarov,
                 I am Full Stack Web Developer from
                New York with passion and curiosity towards programming and technology.</p>
                <p>Test Back at it again</p>
            </div>
            <div className="aboutLinks">
                <Link to="contact">Contact Me</Link>
                <Link to="projects">My work</Link>
            </div>
        </div>
    )
}

export default About;