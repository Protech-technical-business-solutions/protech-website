import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

// icons
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

// our context
import MyContext from '../config/contextFile';

const Header = () => {

  const { isMobile } = useContext( MyContext )
  return (
    <header className="w-100">
      <div className="text-light bg-black2grey">
        <div className="container">
          <p style={{fontSize:14, paddingTop:4,paddingBottom:3.5}}>
            Welcome to Protech Technical Solutions & Business Services
          </p>
        </div>
      </div>

      <div className='bg-white'>
        <div className={`container d-flex align-items-center flex-wrap ${isMobile?"justify-content-center":""}`}>
          <div className={`${isMobile?"":"flex-grow-1"} mb-1`}><img src="/logo2.svg" alt="Logo" height={95} /></div>
          <div className={`d-flex align-items-center justify-content-between ${isMobile?"":"gap-5"} flex-wrap`}>
            <InfoSection Icon={IoIosCall} title="Call us:" content="(+966) 572744600" />
            <InfoSection Icon={FaLocationDot} iconSize={15} title="Find us:" content="Riyadh, PO.BOX: 1234 , Saudi Arabia" />
          </div>
        </div>
      </div>

      <nav className="bg-black2grey">
        <div className="container d-flex justify-content-between">
          {isMobile ?
            <>
              <p style={{fontSize:20}} className="fw-bold mb-0 p-3 text-light">
                PRO<span className="text-theme">TECH</span>
              </p>
              <button className="btn btn-sm bg-theme text-light">
                <GiHamburgerMenu />
              </button>
            </>
           :
          <>
          <div className="d-flex gap-3 p-3">
            {/* NavLink is same as Link, but allows us to keep active and inactive classes */}
            <NavLink to="/" className={({isActive}) => `text-navlink ${isActive ? "text-theme" : ""}`}>
              HOME
            </NavLink>
            <NavLink to="/about-us" className={({isActive}) => `text-navlink ${isActive ? "text-theme" : ""}`}>
              ABOUT US
            </NavLink>
            <NavLink to="/services" className={({isActive}) => `text-navlink ${isActive ? "text-theme" : ""}`}>
              SERVICES
            </NavLink>
            <NavLink to="/site-works" className={({isActive}) => `text-navlink ${isActive ? "text-theme" : ""}`}>
              SITE WORKS
            </NavLink>
            <NavLink to="/contact-us" className={({isActive}) => `text-navlink ${isActive ? "text-theme" : ""}`}>
              CONTACT US
            </NavLink>
          </div>
          <div className="my-0">
            <button className="h-100 btn-getQuote">
                <span className='fw-bold mx-3'>
                  GET A QUOTATION
                </span>
            </button>
          </div>
          </>}
        </div>
      </nav>

    </header>
  );
};

function InfoSection(props){
  return(
    <div className="d-flex position-relative gap-4">
      <div className="diamond-card" >
        <div className="diamond-card-content">
          <props.Icon className='text-theme mb-1' size={props.iconSize || 20} />
        </div>
      </div>
      <div className="d-flex flex-column align-items-between">
        <h4 style={{
          fontSize:16
        }} 
        className="text-gray">
          {props.title}
        </h4>
        <p className='text-muted'>
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default Header;