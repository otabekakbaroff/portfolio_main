import React from 'react';

function Contact(){
    return(
        <div className="contact">
            <div className="contactText">
                <h1>Get in touch</h1>
                <p>Feel free to leave a feedback/questions or email me at Otabek.Akbaroff@gmail.com</p>
            </div>
            <form>
                <input className="contactInput" placeholder="Name"/>
                <input className="contactInput" placeholder="Email"/>
                <input className="contactInput" placeholder="Subject"/>
                <textarea placeholder="Message"></textarea>
                <div className="contactSend">
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;