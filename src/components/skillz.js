import React from 'react';



function skillz(){
    return(
        <div className="skillz">
            <h1>Projects</h1>
            <div className="projects">
                <div className="css-less">
                        <div className="css-less-img" id="business-card"></div>
                        <p>
                            <span className="highlight">Business-card-organizer</span> project purpose to make it easy for people to organize  and collect their business cards. Project was built in a <span className="highlight">team of 8 </span> with <span className="highlight">4 days deadline.</span> I was responsible to build <span className='highlight'>Front End</span> with two of my other teammates using <span>React</span>. My part was to make <span className="highlight">API calls</span> to backend, receive, manipulate, store and display the data.
                        </p>
                        <br></br>
                        <div className="visit_buttons">
                            <a href="https://github.com/Build-Week-Business-Card-Organizer-2/Front-End/signUp" target="new" className="source">Source Code</a>
                            <a href="https://businesscard-organizer.netlify.app/" target="new" className="live">Live Site</a>
                        </div>
                </div>
                <div className="css-less">
                    <div className="css-less-img" id="chattychat"></div>
                    <p>
                        <span className="highlight">Chattychat</span> is an app where you can join random chat rooms where you can chat with random people or create your own chat room and invite your friends.
                    </p>
                    <br></br>
                    <div className="visit_buttons" id="backend">
                        <a href=" https://github.com/otabekakbaroff/chatapp"  target="new" className="source">FE Source Code</a>
                        <a href="https://github.com/otabekakbaroff/chatappbe"  target="new" className="source">BE Source Code</a>
                        <a href="https://chattychat.netlify.app/"  target="new" className="live">Live Site</a>
                    </div>
                </div>
                <div className="css-less">
                    <div className="css-less-img" id="anywhere-fitness"></div>
                    <p>
                        <span className="highlight">Anywhere-fitness</span> initially was Lambda School team project, i was responsible to Build <span className="highlight">Back End</span> for my team using <span className="highlight">Node, Express, and SQLite</span>. I enjoyed the project so decided to build the Front End for it too. The project makes it easy for instructors to create classes, keep track of attandance and payments. Students can have flexability of choosing where, when, and who's their instructor.  
                    </p>
                    <br></br>
                    <div className="visit_buttons" id="backend">
                        <a href="https://github.com/otabekakbaroff/anywhere_fitnessFE"  target="new" className="source">FE Source Code</a>
                        <a href="https://github.com/otabekakbaroff/anywhere_fitness"  target="new" className="source">BE Source Code</a>
                        <a href="https://anywherefitnessfe.netlify.app/"  target="new" className="live">Live Site</a>
                    </div>
                </div>
                <div className="css-less">
                    <div className="css-less-img" id="mealfresh"></div>
                    <p>
                        <span className="highlight">Mealfresh</span> is a fresh and healthy food service for people who's trying to eat healthy. 
                    </p>
                    <br></br>
                    <div className="visit_buttons">
                        <a href="https://mealfresh.us/" target="new" className="live">Live Site</a>
                    </div>
                </div>
                <div className="css-less">
                    <div className="css-less-img" id="tables-thursday"></div>
                    <p>
                    <span className="highlight">Tables Thursday</span> Project purpose to help people organize, and manage their tasks in a easier way. Project was built in a <span className="highlight">team of 7</span> with <span className="highlight">4 days deadline</span>. I was responsible to <span className="highlight">build Home page using HTML CSS-Less and Javascript</span>. 
                    </p>
                    <br></br>
                    <div className="visit_buttons">
                        <a href="https://github.com/Build-Week-TablessThursday/UI" target="new" className="source">Source Code</a>
                        <a href="https://tables-thursday.netlify.app/" target="new"  className="live">Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skillz;