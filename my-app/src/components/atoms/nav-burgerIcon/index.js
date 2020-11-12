import React, { useState } from 'react';



function NavBurgerIcon() {
    const[open, setOpen] = useState(false)
    return (
        
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>

    );
}

export default NavBurgerIcon