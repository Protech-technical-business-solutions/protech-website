import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom";

import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {

  // we'll use window.matchMedia method to check if the website is opened in mobile
  const [isMobile,setIsMobile] = useState( window.matchMedia("(max-width:400px)").matches )

  useEffect(() => {
    window.matchMedia("(max-width:500px)")
    .addEventListener("change", e=>setIsMobile(e.matches)) // we also add eventlisteners incase the window is resized 
  }, [])

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
        <div className="container d-flex align-items-center">
          <div className='flex-grow-1 mb-1'><img src="/logo2.svg" alt="Logo" height={95} /></div>
          <div className="gap-5 d-flex align-items-center justify-content-between">
            <InfoSection Icon={IoIosCall} title="Call us:" content="(+966) 572744600" />
            <InfoSection Icon={FaLocationDot} iconSize={15} title="Find us:" content="Riyadh, PO.BOX: 1234 , Saudi Arabia" />
          </div>
        </div>
      </div>

      <nav className="bg-black2grey">
        <div className={`${isMobile ? "" :"mb-5"} d-flex justify-content-between`}>
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
        </div>
      </nav>

    </header>
  );
};

function InfoSection(props){
  return(
    <div className="d-flex flex-grow-1 position-relative gap-4">
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