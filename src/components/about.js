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
                </p>
                <br></br>
                <p>
                    Don't hesitate to look around my portfolio <Link to="projects">projects.</Link> 
                </p>
                <br></br>
                <p>
                    Feel free to <Link to="contact">contact me</Link> regarding any questions you have.
                </p>
            </div>
        </div>
    )
}

export default About;