import PageBanner from "../../components/PageBanner"

function AboutUs(props){

    const EmailCardContent = (props) => <p><b>ayyubsayeed@protech-saudi.com</b></p>
    const ContactNumberCardContent = (props) => {
        return (
            <>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Phone:</p>
                    <p><b>(+966) 572744600</b></p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Mobile:</p>
                    <p><b>(+966) 572744600</b></p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Fax:</p>
                    <p><b>(+966) 572744600</b></p>
                </div>
            </>
        );
    }
    const AddressCardContent = (props) => <p><b>Protech Technical Solutions & Business Services <br /> Riyadh, PO.Box : 1234 <br /> Saudi Arabia</b></p>

    const contactCards = [
        {title:"Address", Content: ()=><AddressCardContent />, cardImage:"/contactPage/address card.png"},
        {title:"Contact Numbers", Content:()=><ContactNumberCardContent />, cardImage:"/contactPage/contact card.png"},
        {title:"E-Mail", Content: ()=><EmailCardContent />, cardImage:"/contactPage/email card.png"},
    ]

    return(
        <div>
            <PageBanner bannerTitle="About Us" 
            bannerImageURL="/banners/aboutPageBanner.webp" />
            <br /><br /><br /><br /><br /><br />
            <div className="container">
                <h5 style={{
                    fontSize:37
                }} 
                className="company-text text-center fw-bold mb-4">
                    About Protech Group
                </h5>
                <p style={{
                    fontSize:22
                }} className="company-text text-center text-theme">
                    know more about us
                </p>
                <br /><br /><br /><br />
                <div className="d-flex gap-5">
                    <div>
                        <p style={{fontSize:15, lineHeight:"33px", color:"#666666"}}
                        className="mt-3">
                                Protech is empowered with the fnest ﬂeet of Architects, Civil, Structural, Mechanical & Electrical Engineers as the stamp of distinctive genius for clarity and precision in the projects we execute. The combination of the wide range of knowledge and experience in this feld allows us for a creative and practical engineering solutions and implementations. We have grown exponentially and have always maintained commitment to provide the best craftsmanship and level of expertise to meet our client's requirements. All disciplines are housed and managed within a single company in order to maximize coordination, communication and effciency. This all creates a truly legitimate MEP construction and service company.
                        </p>
                    </div>
                    <div>
                        <img style={{
                            width:550,
                            height:320
                        }}
                        src="/aboutPage/engineer.png" alt="engineer" />
                    </div>
                </div>
                <br />
                <p style={{fontSize:15, lineHeight:"33px", color:"#666666"}}>
                    Protech was formed with one visionary mind set to allow property owners, developers, architects and general contractors to deliver a competitive edge for their projects. Capital Dynamics provides a complete range of Interior Design, Fitout Works and Electro Mechanical services though highly experienced Engineering & Project Management teamfully complying to time, cost and quality requirements of projects.     
                </p>
                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
}



export default AboutUs;