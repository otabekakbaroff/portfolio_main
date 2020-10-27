import React from 'react'

function BusinessCard(){
    return(
        <div className="css-less">
            <div className="css-less-img" id="business-card"></div>
            <p>
                <span className="highlight">Business-card-organizer</span> the project's purpose is to make it easier for people to organize and collect their business cards. The project was built by a <span className="highlight">team of 8 </span>developers in <span className="highlight">4 days time frame.</span> I was responsible to build <span className='highlight'>Front End</span> with two of my other teammates using <span>React</span>. My part was to make <span className="highlight">API calls</span> to backend, receive, manipulate, store and display the data.
            </p>
            <br></br>
            <div className="visit_buttons">
                <a href="https://github.com/Build-Week-Business-Card-Organizer-2/Front-End/" target="new" className="source">Source Code</a>
                <a href="https://businesscard-organizer.netlify.app/signUp" target="new" className="live">Live Site</a>
        </div>
</div>
    )
}


export default BusinessCard