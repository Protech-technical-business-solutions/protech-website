// components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p className="lead">
              Capital Dynamics Qatar is a leading financial services provider 
              offering innovative solutions in wealth management, investment 
              banking, and corporate finance.
            </p>
            <p>
              With over 15 years of experience in the Gulf region, we combine 
              global expertise with local market knowledge to deliver 
              exceptional results for our clients.
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="About Us" 
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;