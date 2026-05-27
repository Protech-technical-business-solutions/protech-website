import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MyContext from "../config/contextFile"

import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram,FaGoogle,FaLinkedin,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import getAllServices from '../pages/services/allServices';
import { localizeDigits } from '../config/localization';

const Footer = () => {
  const navigate = useNavigate();
  const {isMobile, locale, t} = useContext(MyContext)
  const allServices = getAllServices(locale)
  const year = new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA-u-nu-arab' : 'en-US', { year: 'numeric' }).format(new Date())
  const primaryPhone = localizeDigits('+ 966 572744600', locale)
  const secondaryPhone = localizeDigits('+ 966 580681213', locale)
  return (
    <section style={{width:"100%"}}>
      <div className={`px-4 ${isMobile ? "pt-5" :"py-4"} d-flex flex-wrap justify-content-around bg-theme text-white fw-bold`}>
        <div className={`${isMobile ? "text-center" : ""}`}>
          <h4 style={{
            fontSize:isMobile?28:""
          }} 
          className="company-text text-center">
          {t('footer.tagline')}
          </h4>
          <br />
          <h3 style={{
            fontSize:isMobile?42:31
          }}>
            {t('footer.cta')}
          </h3>
          {isMobile&&<br />}
        </div>
        <div className='d-flex align-items-center mt-2'>
          <button style={{
            fontSize:isMobile?30:""
          }} onClick={() => {window.scrollTo(0,0);navigate("/contact-us")}}
          className={`btn-footer-quote px-5 py-4 ${isMobile && "mb-5"} rounded-2 border-0 text-center fw-bold font-Raleway`}>
            {t('header.quote')}
          </button>
        </div>
      </div>
    <footer 
    // style={{width:"99.23645%"}} 
    className="text-center overflow-hidden bg-dark text-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
        <div className="me-5 d-none d-lg-block">
          <span>{t('pages.shared.socialLine')}</span>
        </div>
        <div>
          <a target='_blank' 
          href="https://www.linkedin.com/in/m-ayyub-sayeed-32a1067b/" className="me-4 text-reset">
            <FaLinkedin size={isMobile?40:""} 
            className='text-light text-hover-theme' />
          </a>
          <a target='_blank' 
          href="https://www.linkedin.com/in/m-ayyub-sayeed-32a1067b/" className="me-4 text-reset">
            <FaGoogle size={isMobile?40:""} 
            className='text-light text-hover-theme' />
          </a>
          <a target='_blank' 
          href="https://www.linkedin.com/in/m-ayyub-sayeed-32a1067b/" className="me-4 text-reset">
            <FaInstagram size={isMobile?40:""} 
            className='text-light text-hover-theme' />
          </a>
          <a target='_blank' 
          href="https://www.linkedin.com/in/m-ayyub-sayeed-32a1067b/" className="me-4 text-reset">
            <TiSocialFacebook size={isMobile?50:22} 
            className='text-light text-hover-theme' />
          </a>
        </div>
      </section>

      <section>
        <div className="text-center text-md-start mt-5">
          <div className={`mt-3 ${isMobile?"column":"row"}`}>
            <div className="col-md-8 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 style={{fontSize:isMobile?45:25}} 
              className="text-uppercase fw-bold mb-4 mt-5">
                <span className="company-name-text">{t('brand.short')}</span>
              </h6>
              <p style={{fontSize:isMobile?30:""}}>
                {t('footer.intro')}
              </p>
            </div>
            <div className="col-md-8 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 style={{
                fontSize:isMobile?34:""
              }}
              className="text-uppercase fw-bold mb-4 mt-5">{t('footer.quickLinks')}</h6>
              <p style={{fontSize:isMobile?25:""}}><a href="#/" className="text-light text-hover-theme text-decoration-none">{t('header.nav.home')}</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#/about-us" className="text-light text-hover-theme text-decoration-none">{t('header.nav.about')}</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#/services" className="text-light text-hover-theme text-decoration-none">{t('header.nav.services')}</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#/site-works" className="text-light text-hover-theme text-decoration-none">{t('header.nav.siteWorks')}</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#/contact-us" className="text-light text-hover-theme text-decoration-none">{t('header.nav.contact')}</a></p>
            </div>
            <div className="col-md-8 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 style={{
                fontSize:isMobile?34:""
              }}
              className="text-uppercase fw-bold mb-4 mt-5">{t('footer.services')}</h6>
              {allServices.map(service=>
                <p style={{fontSize:isMobile?25:""}}><a href={`#/services#${service.id}`} className="text-light text-hover-theme text-decoration-none">{service.title}</a></p>
              )}
            </div>
            <div className="col-md-8 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 style={{
                fontSize:isMobile?34:""
              }}
              className="text-uppercase fw-bold mb-4 mt-5">{t('footer.contact')}</h6>
              <p style={{fontSize:isMobile?25:""}}><IoLocationSharp className='me-3 text-theme' /> {t('pages.shared.officeAddress')}</p>
              <p style={{fontSize:isMobile?25:""}}><MdEmail className='me-3 text-theme'/>ayyubsayeed@protech-saudi.com</p>
              <p style={{fontSize:isMobile?25:""}}><MdEmail className='me-3 text-theme'/>info@protech-saudi.com</p>
              <p style={{fontSize:isMobile?25:""}}><FaPhone className='me-3 text-theme'/> {t('pages.shared.phoneLabel')} {primaryPhone}</p>
              <p style={{fontSize:isMobile?25:""}}><FaPhone className='me-3 text-theme'/> {t('pages.shared.mobileLabel')} {secondaryPhone}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: isMobile ? 25 : ""}}>
        © {year} {t('footer.copyright')}: <a className="text-reset fw-bold" href="https://www.protech-saudi.com/">protech-saudi</a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;