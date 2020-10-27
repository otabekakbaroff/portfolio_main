import React from 'react';



function skillz(){
    return(
        <div className="skillz">
            <h1>Projects</h1>
            <p>Click on the project to learn more.</p>
            <div className="projects">
               <a href="/business-card"><div className="bc"></div></a>
               <a href="/mealfresh"><div className="mf"></div></a>
               <a href="/anywhere-fitness"><div className="af"></div></a>
               <a href="/byte-talk"><div className="bt"></div></a>
               <a href="/tables-thursday"><div className="tt"></div></a>
            </div>
        </div>
    )
}

export default skillz;