import React from 'react'
import ContactThreatre from './ContactTheatre'

function Home(){
    return(
        <div className="home">
            <div className="main">
                <h1 className="name">OTABEK</h1>
                <p >Full-Stack Web Developer</p>
            </div>
            <ContactThreatre/>
        </div>
    )
}

export default Home;