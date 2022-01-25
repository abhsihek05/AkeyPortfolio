import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
// 


function Work() {
  return (
    <>
      <section className='parent'>
        <h1 className='text-center p-5 fss '>WHAT  I  DO</h1>
        <div className='work-div'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col-md-4'>
                <p><CgWebsite className='Ui-logo' /></p>
                <h1 className="">UI Design</h1>
                <div className='fs-3 p-3'>
                skills instantly. Eliminate errors  seamlessly across multiple platforms and devices.
                  Improve Word Choice · Fix Punctuation Errors
                </div>
              </div>
              <div className='col-md-4'>
                <p><MdDeveloperMode className='Ui-logo' /></p>
                <h1>App Design</h1>
                <div className='fs-3 p-3'>
                  loremCorrect grammatical mistakes  enhance your professional resume writing skills instantly. Eliminate errors and work seamlessly across multiple platforms and devices.
                  
                </div>
              </div>
              <div className='col-md-4'>
              <p><MdDeveloperBoard className='Ui-logo' /></p>
                <h1 className="">Graphic Design</h1>
                <div className='fs-3 p-3'>
                skills instantly. Eliminate errors  seamlessly across multiple platforms and devices.
                  Improve Word Choice · Fix Punctuation Errors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
