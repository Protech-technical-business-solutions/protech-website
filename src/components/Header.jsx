import React, { useContext, useState } from 'react';
import { NavLink,Link, useNavigate } from "react-router-dom";

// icons
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

// our context
import MyContext from '../config/contextFile';

const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useContext(MyContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <header className="w-100">
      <div className="text-light bg-black2grey">
        <div className="container">
          <p style={{fontSize: isMobile ? 23 : 14, paddingTop: isMobile ? 30 : 4, paddingBottom: isMobile ? 30 : 3.5}}>
            Welcome to Protech Technical Solutions & Business Services
          </p>
        </div>
      </div>

      <div className='bg-white'>
        <div className="d-flex justify-content-end">
          {/* Placeholder for future switch or additional content */}
        </div>
        <div className={`container d-flex align-items-center flex-wrap ${isMobile ? "justify-content-center" : ""}`}>
          <div className={`${isMobile ? "d-none" : "flex-grow-1"} mb-1`}>
            <img src="/logo2.svg" alt="Logo" height={isMobile ? 140 : 150} />
          </div>
          <div className={`d-flex ${isMobile ? "flex-column gap-5 mt-5 w-100" : "justify-content-between gap-5"}`}>
            <InfoSection Icon={IoIosCall} title="Call us:" content="(+966) 572744600" linkToOpen="tel:+966572744600" iconSize={isMobile ? 30 : 20} />
            <InfoSection Icon={FaLocationDot} title="Find us:" content="Office 08, 1st Floor, Bldg 7021, Abdullah Al-Hamadhani St, Al Malaz, Riyadh 12836" linkToOpen="https://maps.app.goo.gl/Ngp9yrfrA1Yjmaxw7" iconSize={isMobile ? 30 : 15} />
          </div>
        </div>
      </div>
      {isMobile && <br />}
      <nav className="navbar navbar-expand-lg bg-black2grey" style={{padding: isMobile ? '20px 0' : '10px 0'}}>
        <div className="container">
          {isMobile && (
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-center me-3" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}>
                <img src="/logo2.svg" alt="Protech Logo" height={65} />
              </div>
              <p style={{fontSize: 52}} className="fw-bold mb-0 text-light">
                PRO<span className="text-theme">TECH</span>
              </p>
            </div>
          )}
          
          <button 
            className="navbar-toggler border-0 ms-auto" 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
            style={{
              backgroundColor: '#f17430', 
              padding: isMobile ? '15px' : '10px',
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(241, 116, 48, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <GiHamburgerMenu size={isMobile ? 60 : 25} color="white" />
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav" style={{
            marginTop: isMobile ? '20px' : '0',
            backgroundColor: 'transparent',
            borderRadius: '0',
            padding: isMobile ? '20px 0' : '0',
            boxShadow: 'none'
          }}>
            <ul className="navbar-nav me-auto" style={{gap: isMobile ? '5px' : '0'}}>
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({isActive}) => `nav-link text-navlink ${isActive ? "text-theme" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: isMobile ? 24 : 16, 
                    padding: isMobile ? '15px 20px' : '12px 20px',
                    borderRadius: '0',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    borderBottom: isMobile ? '1px solid rgba(255,255,255,0.2)' : 'none'
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about-us" 
                  className={({isActive}) => `nav-link text-navlink ${isActive ? "text-theme" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: isMobile ? 24 : 16, 
                    padding: isMobile ? '15px 20px' : '12px 20px',
                    borderRadius: '0',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    borderBottom: isMobile ? '1px solid rgba(255,255,255,0.2)' : 'none'
                  }}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/services" 
                  className={({isActive}) => `nav-link text-navlink ${isActive ? "text-theme" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: isMobile ? 24 : 16, 
                    padding: isMobile ? '15px 20px' : '12px 20px',
                    borderRadius: '0',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    borderBottom: isMobile ? '1px solid rgba(255,255,255,0.2)' : 'none'
                  }}
                >
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/site-works" 
                  className={({isActive}) => `nav-link text-navlink ${isActive ? "text-theme" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: isMobile ? 24 : 16, 
                    padding: isMobile ? '15px 20px' : '12px 20px',
                    borderRadius: '0',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    borderBottom: isMobile ? '1px solid rgba(255,255,255,0.2)' : 'none'
                  }}
                >
                  SITE WORKS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contact-us" 
                  className={({isActive}) => `nav-link text-navlink ${isActive ? "text-theme" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: isMobile ? 24 : 16, 
                    padding: isMobile ? '15px 20px' : '12px 20px',
                    borderRadius: '0',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    borderBottom: isMobile ? '1px solid rgba(255,255,255,0.2)' : 'none'
                  }}
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
            <div className={`${isMobile ? 'mt-3 mb-2 text-center' : ''}`}>
              <button onClick={() => {navigate("/contact-us"); setIsMenuOpen(false);}} 
              className="btn-getQuote"
              style={{
                padding: isMobile ? '18px 25px' : '15px 25px',
                fontSize: isMobile ? 20 : 15,
                borderRadius: '5px',
                boxShadow: '0 2px 8px rgba(241, 116, 48, 0.2)',
                transition: 'all 0.3s ease',
                fontWeight: '700'
              }}>
                <span className='fw-bold'>
                  GET A QUOTATION
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

    </header>
    </>
  );
};

function InfoSection(props){
  const { isMobile } = useContext(MyContext);
  return(
    <div onClick={()=>window.location.href=props.linkToOpen} 
    className="d-flex position-relative gap-4" style={{width:isMobile?"":300}}>
      <div className="diamond-card" >
        <div className="diamond-card-content">
          <props.Icon className='text-theme mb-1' size={props.iconSize || (isMobile ? 25 : 20)} />
        </div>
      </div>
      <div className="d-flex flex-column align-items-between">
        <h4 style={{
          fontSize: isMobile ? 25 : 23
        }} 
        className="text-gray">
          {props.title}
        </h4>
        <p style={{
          fontSize: isMobile ? 25 : 16
        }} className='text-muted'>
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default Header;