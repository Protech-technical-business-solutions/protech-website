// components/Services.js
import React, { useContext } from 'react';
import MyContext from '../../config/contextFile';

const Services = () => {

  const {isMobile} = useContext(MyContext);

  const services = [
    {
      title:"Architecture",
      content: "We also Providing Interior Architecture Services to our valuable clients across Saudi Arabia",
      iconImage: "/mainServiceSection/architect.png"
    },
    {
      title:"Construction",
      content: "We also Providing Interior Architecture Services to our valuable clients across Saudi Arabia",
      iconImage: "/mainServiceSection/construction.png"
    }
  ];

  return (
    <div className={`d-flex gap-5 flex-wrap ${isMobile?"px-3 mx-5":"container"}`} 
    style={{minHeight:841,
      backgroundImage:"url('/mainServiceSection/background.jpg')"}}>
        
        <div>
          <p style={{fontSize:22}}
          className="company-text mt-5 text-theme fw-bolder mb-2">
            We offer the best services
          </p>
          <div style={{height:120}}>
            <h3 className='company-text text-dark' style={{fontSize:37,lineHeight:"50px"}}>
            We offer the best services
            </h3>
            <h3 className='company-text text-dark' style={{fontSize:37,lineHeight:"50px"}}>
            for our clients
            </h3>
          </div>
          <div className='bg-theme mb-3'
          style={{
            minWidth:100,
            width:100,
            minHeight:3,
            height:3,
            marginBottom:isMobile?10:""
          }}>
          </div>
          <p style={{width:isMobile?"auto":470, fontSize:isMobile?25:20, lineHeight:"33px"}}
          className="company-text fw-normal">
          Protech Group provides a complete range of Interior Design, and Electro Mechanical Services.        </p>
          <p style={{width:isMobile?"auto":670, fontSize:isMobile?20:15, lineHeight:"31px", color:"#666666"}}
          className="mt-3">
            Protech Group was formed with one visionary mind set to allow property owners, developers, architects and general contractors to deliver a competitive edge for their projects. Capital Dynamics provides a complete range of Interior Design, Fitout Works and Electro Mechanical services though highly experienced Engineering & Project Management teamfully complying to time, cost and quality requirements of projects.
          </p>
          <div className="d-flex gap-4 mt-4 flex-wrap">
            {services.map(service=>
            <div style={{
              width:isMobile?"auto":300,
              height:210
            }}
            className="border border-theme border-2 px-3 py-3">
                <div className="d-flex gap-3 align-items-center">
                    <img src={service.iconImage} alt="image"
                    style={{
                      width:45,
                      height:45,
                    }} />
                    <h5 className="company-text fw-bold">
                      {service.title}
                    </h5>
                </div>
                <p style={{fontSize:15, lineHeight:"31px", color:"#666666"}}
                className="mt-3">
                  {service.content}
                </p>
            </div>
            )}
          </div>
          <div className={`d-flex gap-4 flex-wrap ${isMobile?"justify-content-center pb-4 mt-3":"mt-5"}`}>
              <button style={{height:50}}
              className="btn-getQuote">
                  <span className='mx-3' style={{fontSize:18}}>
                    READ MORE
                  </span>
              </button>
              <button style={{height:50}}
              className="btn-getQuote">
                  <span className='mx-3' style={{fontSize:18}}>
                    GET BROCHURE
                  </span>
              </button>
          </div>
        </div>
        
        <div className={`d-flex align-items-center ${isMobile?"d-none":""}`}>
          <img style={{
            maxWidth:441,
            maxHeight:524,
            height: isMobile ? 400 :""
          }} 
          src="/mainServiceSection/mainImage.png" alt="construction" />
        </div>
    </div>
  );
};

export default Services;