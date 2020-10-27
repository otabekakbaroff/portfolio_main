import React from 'react'



function AnywhereFitness(){
    return(
        <div className="css-less">
            <div className="css-less-img" id="anywhere-fitness"></div>
            <p>
                <span className="highlight">Anywhere-fitness</span> initially was Lambda School team project, I was responsible to Build <span className="highlight">Back End</span> for my team using <span className="highlight">Node, Express, and SQLite</span>. I enjoyed the project so decided to build the Front End for it too. The project makes it easy for instructors to create classes, keep track of attandance and payments. Students can have flexability of choosing their instructors, time and a place.  
            </p>
            <br></br>
            <div className="visit_buttons" id="backend">
                <a href="https://github.com/otabekakbaroff/anywhere_fitnessFE"  target="new" className="source">FE Source Code</a>
                <a href="https://github.com/otabekakbaroff/anywhere_fitness"  target="new" className="source">BE Source Code</a>
                <a href="https://anywherefitnessfe.netlify.app/"  target="new" className="live">Live Site</a>
            </div>
    </div>
    )
}



export default AnywhereFitness