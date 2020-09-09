import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"




function Social_link(){
    let replitLogo="https://icomoon.io/icons39f00d9/4/666.svg"
    return(
        <div id ="share" className="hover">
          <a className="social-link" href="https://github.com/otabekakbaroff" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <a className="social-link" href="https://www.linkedin.com/in/otabek-akbaroff/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="social-link" href="https://resume.io/r/fuifzJ2DP" rel="noopener noreferrer" target="_blank"><h6>Resume</h6></a>
          <a className="social-link" href="https://repl.it/@otabek99" target="_blank" rel="noopener noreferrer"><img alt="replit" src={replitLogo}/></a>
       </div> 
    )
}
export default Social_link;