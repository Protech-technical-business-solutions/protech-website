import { useContext } from "react";
import PageBanner from "../../components/PageBanner"
import MyContext from "../../config/contextFile";
import { localizeDigits } from '../../config/localization';

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const PRIMARY_EMAIL = "ayyubsayeed@protech-saudi.com";
const INFO_EMAIL = "info@protech-saudi.com";

function ContactUs(props){

    const { t, locale } = useContext(MyContext)
    const primaryPhone = localizeDigits('+966 572744600', locale)
    const secondaryPhone = localizeDigits('+966 580681213', locale)

    const contactCards = [
        {
            title: t('pages.contact.address'),
            Icon: IoLocationSharp,
            content: (
                <p>
                    <strong>{t('pages.shared.companyName')}</strong><br />
                    {t('pages.shared.officeAddressLines').map((line, index) => <span key={index}>{line}<br /></span>)}
                </p>
            )
        },
        {
            title: t('pages.contact.numbers'),
            Icon: FaPhone,
            content: (
                <>
                    <p>{t('pages.shared.phoneLabel')} <a href="tel:+966572744600" dir="ltr">{primaryPhone}</a></p>
                    <p>{t('pages.shared.mobileLabel')} <a href="tel:+966580681213" dir="ltr">{secondaryPhone}</a></p>
                </>
            )
        },
        {
            title: t('pages.contact.email'),
            Icon: MdEmail,
            content: (
                <>
                    <p><a href={`mailto:${PRIMARY_EMAIL}`}>{PRIMARY_EMAIL}</a></p>
                    <p><a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a></p>
                </>
            )
        },
    ]

    const sendMail = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const subject = form.subject.value;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const body = `From ${name}${email ? ` <${email}>` : ''}\n\n${message}`;
        window.open(`mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
    }

    return(
        <div>
            <PageBanner bannerTitle={t('pages.contact.banner')}
            bannerImageURL="/banners/contactPageBanner.jpg" />

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">{t('pages.contact.title')}</h2>
                        <p className="section-sub">{t('pages.contact.subtitle')}</p>
                        <div className="title-bar" />
                    </div>

                    <div className="row g-4 justify-content-center">
                        {contactCards.map(card =>
                            <div className="col-12 col-md-6 col-lg-4" key={card.title}>
                                <article className="contact-card">
                                    <span className="contact-card__icon"><card.Icon size={24} /></span>
                                    <h3 className="contact-card__title">{card.title}</h3>
                                    <div className="contact-card__body">{card.content}</div>
                                </article>
                            </div>
                        )}
                    </div>

                    <form onSubmit={sendMail} className="contact-form">
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label htmlFor="nameInputContact" className="form-label">{t('pages.contact.name')}</label>
                                <input name="name" className="form-control form-control-lg" id="nameInputContact" autoComplete="name" required />
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="emailInputeContact" className="form-label">{t('pages.contact.emailAddress')}</label>
                                <input name="email" type="email" className="form-control form-control-lg" id="emailInputeContact" autoComplete="email" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="SubjectInputContact" className="form-label">{t('pages.contact.subject')}</label>
                                <input name="subject" className="form-control form-control-lg" id="SubjectInputContact" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="messageInputContact" className="form-label">{t('pages.contact.message')}</label>
                                <textarea name="message" rows={6} className="form-control form-control-lg" id="messageInputContact" required />
                                <div className="form-text">{t('pages.contact.response')}</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-4">
                            <button type="submit" className="btn-brand px-5">
                                {t('pages.contact.submit')}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <div className="contact-map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14502.62049535058!2d46.7127112!3d24.6699966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f041591e9809b%3A0xa6d9f789de27dba3!2sJuice%20Shop!5e0!3m2!1sen!2sqa!4v1761925054529!5m2!1sen!2sqa" width="100%" height="380" style={{border:0, display:'block'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default ContactUs;
