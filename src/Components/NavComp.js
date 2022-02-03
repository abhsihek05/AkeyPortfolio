import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

function NavComp() {


useEffect(() => {
 
}, )

  return (
      <>
 
        <div className="container-fluid bg-secondary">
            <div className='row'>
                <div className='col-6 col-md-6  col-12'>
                    
                </div>
                <div className='col-6 col-md-6 col-12'>
                   <div className='flex-nav'>
                     <div><Link   spy={true} smooth={true} offset={50} duration={500} className='link active' to="AkeyPortfolio">Home</Link> </div>
                     <div><Link   spy={true} smooth={true} offset={50} duration={500} className='link' to="/about">About</Link> </div>
                     <div><Link   spy={true} smooth={true} offset={50} duration={500} className='link' to="/work">Work</Link> </div>
                     <div><Link   spy={true} smooth={true} offset={50} duration={500} className='link' to="/contact">Contact</Link> </div>
                   </div>
                </div>
            </div>
        </div>
  
      </>
  );
}

export default NavComp;
