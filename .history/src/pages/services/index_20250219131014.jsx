import { useContext } from "react";

import MyContext from "../../config/contextFile"

import PageBanner from "../../components/PageBanner";
import allServices from "./allServices";


export default function ServicesPage(){
    const { isMobile } = useContext(MyContext)
    return(
        <div>
            <PageBanner bannerTitle="Services"
            bannerImageURL="/banners/servicePageBanner.webp" />
            {isMobile?<><br /><br /></> : <><br /><br /><br /><br /><br /></>}
            <h5 style={{
                fontSize:isMobile?57:37
            }} 
            className="company-text text-center fw-bold mb-4">
                Services we provide
            </h5>
            <p style={{
                fontSize:isMobile?30:22
            }} className="company-text text-center text-theme">
                View all our services
            </p>
            {isMobile?<br /> : <><br /><br /><br /><br /><br /></>}
            <div className="mb-5">
                {allServices.map((service,idx,_)=>
                    <div className="py-5"
                    style={{
                        backgroundColor: idx%2==0? "white" : "#f1f1f1"
                    }}>
                        <div className={isMobile?"":"container"}>
                            <br />
                            <h1 style={{
                                fontSize:isMobile?40:31, fontWeight:"bold"
                            }} className={`${isMobile?"text-center":""}`}>
                                {service.title}
                            </h1>
                            <br />
                            <div className={`d-flex flex-wrap justify-content-around ${isMobile&&"flex-column justify-content-center mx-auto text-center"}`}>
                                {/* <div> */}
                                    <img style={{
                                        width:isMobile?"70%":380, height:"auto",
                                    }}
                                    src={service.image} alt="Service Image" />
                                {/* </div> */}
                                <div style={{
                                    minHeight:234,
                                }}
                                className="flex-grow-1 d-flex justify-content-center">
                                    <ul>
                                        {service.services.map(servicee=>
                                            <li style={{fontSize:isMobile?25:15, lineHeight:"33px", color:"#666666"}}
                                            className="mt-3">{servicee}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="py-5"
                style={{
                    // backgroundColor: idx%2==0? "white" : "#f1f1f1"
                }}>
                    <div className="container">
                        <br />
                        <h1 style={{
                            fontSize:31, fontWeight:"bold"
                        }}>
                            Electrical Services
                        </h1>
                        <br />
                        <div className="d-flex flex-wrap justify-content-between">
                            <div>
                                <img style={{
                                    width:380, height:270,
                                }}
                                src="/servicesPage/electrical.jpg" alt="Service Image" />
                            </div>
                            <div style={{
                                minHeight:234,
                            }}
                            className="flex-grow-1 d-flex justify-content-center">
                                <p style={{
                                    fontSize:15, lineHeight:"33px", color:"#666666",
                                    maxWidth:600}}>
                                    We are a friendly team of electricians who understand that you want a reliable and cost efficient solution. With years of experience in this domain, we are providing our clients with superior grade Electrical Services. We offer an exclusive range of this Electrical Maintenance services to our customers.
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