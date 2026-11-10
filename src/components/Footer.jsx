import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MyContext from "../config/contextFile"

import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaGoogle, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import getAllServices from '../pages/services/allServices';
import { localizeDigits } from '../config/localization';
import BrandLogo from './BrandLogo';
import './Footer.css';

const SOCIAL_URL = "https://www.linkedin.com/in/m-ayyub-sayeed-32a1067b/";

const Footer = () => {
  const { locale, t } = useContext(MyContext)
  const allServices = getAllServices(locale)
  const year = new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA-u-nu-arab' : 'en-US', { year: 'numeric' }).format(new Date())
  const primaryPhone = localizeDigits('+966 572744600', locale)
  const secondaryPhone = localizeDigits('+966 580681213', locale)

  const socials = [
    { Icon: FaLinkedin, label: 'LinkedIn' },
    { Icon: FaGoogle, label: 'Google' },
    { Icon: FaInstagram, label: 'Instagram' },
    { Icon: TiSocialFacebook, label: 'Facebook' },
  ];

  return (
    <footer className="site-footer">
      {/* ---- call to action band ---- */}
      <section className="footer-cta">
        <div className="container footer-cta__inner">
          <div>
            <p className="footer-cta__tagline">{t('footer.tagline')}</p>
            <h2 className="footer-cta__title">{t('footer.cta')}</h2>
          </div>
          <Link to="/contact-us" className="btn-brand btn-brand--dark footer-cta__btn">
            {t('header.quote')}
          </Link>
        </div>
      </section>

      {/* ---- main footer ---- */}
      <div className="footer-main">
        <div className="container">
          <div className="row gx-4 gx-lg-5 gy-5">
            <div className="col-12 col-lg-4">
              <Link to="/" aria-label={t('brand.full')} className="d-inline-flex">
                <BrandLogo variant="light" />
              </Link>
              <p className="footer-main__intro">{t('footer.intro')}</p>
              <p className="footer-main__social-label">{t('pages.shared.socialLine')}</p>
              <div className="footer-social">
                {socials.map(({ Icon, label }) => (
                  <a key={label} href={SOCIAL_URL} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h3 className="footer-heading">{t('footer.quickLinks')}</h3>
              <ul className="footer-links">
                <li><Link to="/">{t('header.nav.home')}</Link></li>
                <li><Link to="/about-us">{t('header.nav.about')}</Link></li>
                <li><Link to="/services">{t('header.nav.services')}</Link></li>
                <li><Link to="/site-works">{t('header.nav.siteWorks')}</Link></li>
                <li><Link to="/contact-us">{t('header.nav.contact')}</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <h3 className="footer-heading">{t('footer.services')}</h3>
              <ul className="footer-links">
                {allServices.map(service =>
                  <li key={service.id}><HashLink smooth to={`/services#${service.id}`}>{service.title}</HashLink></li>
                )}
              </ul>
            </div>

            <div className="col-12 col-md-4 col-lg-3">
              <h3 className="footer-heading">{t('footer.contact')}</h3>
              <ul className="footer-contact">
                <li><IoLocationSharp aria-hidden="true" /><span>{t('pages.shared.officeAddress')}</span></li>
                <li><MdEmail aria-hidden="true" /><a href="mailto:ayyubsayeed@protech-saudi.com">ayyubsayeed@protech-saudi.com</a></li>
                <li><MdEmail aria-hidden="true" /><a href="mailto:info@protech-saudi.com">info@protech-saudi.com</a></li>
                <li><FaPhone aria-hidden="true" /><span>{t('pages.shared.phoneLabel')} <a href="tel:+966572744600" dir="ltr">{primaryPhone}</a></span></li>
                <li><FaPhone aria-hidden="true" /><span>{t('pages.shared.mobileLabel')} <a href="tel:+966580681213" dir="ltr">{secondaryPhone}</a></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {year} {t('footer.copyright')}: <a href="https://www.pertech.com.sa/">{t('brand.full')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
