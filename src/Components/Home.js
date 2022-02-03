import React from 'react';
import { BsBoxArrowRight } from "react-icons/bs";
import {Link} from "react-router-dom";


function Home() {
  return (
    <>
      <section>
        <div className='home-container'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-12 text- p-5' >
                <h1 className='m-4'><i className='text-light' >Developer Point Of View</i></h1>
                <h2 className='text-indent-50 text-sm-left text-sm-center text-light '>“Good code is its own best documentation. As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?” Improve the code and then document it to make it even clearer.” <i className='text-end text-red fs-1 d-block'>By Akey Singh</i></h2>
              </div>
              <div className='col-md-6 col-12 text-center' >
                <Link to="/about"><button className='know-more-btn fs-4 px-5 py-1  border-1'>Now More <BsBoxArrowRight className='fs-2' /></button></Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
