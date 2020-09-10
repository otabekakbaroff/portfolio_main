import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact,faGit,faLess,faNodeJs,faNode,faPython} from "@fortawesome/free-brands-svg-icons"

function About(){
    return(
        <div className="mainAbout">
            <h1>About Me</h1>
        <div className="about">
            <div className="p">
                <p>Hello, my name is Otabek Akbarov,
                 I am Full Stack Web Developer from
                New York, passionate and curious about technology, with hunders of hours of coding experience.
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
            <div className="aboutSkillzSection">
                <div className="aboutLogos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGit}/></div>
                <div className="aboutLogos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReact}/></div>
                <div className="aboutLogos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLess}/></div>
                <div className="aboutLogos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faNodeJs}/></div>
                <div className="aboutLogos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faNode}/></div>
                <div className="aboutLogos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPython}/></div>
            </div>
        </div>
        </div>
    )
}

export default About;