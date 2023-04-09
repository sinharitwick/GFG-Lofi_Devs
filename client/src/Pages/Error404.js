import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => (
  <div className="error-container">
    {/* <h1 classNameName="error-code">404</h1>
    <p classNameName="error-message">Oops! The page you were looking for was not found.</p>
    <Link to="/" classNameName="back-to-home">Back to Home</Link> */}
      <section className="page_404">
        <div className="container-er">
            <div className="row">	
            <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
            
            
            </div>
            
            <div className="contant_box_404">
            <h3 className="h2">
                OOPS!!! Something wrong with your URL
            </h3>
            
            <h4>Try Again....with correct URL</h4>
            
            {/* <!-- <a href="" className="link_404">Go to Home</a> --> */}
          <Link to="/" className="link_404">Back to Home</Link>
        </div>
            </div>
            </div>
            </div>
        </div>
    </section>
  </div>
);

export default Error404;