import React,{useEffect} from 'react';
import { FcBusinessman } from "react-icons/fc";


function About() {


   useEffect(() => {
    return () => {
      console.log("this is testing for useEffect site is here");
    };
  }, [input])



  return (
    <>




      <section className='parent'>
        






        
        <div>
          <div className='container-fluid text-dark'>
            <div className='row'>
              <div className='col-md-6 col-12'>
                <div className='about-div'>
                  
                  <span className='d-inline p-0 m-0 '>I'm <span className=' d-inline fss'> Abhishek</span></span>
                  <span className='d-block fs-2'>I'm Ui Designer And Front End</span>  
                  <span className='d-block fs-2'>Developer From Delhi India</span>
                  <p className='fs-3 d-block mt-4'>If you want to know more about a company, website, and a person, you’ll certainly go to their About page – which I always do. I love reading people’s about page especially those who are in the…</p>
                </div>
              </div>
              <div className='col-md-6 col-12 text-black'>
                <div className='about-div'>
                  <FcBusinessman className='person-icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
