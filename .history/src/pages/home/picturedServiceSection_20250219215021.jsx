import React, { useContext } from 'react';
import MyContext from "../../config/contextFile"

import { HashLink } from 'react-router-hash-link'; // this is for navigating into a specific div (we need it as we used hashrouter!)

import { FaAnglesRight } from "react-icons/fa6";

const Services = () => {

    const {isMobile} = useContext(MyContext)
  return (
    <div className={`${isMobile?"py-4 flex-column":""} d-flex flex-wrap align-items-center justify-content-center gap-5`} 
    style={{minHeight:650,
      backgroundImage:"url('/picturedServiceSection/bg.jpg')"}}>
        <div style={{
        height:isMobile?600:420,
        width:isMobile?"70%":350,
        backgroundSize:"cover",
        position:"relative",
        backgroundRepeat:"no-repeat",
        backgroundImage:"url('/picturedServiceSection/interiorDesigning.png')"}}>
            <p style={{
                left:"20%",
                top:"60%",
                fontSize:isMobile?50:""
            }} 
            className="company-text text-white position-absolute">
                Interior Designing
            </p>
            <HashLink to="/services#Interior Design"> {/* needed to get into that specific div with the ID "Interior Design"!! */}
                <button style={{
                    height:isMobile?70:40,
                    left:"30%",
                    top:"75%",
                    fontSize:isMobile?25:""
                }}
                className="btn-getQuote rounded-pill px-5 d-flex align-items-center fw-bold position-absolute">
                    Read more &nbsp;
                    <FaAnglesRight />
                </button>
            </HashLink>
        </div>
        <div style={{
        height:isMobile?600:420,
        width:isMobile?"70%":350,
        backgroundSize:"cover",
        position:"relative",
        backgroundRepeat:"no-repeat",
        backgroundImage:"url('/picturedServiceSection/HVAC.png')"}}>
            <p style={{
                left:"33%",
                top:"60%",
                fontSize:isMobile?50:""
            }} 
            className="company-text text-white position-absolute">
                HVAC Works
            </p>
            <HashLink to="/services#HVAC Works">
                <button style={{
                    height:isMobile?70:40,
                    left:"30%",
                    top:"75%",
                    fontSize:isMobile?25:""
                }}
                className="btn-getQuote rounded-pill px-5 d-flex align-items-center fw-bold position-absolute">
                    Read more &nbsp;
                    <FaAnglesRight />
                </button>
            </HashLink>
        </div>
        <div style={{
        height:isMobile?600:420,
        width:isMobile?"70%":350,
        backgroundSize:"cover",
        position:"relative",
        backgroundRepeat:"no-repeat",
        backgroundImage:"url('/picturedServiceSection/fire fighting.png')"}}>
            <p style={{
                left:"32%",
                top:"60%",
                fontSize:isMobile?50:""
            }} 
            className="company-text text-white position-absolute">
                Fire Fighting
            </p>
            <button style={{
                height:isMobile?70:40,
                left:"30%",
                top:"75%",
                fontSize:isMobile?25:""
            }} 
            className="btn-getQuote rounded-pill px-5 d-flex align-items-center fw-bold position-absolute">
                Read more &nbsp;
                <FaAnglesRight />
            </button>
        </div>
    </div>
  );
};

export default Services;