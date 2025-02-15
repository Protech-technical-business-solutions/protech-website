import PageBanner from "../../components/PageBanner";
import allServices from "./allServices";


export default function ServicesPage(){
    return(
        <div>
            <PageBanner bannerTitle="Services"
            bannerImageURL="/banners/servicePageBanner.webp" />
            <br /><br /><br /><br /><br /><br />
            <h5 style={{
                fontSize:37
            }} 
            className="company-text text-center fw-bold mb-4">
                Services we provide
            </h5>
            <p style={{
                fontSize:22
            }} className="company-text text-center text-theme">
                View all our services
            </p>
            <br /><br /><br /><br />
            <div className="mb-5">
                {allServices.map((service,idx,_)=>
                    <div className="py-5"
                    style={{
                        backgroundColor: idx%2==0? "white" : "#f1f1f1"
                    }}>
                        <br />
                        <div className="container d-flex flex-wrap justify-content-around align-items-center">
                            <div>
                                <h1 style={{
                                    fontSize:31, fontWeight:"bold"
                                }}>
                                    {service.title}
                                </h1>
                                <br /><br />    
                                <img style={{
                                    width:380, height:270,
                                }} 
                                src={service.image} alt="Service Image" />
                            </div>
                            <div className="flex-grow-1">
                                <ul>
                                    {service.services.map(servicee=>
                                        <li>{servicee}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}