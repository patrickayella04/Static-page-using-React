import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // We just named BrowserRouter to Router/ Install Router: npm install react-router-dom
import './App.css';

import HomePage from './components/Pages/HomePage';



   




function App() {
  return (

    <Router> 
      <h1>
        
        <Switch>
          <Route path="/" exact component = {HomePage} />
          {/* <Route path="/about" component = {AboutPage} />
          <Route path="/contact" component = {ContactPage} /> */}
        </Switch>
    </h1>
    </Router>
    
        

    
  );
}

export default App;
