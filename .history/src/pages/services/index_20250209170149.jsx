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
                        backgroundColor: idx%2==0? "white" : "#c0c0c090"
                    }}>
                        <div className="container">
                            <h1 style={{
                                fontSize:31
                            }}>
                                {service.title}
                            </h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}