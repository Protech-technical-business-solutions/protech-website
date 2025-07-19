// components/Services.js
import React, { useContext } from 'react';
import MyContext from '../../config/contextFile';

import { useNavigate } from 'react-router-dom';

const Services = () => {

  const {isMobile} = useContext(MyContext);
  const navigate = useNavigate()

  const services = [
    {
      title:"Architecture",
      content: "We Provide Interior Architecture Services to our valuable clients across Saudi Arabia",
      iconImage: "/mainServiceSection/architect.png"
    },
    {
      title:"Construction",
      content: "We also Provide Interior Architecture Services to our valuable clients across Saudi Arabia",
      iconImage: "/mainServiceSection/construction.png"
    }
  ];

  return (
    <div className={`d-flex gap-5 flex-wrap ${isMobile ? "px-4 mx-4" : "container"}`} 
    style={{
      minHeight: isMobile ? 900 : 841,
      padding: isMobile ? "20px" : "",
      backgroundImage: "url('/mainServiceSection/background.jpg')"
    }}>
        
        <div>
          <p style={{fontSize: isMobile ? 34 : 22, marginBottom: isMobile ? 40 : 10}}
          className="company-text mt-5 text-theme fw-bolder">
            We offer the best services
          </p>
          <div style={{height: isMobile ? 150 : 120, marginBottom: isMobile ? "20px" : ""}}>
            <h3 className='company-text text-dark' style={{fontSize: isMobile ? 65 : 37, lineHeight: isMobile ? "90px" : "50px"}}>
            We offer the best services
            </h3>
            <h3 className='company-text text-dark' style={{fontSize: isMobile ? 65 : 37, lineHeight: isMobile ? "90px" : "50px"}}>
            for our clients
            </h3>
          </div>
          {isMobile && <>
            <br /><br />
          </>}
          <div className='bg-theme'
          style={{
            minWidth: isMobile ? 170 : 100,
            width: isMobile ? 170 : 100,
            minHeight: isMobile ? 4 : 3,
            height: isMobile ? 4 : 3,
            marginBottom: isMobile ? "60px" : "20px"
          }}>
          </div>
          <p style={{width: isMobile ? "auto" : 470, fontSize: isMobile ? 34 : 20, lineHeight: isMobile ? "38px" : "33px", marginBottom: isMobile ? "35px" : ""}}
          className="company-text fw-normal">
          Protech Group provides a complete range of Interior Design, and Electro Mechanical Services.
          </p>
          <p style={{width: isMobile ? "auto" : 670, fontSize: isMobile ? 28 : 15, lineHeight: isMobile ? "36px" : "31px", color: "#666666", marginBottom: isMobile ? "85px" : ""}}
          className="mt-3">
            Protech Group was formed with one visionary mind set to allow property owners, developers, architects and general contractors to deliver a competitive edge for their projects. Capital Dynamics provides a complete range of Interior Design, Fitout Works and Electro Mechanical services though highly experienced Engineering & Project Management team fully complying to time, cost and quality requirements of projects.
          </p>
          <div className="d-flex gap-4 mt-4 flex-wrap">
            {services.map(service =>
            <div style={{
              width: isMobile ? "auto" : 300,
              height: isMobile ? 230 : 210,
              padding: isMobile ? "25px" : "12px",
              marginBottom: isMobile ? "20px" : ""
            }}
            className="border border-theme border-2">
                <div className="d-flex gap-3 align-items-center">
                    <img src={service.iconImage} alt="image"
                    style={{
                      width: isMobile ? 100 : 45,
                      height: isMobile ? 100 : 45,
                    }} />
                    <h5 style={{
                      fontSize: isMobile ? 31 : ""
                    }} 
                    className="company-text fw-bold">
                      {service.title}
                    </h5>
                </div>
                <p style={{fontSize: isMobile ? 31 : 15, lineHeight: isMobile ? "35px" : "31px", color: "#666666"}}
                className="mt-3">
                  {service.content}
                </p>
            </div>
            )}
          </div>
          <div className={`d-flex gap-4 flex-wrap ${isMobile ? "justify-content-center pb-4 mt-5 mb-3" : "mt-5"}`}>
              <button style={{height: 55, 
                padding: isMobile ? "35px" : "",
                marginBottom: isMobile ? "20px" : ""
              }} onClick={() => {window.scrollTo(0,0);navigate("/services")}} 
              className="btn-getQuote d-flex align-items-center">
                  <span className='mx-3' style={{fontSize: isMobile ? 34 : 18}}>
                    READ MORE
                  </span>
              </button>
              <button style={{height: 55, 
                padding: isMobile ? "35px" : "",
                marginBottom: isMobile ? "20px" : ""
              }} onClick={() => {window.scrollTo(0,0);navigate("/services")}}
              className="btn-getQuote d-flex align-items-center">
                  <span className='mx-3' style={{fontSize: isMobile ? 34 : 18}}>
                    GET BROCHURE
                  </span>
              </button>
          </div>
        </div>
        
        <div className={`d-flex align-items-center ${isMobile ? "d-none" : ""}`}>
          <img style={{
            maxWidth: isMobile ? "100%" : 441,
            maxHeight: isMobile ? "auto" : 524,
            height: isMobile ? 420 : ""
          }} 
          src="/mainServiceSection/mainImage.png" alt="construction" />
        </div>
    </div>
  );
};

export default Services;