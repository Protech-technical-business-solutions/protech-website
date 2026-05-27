import React, { useContext } from 'react';
import MyContext from "../../config/contextFile"

const Services = () => {
  const {isMobile, t} = useContext(MyContext)

  const localizedServices = [
    {
      title: t('home.best.design'),
      content: t('home.best.designContent'),
      cardImge: "/bestServiceSection/design.png"
    },
    {
      title: t('home.best.build'),
      content: t('home.best.buildContent'),
      cardImge: "/bestServiceSection/build.png"
    },
    {
      title: t('home.best.maintenance'),
      content: t('home.best.maintenanceContent'),
      cardImge: "/bestServiceSection/maintenance.png"
    }
  ]

  return (
    <section className="mt-5 mb-5">
        <br /><br />
        <h1 style={{
          fontSize:isMobile?57:""
        }} 
        className="font-Raleway fw-bold text-center">
          {t('home.best.title')}
        </h1>
        <p style={{fontSize:isMobile?30:22}} 
        className="mt-3 text-theme fw-bold text-center font-Raleway">
          {t('home.best.subtitle')}
        </p>
        <br /><br />
        <div className={`d-flex flex-wrap justify-content-center gap-4 ${isMobile&&"flex-column align-items-center"}`}>
            {localizedServices.map((service, index)=>
                <div style={{
                    backgroundImage:`url('${service.cardImge}')`,
                    position:"relative",
                    width:isMobile?"70%":359,
                    height: isMobile?832:432,
                    backgroundSize:"cover"
                }}>
                    <h3 style={{
                        fontSize:isMobile?42:22,
                  left: index === 0 ? "40%": index === 1 ?  "42%":"30%",
                        top: "24%",
                    }} 
                    className="company-text fw-bold position-absolute">
                        {service.title}
                    </h3>
                    <p style={{
                        color:"#666666",
                        fontSize:isMobile?30:15,
                        lineHeight:isMobile?"":"31px",
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