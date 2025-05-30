import { useContext } from "react";
import PageBanner from "../../components/PageBanner"
import MyContext from "../../config/contextFile";

function ContactUs(props){

    const {isMobile} = useContext(MyContext)

    const EmailCardContent = (props) => {
        return (
            <>
                <div className="d-flex justify-content-around">
                    <p><b>ayyubsayeed@protech-saudi.com</b></p>
                </div>
                <div className="d-flex justify-content-around">
                    <p><b>imran@protech-saudi.com</b></p>
                </div>
            </>
        );
    }
    const ContactNumberCardContent = (props) => {
        return (
            <>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Phone:</p>
                    <p><b>(+966) 572744600</b></p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">Mobile:</p>
                    <p><b>(+966) 580681213</b></p>
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
            <PageBanner bannerTitle="Contact Us" 
            bannerImageURL="/banners/contactPageBanner.jpg" />
            {isMobile ? <><br /><br /></> :<><br /><br /><br /><br /><br /><br /></>}
            <div className="container">
                <h5 style={{
                    fontSize:isMobile?57:37
                }} 
                className="company-text text-center fw-bold mb-4">
                    Get in touch with us
                </h5>
                <p style={{
                    fontSize:isMobile?30:22
                }} className="company-text text-center text-theme">
                    View our all contacts
                </p>
                <br /><br /><br /><br />
                <div className={`d-flex ${isMobile&&"flex-column"} align-items-center justify-content-center flex-wrap gap-5`}>
                    {contactCards.map(contactCard=>
                    <div style={{
                        width:isMobile?"70%":320,
                        height: isMobile?"auto":342,
                        backgroundSize:"cover",
                        backgroundImage:`url('${contactCard.cardImage}'`
                    }}>
                        <h3 style={{
                            top:"30%"
                        }} 
                        className="company-text fw-bold position-relative text-center">
                            {contactCard.title}
                        </h3>
                        <div style={{
                            top:"50%",
                            fontSize:15
                        }} 
                        className="company-text mx-4 fw-light text-light position-relative text-center">
                            <contactCard.Content/>
                        </div>
                    </div>)}
                </div>
                <br /><br /><br /><br />
                <form className={`${isMobile? "px-3": ""}`}>
                    <div class="mb-3">
                        <label for="nameInputContact" class="form-label">Name</label>
                        <input class="form-control" id="nameInputContact"/>
                    </div>
                    <div class="mb-3">
                        <label for="emailInputeContact" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="emailInputeContact" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="addressInputContact" class="form-label">Address</label>
                        <input class="form-control" id="addressInputContact"/>
                    </div>
                    <div class="mb-3">
                        <label for="messageInputContact" class="form-label">Message</label>
                        <textarea class="form-control" id="messageInputContact"/>
                        <div class="form-text">We respond within 2 days.</div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" class="btn btn-outline-theme">Submit</button>
                    </div>
                </form>
                <br /><br /><br /><br />
            </div>
            <div style={{width: "100%"}}><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Riyadh+(Protech%20Saudi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps handsets</a></iframe></div>
        </div>
    );
}



export default ContactUs;