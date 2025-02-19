import React, { useState, useContext } from 'react';
import MyContext from '../../config/contextFile';

import { FaAnglesRight } from "react-icons/fa6";

const Features = () => {
  const {isMobile} = useContext(MyContext);
  return (
    <div className='position-relative' 
    style={{backgroundImage:"url(/featuresBG.jpg)",minHeight:380}}>
        <div className={`${isMobile?"pb-4":"position-absolute"} w-100`} style={{bottom:"25%"}}>
          <div className={`d-flex flex-wrap justify-content-around ${isMobile?"flex-column justify-content-center align-items-center pt":""}`}>
            <FeatureCard BGcolorClass="bg-theme" iconImage="buildingLogo.png" title="Quality Products"
            content="To meet the various requirements of the customers, we are involved in providing best industrial quality products." />
            <FeatureCard BGcolorClass="bg-dark" iconImage="group.png" title="Experienced Professionals"
            content="We provide experienced professionals staffing services. We have a team of professionals who have devoted much time in the work field."/>
            <FeatureCard BGcolorClass="bg-white" iconImage="support.png" title="Customer Support" 
            content="Our organization is indulged in offering Customer Care Service to our clients. Any service is incomplete without proper customer service."/>
          </div>
        </div>
    </div>
  );
};


function FeatureCard(props){
  const [readButtonHovered, setReadButtonHovered] = useState(false);
  return (
    <div style={{width:320,height:350}} 
    className={`card ${props.BGcolorClass=="bg-white" ? "text-dark" : "text-white"} border-0 shadow-sm pt-5 pb-3 px-3 ${props.BGcolorClass}`}>
      <img height={40} width={40} 
      src={`/featureCard/${props.iconImage}`} alt={`${props.iconImage}`} />
      <h5 className='fw-ld mt-3 company-text' style={{fontSize:22}}>{props.title}</h5>
      <br />
      <p style={{fontSize:15, lineHeight:"31px"}}>
        {props.content}
      </p>
      <div>
        <a href="#" style={{fontSize:15}}
        onMouseEnter={()=>setReadButtonHovered(true)}
        onMouseLeave={()=>setReadButtonHovered(false)}
        className={`mt-1 fw-bold text-decoration-none ${readButtonHovered ? props.BGcolorClass=="bg-dark" ? "text-white" : "text-dark" : props.BGcolorClass=="bg-theme" ? "text-white" : "text-theme"}`}>
          Read more &nbsp;
          <FaAnglesRight />
        </a>
      </div>
    </div>
  );
}

export default Features;