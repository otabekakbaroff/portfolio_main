import React from 'react';
import csslesspic from '../cssless.PNG'

function skillz(){
    return(
        <div class="skillz">
            <h1>Projects</h1>
            <div className="cssless">
                <img alt= "css less project" src={csslesspic}/>
            </div>
        </div>
    )
}

export default skillz;