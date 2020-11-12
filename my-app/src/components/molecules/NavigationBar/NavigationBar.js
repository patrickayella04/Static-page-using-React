import React from 'react';
import NavTitle from './components/atoms/nav-title';
import NavLinks from './components/atoms/nav-links';
import NavBurgerIcon from '../../atoms/nav-burgerIcon';



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
  