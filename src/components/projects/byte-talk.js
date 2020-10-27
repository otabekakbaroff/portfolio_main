import React from 'react'


function ByteTalk(){
    return(
        <div className="css-less" id="bytetalk">
            <div className="css-less-img" id="chattychat"></div>
            <p>
                <span className="highlight">ByteTalk</span> is a real time messaging app, where you can communicate with other users in the platform.
                The project is built using <span className="highlight">Socket.io</span> and <span className="highlight">Express</span>. 
            </p>
            <br></br>
            <div className="visit_buttons" id="backend">
                <a href="https://github.com/otabekakbaroff/bytetalk"  target="new" className="source">Source Code</a>
                <a href="https://bytetalk.herokuapp.com/"  target="new" className="live">Live Site</a>
            </div>
    </div>
    )
}


export default ByteTalk