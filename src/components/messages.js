import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Messages(){
    const [on, setOn] = useState([])
    useEffect(()=>{
        axios.get('https://portfolio-backend-hired.herokuapp.com/messages').then(res=>{
            setOn(res.data)
            console.log(res.data)
        })
    },[])
    return(
        <div className="logger">
            <h1>Messages</h1>
            {on.map(item=>(
                <div key={Math.random()*9999999} className="message-box" onClick={()=>console.log(on[0])}>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Subject: {item.subject}</p>
                    <textarea value={item.message}></textarea>
                </div>
            ))}
        </div>
    )
}


export default Messages