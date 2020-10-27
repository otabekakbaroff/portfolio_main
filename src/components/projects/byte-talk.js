import React from 'react'


function ByteTalk(){
    return(
        <div className="css-less" id="bytetalk">
            <div className="css-less-img" id="chattychat"></div>
            <p>
                <span className="highlight">ByteTalk</span> is a real time messaging app, where you can communicate with other users in the platform. 
            </p>
            <br></br>
            <div className="visit_buttons" id="backend">
                <a href=" https://github.com/otabekakbaroff/chatapp"  target="new" className="source">FE Source Code</a>
                <a href="https://github.com/otabekakbaroff/chatappbe"  target="new" className="source">BE Source Code</a>
                <a href="https://chattychat.netlify.app/"  target="new" className="live">Live Site</a>
            </div>
    </div>
    )
}


export default ByteTalk