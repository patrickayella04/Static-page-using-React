import React from 'react';
import AboutShowArea from '../organisms/About-organism/showcase-area';
import AboutTextArea from '../organisms/About-organism/text-area';
import FooterArea from '../organisms/Footer-organism/footer-area';
import NavArea from '../organisms/NavBarArea-organism/NavBarArea';




function AboutPage() { 
    


    return (

     <>
        <div className="body">

            <NavArea />
            <AboutShowArea />
            <AboutTextArea />
            <FooterArea />

            </div> 
            
    </>
        
    )
}

export default AboutPage