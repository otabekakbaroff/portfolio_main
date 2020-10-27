import React from 'react';
import Anywhere from './anywhere-fitness'
import Bytetalk from './byte-talk'
import BusinessCard from './business-card'
import Mealfresh from './mealfresh'
import TablesThursday from './tables-thursday'

function skillz(){
    return(
        <div className="skillz">
            <h1>Projects</h1>
            <div className="projects">
                <BusinessCard/>
                <Anywhere/>
                <Bytetalk/>
                <Mealfresh/>
                <TablesThursday/>
            </div>
        </div>
    )
}

export default skillz;