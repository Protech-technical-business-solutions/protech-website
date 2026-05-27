import { useContext } from "react";
import PageBanner from "../../components/PageBanner"
import MyContext from "../../config/contextFile";
import { localizeDigits } from '../../config/localization';

function ContactUs(props){

    const {isMobile, t, locale} = useContext(MyContext)
    const primaryPhone = localizeDigits('(+966) 572744600', locale)
    const secondaryPhone = localizeDigits('(+966) 580681213', locale)

    const EmailCardContent = (props) => {
        return (
            <>
                <div className="d-flex justify-content-around">
                    <p><b>ayyubsayeed@protech-saudi.com</b></p>
                </div>
                <div className="d-flex justify-content-around">
                    <p><b>info@protech-saudi.com</b></p>
                </div>
            </>
        );
    }
    const ContactNumberCardContent = (props) => {
        return (
            <>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">{t('pages.shared.phoneLabel')}</p>
                    <p><b>{primaryPhone}</b></p>
                </div>
                <div className="d-flex justify-content-around">
                    <p className="fw-bold">{t('pages.shared.mobileLabel')}</p>
                    <p><b>{secondaryPhone}</b></p>
                </div>
            </>
        );
    }
    const AddressCardContent = (props) => 
    <p>
    <b>
        {t('pages.shared.companyName')} <br />
        {t('pages.shared.officeAddressLines').map((line, index) => <span key={index}>{line}<br /></span>)}
    </b>
    </p>


    const contactCards = [
        {title:t('pages.contact.address'), Content: ()=><AddressCardContent />, cardImage:"/contactPage/address card.png"},
        {title:t('pages.contact.numbers'), Content:()=><ContactNumberCardContent />, cardImage:"/contactPage/contact card.png"},
        {title:t('pages.contact.email'), Content: ()=><EmailCardContent />, cardImage:"/contactPage/email card.png"},
    ]

    const sendMail = e => {
        e.preventDefault();
        const subject = document.getElementById("SubjectInputContact").value;
        const name = document.getElementById("nameInputContact").value;
        const message = document.getElementById("messageInputContact").value.replace("\n","%0A%0A");
        window.open("mailto:ayyubsayeed@protech-saudi.com?subject="+subject+"&body=From "+name+"%0A%0A"+message)
    }

    return(
        <div>
            <PageBanner bannerTitle={t('pages.contact.banner')} 
            bannerImageURL="/banners/contactPageBanner.jpg" />
            {isMobile ? <><br /><br /></> :<><br /><br /><br /><br /><br /><br /></>}
            <div className={isMobile?"":"container"}>
                <h5 style={{
                    fontSize:isMobile?57:37
                }} 
                className="company-text text-center fw-bold mb-4">
                    {t('pages.contact.title')}
                </h5>
                <p style={{
                    fontSize:isMobile?30:22
                }} className="company-text text-center text-theme">
                    {t('pages.contact.subtitle')}
                </p>
                <br /><br /><br /><br />
                <div className={`d-flex ${isMobile&&"flex-column"} align-items-center justify-content-center flex-wrap gap-5`}>
                    {contactCards.map(contactCard=>
                    <div style={{
                        width:isMobile?"70%":320,
                        height: isMobile?530:450,
                        backgroundSize:"cover",
                        backgroundImage:`url('${contactCard.cardImage}'`
                    }}>
                        <h3 style={{
                            top:isMobile?"50%":"30%",
                            fontSize:isMobile?40:""
                        }} 
                        className="company-text fw-bold position-relative text-center">
                            {contactCard.title}
                        </h3>
                        <div style={{
                            top:isMobile?"70%":"50%",
                            fontSize:isMobile?25:15
                        }} 
                        className="company-text mx-4 fw-light text-light position-relative text-center">
                            <contactCard.Content/>
                        </div>
                    </div>)}
                </div>
                <br /><br /><br /><br />
                <form onSubmit={sendMail} 
                className={isMobile?"mx-5":""}>
                    <div className="mb-3">
                        <label style={{
                            fontSize:isMobile?27:""
                        }} 
                        htmlFor="nameInputContact" className="form-label">{t('pages.contact.name')}</label>
                        <input className="form-control form-control-lg border-3" id="nameInputContact"/>
                    </div>
                    <div className="mb-3">
                        <label style={{
                            fontSize:isMobile?27:""
                        }} 
                        htmlFor="emailInputeContact" className="form-label">{t('pages.contact.emailAddress')}</label>
                        <input type="email" className="form-control form-control-lg border-3" id="emailInputeContact" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label style={{
                            fontSize:isMobile?27:""
                        }} 
                        htmlFor="SubjectInputContact" className="form-label">{t('pages.contact.subject')}</label>
                        <input className="form-control form-control-lg border-3" id="SubjectInputContact"/>
                    </div>
                    <div className="mb-3">
                        <label style={{
                            fontSize:isMobile?27:""
                        }} 
                        htmlFor="messageInputContact" className="form-label">{t('pages.contact.message')}</label>
                        <textarea style={{whiteSpace:"pre-wrap"}} 
                        className="form-control form-control-lg border-3" id="messageInputContact"/>
                        <div className="form-text">{t('pages.contact.response')}</div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit"
                        className="btn btn-lg btn-outline-theme">
                            {t('pages.contact.submit')}
                        </button>
                    </div>
                </form>
                <br /><br /><br /><br />
            </div>
            <div style={{width: "100%"}}>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14502.62049535058!2d46.7127112!3d24.6699966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f041591e9809b%3A0xa6d9f789de27dba3!2sJuice%20Shop!5e0!3m2!1sen!2sqa!4v1761925054529!5m2!1sen!2sqa" width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    );
}



export default ContactUs;