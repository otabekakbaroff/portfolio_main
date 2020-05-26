import React from 'react';

function Contact(){
    return(
        <div className="contact">
            <h1>Let's Connect</h1>
            <form>
            <h4>Feel free to leave a feedback/question</h4>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
            </form>
        </div>
    )
}

export default Contact;