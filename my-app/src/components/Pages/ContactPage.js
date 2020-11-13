import React from 'react';
import ContactShowArea from '../organisms/Contact-organism/showcase-area';
import ContactTextArea from '../organisms/Contact-organism/text-area';
import FooterArea from '../organisms/Footer-organism/footer-area';
import NavArea from '../organisms/NavBarArea-organism/NavBarArea';





function ContactPage() { 
    


    return (

     <>
        <div className="body">

            <NavArea />
            <ContactShowArea />
            <ContactTextArea />
            <FooterArea />

            </div> 
            
    </>
        
    )
}

export default ContactPage