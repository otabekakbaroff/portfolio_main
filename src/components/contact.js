import React from 'react';

function Contact(){
    return(
        <div className="contact">
            <h1>Get in touch</h1>
            <form>
            <h4>Feel free to leave a feedback/questions</h4>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <div className="CT_button">
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;