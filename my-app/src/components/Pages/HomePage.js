import React from 'react';
import FooterArea from '../organisms/Footer-organism/footer-area';
import HomeShowArea from '../organisms/Home-organism/showcase-area';
import HomeTextArea from '../organisms/Home-organism/text-area';
import NavArea from '../organisms/NavBarArea-organism/NavBarArea';






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