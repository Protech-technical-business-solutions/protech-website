import React, { useContext } from 'react';
import MyContext from "../../config/contextFile"

import { FaAnglesRight } from "react-icons/fa6";

const Services = () => {

    const {isMobile} = useContext(MyContext)
  return (
    <div className={`${isMobile?"py-4":""} d-flex flex-wrap align-items-center justify-content-center gap-5`} 
    style={{minHeight:650,
      backgroundImage:"url('/picturedServiceSection/bg.jpg')"}}>
        <div style={{
        height:isMobile?500:420,
        width:350,
        position:"relative",
        backgroundRepeat:"no-repeat",
        backgroundImage:"url('/picturedServiceSection/interiorDesigning.png')"}}>
            <p style={{
                left:"25%",
                top:"60%"
            }} 
            className="company-text text-white position-absolute">
                Interior Designing
            </p>
            <button style={{
                height:40,
                left:"30%",
                top:"75%"
            }} 
            className="btn-getQuote rounded-pill px-3 d-flex align-items-center fw-bold position-absolute">
                Read more &nbsp;
                <FaAnglesRight />
            </button>
        </div>
        <div style={{
        height:420,
        width:350,
        position:"relative",
        backgroundImage:"url('/picturedServiceSection/HVAC.png')"}}>
            <p style={{
                left:"33%",
                top:"60%"
            }} 
            className="company-text text-white position-absolute">
                HVAC Works
            </p>
            <button style={{
                height:40,
                left:"30%",
                top:"75%"
            }} 
            className="btn-getQuote rounded-pill px-3 d-flex align-items-center fw-bold position-absolute">
                Read more &nbsp;
                <FaAnglesRight />
            </button>
        </div>
        <div style={{
        height:420,
        width:350,
        position:"relative",
        backgroundImage:"url('/picturedServiceSection/fire fighting.png')"}}>
            <p style={{
                left:"32%",
                top:"60%"
            }} 
            className="company-text text-white position-absolute">
                Fire Fighting
            </p>
            <button style={{
                height:40,
                left:"30%",
                top:"75%"
            }} 
            className="btn-getQuote rounded-pill px-3 d-flex align-items-center fw-bold position-absolute">
                Read more &nbsp;
                <FaAnglesRight />
            </button>
        </div>
    </div>
  );
};

export default Services;