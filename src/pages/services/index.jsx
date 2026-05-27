import { useContext } from "react";

import MyContext from "../../config/contextFile"

import PageBanner from "../../components/PageBanner";
import getAllServices from "./allServices";


export default function ServicesPage(){
    const { isMobile, locale, t } = useContext(MyContext)
    const allServices = getAllServices(locale)
    return(
        <div>
            <PageBanner bannerTitle={t('pages.services.banner')}
            bannerImageURL="/banners/servicePageBanner.webp" />
            {isMobile?<><br /><br /></> : <><br /><br /><br /><br /><br /></>}
            <h5 style={{
                fontSize:isMobile?57:37
            }} 
            className="company-text text-center fw-bold mb-4">
                {t('pages.services.title')}
            </h5>
            <p style={{
                fontSize:isMobile?30:22
            }} className="company-text text-center text-theme">
                {t('pages.services.subtitle')}
            </p>
            {isMobile?<br /> : <><br /><br /><br /><br /><br /></>}
            <div className="mb-5">
                {allServices.map((service,idx,_)=>
                    <div className="py-5"
                    style={{
                        backgroundColor: idx%2==0? "white" : "#f1f1f1"
                    }}>
                        <div key={service.id} id={service.id} 
                        className={isMobile?"":"container"}>
                            <br />
                            <h1 style={{
                                fontSize:isMobile?40:31, fontWeight:"bold"
                            }} className={`${isMobile?"text-center":""}`}>
                                {service.title}
                            </h1>
                            <br />
                            <div className={`d-flex flex-wrap justify-content-around ${isMobile&&"flex-column"}`}>
                                {isMobile? 
                                <img style={{
                                    width:"70%"
                                }}
                                src={service.image} alt="Service Image" className="mx-auto mb-5" />
                                :
                                <div>
                                    <img style={{
                                        width:380
                                    }}
                                    src={service.image} alt="Service Image" />
                                </div>
                                }
                                <div style={{
                                    minHeight:234,
                                }}
                                className="flex-grow-1 d-flex justify-content-center">
                                    <ul style={{
                                        maxWidth:500
                                    }}>
                                        {service.items.map(servicee=>
                                            <li style={{fontSize:isMobile?25:15, lineHeight:"33px", color:"#666666"}}
                                            className="mt-4">{servicee}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div id="Electrical Services" 
                className="py-5"
                style={{
                    backgroundColor:"#f1f1f1"
                }}>
                    <div className={isMobile?"":"container"}>
                        <br />
                        <h1 style={{
                            fontSize:isMobile?40:31, fontWeight:"bold"
                        }} className={`${isMobile?"text-center":""}`}>
                            {t('pages.services.electricalTitle')}
                        </h1>
                        <br />
                        <div className={`d-flex flex-wrap justify-content-around ${isMobile&&"flex-column"}`}>
                            {isMobile? 
                            <img style={{
                                width:"70%"
                            }}
                            src="/servicesPage/electrical.jpg" alt="Service Image" className="mx-auto mb-5" />
                            :
                            <div>
                                <img style={{
                                    width:380
                                }}
                                src="/servicesPage/electrical.jpg" alt="Service Image" />
                            </div>
                            }
                            <div style={{
                                minHeight:234,
                            }}
                            className="flex-grow-1 d-flex justify-content-center">
                                <p style={{fontSize:isMobile?25:15, lineHeight:"33px", color:"#666666", maxWidth:500}}
                                className="mt-4 mx-">
                                    {t('pages.services.electricalBody')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}