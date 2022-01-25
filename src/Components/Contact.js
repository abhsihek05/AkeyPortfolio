import React from 'react';
import { Link } from "react-router-dom";

function Contact() {
  return (
    <> <section className='parent'>
      <div className='contact-div'>
        <div className="form-div">
          <form action="" className='border-2 bg-light p-5' >
              <label className='fs-3'>Name</label>
              <input type="text" className="form-control p-1 fs-4" id="staticName" placeholder='Enter your name' />
              <label className='fs-3'>User Name</label>
              <input type="email" className="form-control p-1 fs-4" id="staticEmail" placeholder='Enter Email Address' />
              <label className='fs-3'>Password</label>
              <input type="password" className="form-control p-1 fs-4" autoComplete='off' id="inputPassword" placeholder='*******' />
              <button className='fs-2 px-2 border-1 '> Submit </button>

          </form>

        </div>

      </div>
    </section>
    </>
  );
}

export default Contact;
