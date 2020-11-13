import React from 'react';
import NavBurgerIcon from '../../atoms/Nav-atoms/nav-burgerIcon';
import NavLinks from '../../atoms/Nav-atoms/nav-links';
import NavTitle from '../../atoms/Nav-atoms/nav-title';



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
  