import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar"
import About from './components/about'
import Projects from './components/projects/skillz'
import Home from './components/home'
import SocialLink from './components/social-link'
import Contact from './components/contact'
import Messages from './components/messages'
import BusinessCard from './components/projects/business-card'
import ByteTalk from './components/projects/byte-talk'
import AnywhereFitness from './components/projects/anywhere-fitness'
import Mealfresh from './components/projects/mealfresh'
import TablesThursday from './components/projects/tables-thursday'





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/contact" component={Contact}/>
          <Route  path="/projects" component={Projects}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/business-card" component={BusinessCard}/>
          <Route path="/anywhere-fitness" component={AnywhereFitness}/>
          <Route path="/byte-talk" component={ByteTalk}/>
          <Route path="/mealfresh" component={Mealfresh}/>
          <Route path="/tables-thursday" component={TablesThursday}/>
        </Switch>
      </Router>
      <SocialLink/>
    </div>
  );
}

export default App;
