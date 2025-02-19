import React, { useContext } from 'react';
import MyContext from "../../config/contextFile"

const Services = () => {
  const services = [
    {
      title:"Design",
      content: "With the assistance of skilled team of professionals, we are offering the Design Works.",
      cardImge: "/bestServiceSection/design.png"
    },
    {
      title:"Build",
      content: "Assisted by rich industrial experience and modern technical knowledge, we are able to offer Building Work Service.",
      cardImge: "/bestServiceSection/build.png"
    },
    {
      title:"Maintenance",
      content: "With the support and sincere efforts put by our experienced professionals, we provide maintenance services.",
      cardImge: "/bestServiceSection/maintenance.png"
    }
  ];

  const {isMobile} = useContext(MyContext)

  return (
    <section className="mt-5 mb-5">
        <br /><br />
        <h1 style={{
          fontSize:isMobile?57:""
        }} 
        className="font-Raleway fw-bold text-center">
            What We Offer
        </h1>
        <p style={{fontSize:isMobile?30:22}} 
        className="mt-3 text-theme fw-bold text-center font-Raleway">
            Our best services
        </p>
        <br /><br />
        <div className={`d-flex flex-wrap justify-content-center gap-4 ${isMobile&&"flex-column align-items-center"}`}>
            {services.map(service=>
                <div style={{
                    backgroundImage:`url('${service.cardImge}')`,
                    position:"relative",
                    width:isMobile?"70%":359,
                    height: isMobile?832:432,
                    backgroundSize:"cover"
                }}>
                    <h3 style={{
                        fontSize:isMobile?42:22,
                        left: service.title=="Design" ? "40%": service.title=="Build" ?  "42%":"30%",
                        top: "24%",
                    }} 
                    className="company-text fw-bold position-absolute">
                        {service.title}
                    </h3>
                    <p style={{
                        color:"#666666",
                        fontSize:isMobile?30:15,
                        lineHeight:"31px",
                        bottom:"1%",
                        left: "4%",
                        width:isMobile?"":340  
                    }} 
                    className="position-absolute">
                        {service.content}
                    </p>
                </div>
            )}
        </div>
        <br /><br /><br />
    </section>    
  );
};

export default Services;