import React, { useState, useContext } from 'react';
import MyContext from '../../config/contextFile';

import { Link } from 'react-router-dom';

import { FaAnglesRight } from "react-icons/fa6";

const Features = () => {
  const {isMobile, t} = useContext(MyContext);
  return (
    <div className='position-relative' 
    style={{backgroundImage:"url(/featuresBG.jpg)",minHeight:380,height:"auto"}}>
        <div className={`${isMobile?"pb-4 p-5":"position-absolute"} w-100`} style={{bottom:"25%"}}>
          <div className={`d-flex flex-wrap justify-content-around ${isMobile?"flex-column justify-content-center gap-4 align-items-center pt-4":""}`}>
            <FeatureCard isMobile={isMobile} BGcolorClass="bg-theme" iconImage="buildingLogo.png" title={t('home.features.qualityTitle')}
            content={t('home.features.qualityContent')} readLabel={t('home.features.readMore')} />
            <FeatureCard isMobile={isMobile} BGcolorClass="bg-dark" iconImage="group.png" title={t('home.features.professionalsTitle')}
            content={t('home.features.professionalsContent')} readLabel={t('home.features.readMore')} />
            <FeatureCard isMobile={isMobile} BGcolorClass="bg-white" iconImage="support.png" title={t('home.features.supportTitle')} 
            content={t('home.features.supportContent')} readLabel={t('home.features.readMore')} />
            <br />
          </div>
        </div>
    </div>
  );
};


function FeatureCard(props){
  const [readButtonHovered, setReadButtonHovered] = useState(false);
  const isMobile = props.isMobile;
  return (
    <div style={{width: isMobile ? "95%" : 320, height: isMobile ? 500 : 350, padding: isMobile ? "20px" : "12px"}} 
    className={`card ${props.BGcolorClass === "bg-white" ? "text-dark" : "text-white"} border-0 shadow-lg pt-5 pb-3 px-3 ${props.BGcolorClass} ${isMobile && "px-5"}`}>
      <img height={isMobile ? 120 : 40} width={isMobile ? 120 : 40} 
      src={`/featureCard/${props.iconImage}`} alt={`${props.iconImage}`} />
      <h5 className='fw-bold mt-3 company-text' style={{fontSize: isMobile ? 40 : 22, lineHeight: isMobile ? "45px" : "30px"}}>{props.title}</h5>
      <br />
      <p style={{fontSize: isMobile ? 24 : 15, lineHeight: isMobile ? "36px" : "31px", marginBottom: isMobile ? "20px" : ""}}>
        {props.content}
      </p>
      <div>
        <Link to="/about-us" onClick={() => window.scrollTo(0, 0)} style={{fontSize: isMobile ? 24 : 15}} 
        onMouseEnter={() => setReadButtonHovered(true)}
        onMouseLeave={() => setReadButtonHovered(false)}
        className={`mt-1 fw-bold text-decoration-none ${readButtonHovered ? props.BGcolorClass === "bg-dark" ? "text-white" : "text-dark" : props.BGcolorClass === "bg-theme" ? "text-white" : "text-theme"}`}>
          {props.readLabel || 'Read more'} &nbsp;
          <FaAnglesRight />
        </Link>
      </div>
    </div>
  );
}

export default Features;