import React from 'react';
import Anywhere from './anywhere-fitness'
import Bytetalk from './byte-talk'
import BusinessCard from './business-card'
import Mealfresh from './mealfresh'
function skillz(){
    return(
        <div className="skillz">
            <h1>Projects</h1>
            <div className="projects">
                <Anywhere/>
                <Bytetalk/>
                <BusinessCard/>
                <Mealfresh/>
            </div>
        </div>
    )
}

export default skillz;