import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // We just named BrowserRouter to Router/ Install Router: npm install react-router-dom
import './App.scss';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';

import HomePage from './components/Pages/HomePage';
import ReactGa from 'react-ga'; // Google Analytics




   



 
function App() {


  useEffect(() => {
    ReactGa.initialize('UA-183472135-1')

    //to report page view
    ReactGa.pageview('/')
  }, [])
  

  return (
    
    
   

    <Router> 
      
      
      <h1>
        
        <Switch>
          <Route path="/" exact component = {HomePage} />
          <Route path="/about" component = {AboutPage} />
          <Route path="/contact" component = {ContactPage} />
        </Switch>
    </h1>
    </Router>
    
        

    
  );
}

export default App;
