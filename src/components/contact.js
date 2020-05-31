import React from 'react';

function Contact(){
    return(
        <div className="contact">
            <form>
            <h1>Get in touch</h1>
            <h4>Feel free to leave a feedback/questions</h4>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <div className="contactSend">
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;