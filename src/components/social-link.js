import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faGoogle} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"


function Social_link(){
    return(
        <div id ="share" className="hover">
          <a className="social-link" href="https://github.com/otabekakbaroff" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <a className="social-link" href="https://www.linkedin.com/in/otabek-akbarov-163a22198/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="social-link" href="mailto:otabek.akbaroff@gmail.com" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle}/></a>
          <a className="social-link" href="https://twitter.com/Otabek83809016" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
       </div> 
    )
}
export default Social_link;