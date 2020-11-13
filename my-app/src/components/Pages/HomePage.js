import React from 'react';
import NavArea from './components/organisms/NavBarArea-organism/NavBarArea';
import HomeShowArea from './components/organisms/Home-organism/showcase-area';
import HomeTextArea from './components/organisms/Home-organism/text-area';
import FooterArea from './components/organisms/Footer-organism/footer-area';




function HomePage() { 
    


    return (
        <div className="body">

            <NavArea />
            <HomeShowArea />
            <HomeTextArea />
            <FooterArea />

        </div> 
        
    )
}

export default HomePage