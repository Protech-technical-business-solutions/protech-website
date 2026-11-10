import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";

// icons
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { localizeDigits } from '../config/localization';

// our context
import MyContext from '../config/contextFile';
import BrandLogo from './BrandLogo';
import './Header.css';

const NAV_ITEMS = [
  { to: "/", key: 'header.nav.home', end: true },
  { to: "/about-us", key: 'header.nav.about' },
  { to: "/services", key: 'header.nav.services' },
  { to: "/site-works", key: 'header.nav.siteWorks' },
  { to: "/contact-us", key: 'header.nav.contact' },
];

const Header = () => {
  const { locale, setLocale, isArabic, t } = useContext(MyContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const primaryPhone = localizeDigits('+966 572744600', locale);

  // close the mobile menu whenever the route changes
  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  // add a shadow to the sticky bar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      {/* ---- top strip: welcome, contact shortcuts, language ---- */}
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__welcome d-none d-md-block">{t('header.welcome')}</p>
          <div className="topbar__links">
            <a href="tel:+966572744600" className="topbar__link" aria-label={t('header.callUs')}>
              <IoIosCall size={16} aria-hidden="true" />
              <span dir="ltr">{primaryPhone}</span>
            </a>
            <a href="https://maps.app.goo.gl/Ngp9yrfrA1Yjmaxw7" target="_blank" rel="noreferrer"
              className="topbar__link d-none d-xl-inline-flex" title={t('header.address')}>
              <FaLocationDot size={13} aria-hidden="true" />
              <span>{t('header.findUs').replace(':', '')}</span>
            </a>
          </div>
          <label className="switch" aria-label="Language switch">
            <input
              type="checkbox"
              checked={isArabic}
              onChange={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
            />
            <span className="switch__track">
              <span className="switch__label switch__label--en">EN</span>
              <span className="switch__label switch__label--ar">عربي</span>
              <span className="switch__thumb" />
            </span>
          </label>
        </div>
      </div>

      {/* ---- sticky main bar: logo, navigation, CTA ---- */}
      <header className={`mainbar ${scrolled ? 'mainbar--scrolled' : ''}`}>
        <div className="container mainbar__inner">
          <Link to="/" className="mainbar__brand" aria-label={t('brand.full')}>
            <BrandLogo />
          </Link>

          <nav className="mainbar__nav d-none d-lg-flex" aria-label="Main">
            {NAV_ITEMS.map(item => (
              <NavLink key={item.to} to={item.to} end={item.end}
                className={({ isActive }) => `mainbar__link ${isActive ? 'is-active' : ''}`}>
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact-us" className="btn-brand mainbar__cta d-none d-lg-inline-flex">
            {t('header.quote')}
          </Link>

          <button
            className="mainbar__toggle d-lg-none"
            type="button"
            onClick={() => setIsMenuOpen(open => !open)}
            aria-controls="mobileMenu"
            aria-expanded={isMenuOpen}
            aria-label={t('brand.menu')}
          >
            {isMenuOpen ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
          </button>
        </div>

        {/* ---- mobile menu ---- */}
        <div id="mobileMenu" className={`mobile-menu d-lg-none ${isMenuOpen ? 'is-open' : ''}`} hidden={!isMenuOpen}>
          <nav className="container" aria-label="Mobile">
            {NAV_ITEMS.map(item => (
              <NavLink key={item.to} to={item.to} end={item.end}
                className={({ isActive }) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}>
                {t(item.key)}
              </NavLink>
            ))}
            <Link to="/contact-us" className="btn-brand w-100 mt-3">{t('header.quote')}</Link>
            <div className="mobile-menu__contact">
              <a href="tel:+966572744600"><IoIosCall aria-hidden="true" /> <span dir="ltr">{primaryPhone}</span></a>
              <a href="https://maps.app.goo.gl/Ngp9yrfrA1Yjmaxw7" target="_blank" rel="noreferrer">
                <FaLocationDot aria-hidden="true" /> <span>{t('header.address')}</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
