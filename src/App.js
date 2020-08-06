import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar"
import About from './components/about'
import Projects from './components/skillz'
import Home from './components/home'
import SocialLink from './components/social-link'
import Contact from './components/contact'

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
        </Switch>
      </Router>
      <SocialLink/>
    </div>
  );
}

export default App;
