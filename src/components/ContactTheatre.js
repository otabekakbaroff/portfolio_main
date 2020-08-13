import React from 'react';


function ContactThreatre(){
    return(
        <div className="CT_button">
            <button onClick={()=>{window.location.href = '/contact'}}>Contact Me</button>
            <button onClick={()=>{window.location.href = '/projects'}}>View Projects</button>
        </div>
    )
}

export default ContactThreatre;