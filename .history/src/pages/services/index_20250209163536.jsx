import PageBanner from "../../components/PageBanner";


export default function Services(){
    return(
        <div>
            <PageBanner bannerTitle="Services"
            bannerImageURL="/banners/servicePageBanner.webp" />
            <br /><br /><br /><br /><br /><br />
            <div className="container">
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
            </div>
        </div>
    );
}