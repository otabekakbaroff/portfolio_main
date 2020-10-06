import React,{useState} from 'react';
import axios from 'axios'
function Contact(){
    const [message,setMessage]=useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })
    function handleChange(e) {
        setMessage({
            ...message,
            [e.target.name]:e.target.value
        })
    }
    function sendMessage(e){
        e.preventDefault();
        axios.post('https://portfolio-backend-hired.herokuapp.com/messages/send-message', message).then(res=>{
            console.log(res)
        })
        axios.get('https://portfolio-backend-hired.herokuapp.com').then(res=>{
            console.log(res)
        })
    }
    return(
        <div className="contact">
            <div className="contactText">
                <h1>Get in touch</h1>
                <p>Feel free to leave a feedback/questions or email me at Otabek.Akbaroff@gmail.com</p>
            </div>
            <form>
                <input className="contactInput" placeholder="Name" name="name" onChange={handleChange}/>
                <input className="contactInput" placeholder="Email" name="email" onChange={handleChange}/>
                <input className="contactInput" placeholder="Subject" name="subject" onChange={handleChange}/>
                <textarea placeholder="Message" name="message" onChange={handleChange}></textarea>
                <div className="contactSend">
                    <button onClick={sendMessage}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;