import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar"
import About from './components/about'
import Projects from './components/skillz'
import Home from './components/home'
import Social_link from './components/social-link'
import ContactThreatre from './components/ContactTheatre';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/projects" component={Projects}/>
        </Switch>
      </Router>
      <ContactThreatre/>
      <Social_link/>
    </div>
  );
}

export default App;
