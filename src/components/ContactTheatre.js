import React from 'react';


function ContactThreatre(){
    function tagger(){
        alert("Theatre Mode Is Under Construction")
    }
    return(
        <div className="CT_button">
            <button onClick={()=>{window.location.href = '/contact'}}>Contact Me</button>
            <button onClick={tagger}>Theatre Mode</button>
        </div>
    )
}

export default ContactThreatre;