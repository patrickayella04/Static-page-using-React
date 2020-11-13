import React from 'react';
import NavTitle from './components/atoms/Nav-atoms/nav-title';
import NavLinks from './components/atoms/Nav-atoms/nav-links';
import NavBurgerIcon from '../../atoms/Nav-atoms/nav-burgerIcon';



function NavigationBar() { 
    return (
        <>
        <NavTitle /> 
        <NavLinks />
        <NavBurgerIcon />
      </>
    );
  }
  
  export default NavigationBar;
  