import React from 'react';
import SocialFollow from '../../molecules/SocialMedia/socialFollow';




function ContactText() {
    
    return (
        
        <div className="text-area">
                    {/* <p class="text contact-text"> 
                    Twitter
                     <br />
                     Instagram
                    <br />
                    Email
                    </p> */}
            <p class="text contact-text">
                    <SocialFollow />
            </p>
            

            </div>
                 


    );
}

export default ContactText