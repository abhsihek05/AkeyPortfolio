import React from 'react';

function Footer() {
  return(
      <>
   
     <div className='container-fluid  footer bg-footer pt-4'>
            <div className='container text-center container-xl'>
               <div className='row fss  '>
               <div className='col-md-6 '>
                    <label className='fs-3 me-3'>Ask Me</label>
                    <input className='fs-4 px-3' type="Email" placeholder='Enter Your Email' />
                </div>
                <div className='col-md-6 text-center'>
                    <button className='fs-3 px-5 border-2 border-danger bg-danger text-light' > Submit</button>
                </div>
               </div>
            </div>

        </div>
     
      </>
  );
}

export default Footer;
