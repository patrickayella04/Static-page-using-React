import React from 'react';
import FooterArea from '../organisms/Footer-organism/footer-area';
import HomeShowArea from '../organisms/Home-organ/showcase-area';
import HomeTextArea from '../organisms/Home/text-area';
import NavArea from '../organisms/NavBarArea-organ/NavBarArea';
import './App.css';





function HomePage() { 
    


    return (

     <>
        <div className="body">

            <NavArea />
            <HomeShowArea />
            <HomeTextArea />
            <FooterArea />

            </div> 
            
    </>
        
    )
}

export default HomePage