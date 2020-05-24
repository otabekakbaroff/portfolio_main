import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <h1 className="name">OTABEK</h1>
        <p >Full-Stack Web Developer</p>
      </div>
    </div>
  );
}

export default App;
