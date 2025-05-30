// components/Footer.js
import React, { useContext } from 'react';
import MyContext from "../config/contextFile"

import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram,FaGoogle,FaLinkedin,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import allServices from '../pages/services/allServices';

const Footer = () => {
  const {isMobile} = useContext(MyContext)
  return (
    <section>
      <div className="px-4 py-4 d-flex flex-wrap justify-content-around bg-theme text-white fw-bold">
        <div className={`${isMobile ? "text-center" : ""}`}>
          <h4 style={{
            fontSize:isMobile?28:""
          }} 
          className="company-text text-center">
          We create with the heart & build with the mind
          </h4>
          <br />
          <h3 style={{
            fontSize:isMobile?42:31
          }}>
            Looking for a quality construction company?
          </h3>
          {isMobile&&<br />}
        </div>
        <div className='d-flex align-items-center mt-2'>
          <button style={{
            fontSize:isMobile?30:""
          }} 
          className={`btn-footer-quote px-5 py-4 rounded-2 border-0 text-center fw-bold font-Raleway`}>
            GET A QUOTE
          </button>
        </div>
      </div>
    <footer className="text-center text-lg-start bg-dark text-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <FaLinkedin size={isMobile?40:""} 
            className='text-light text-hover-theme' />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGoogle size={isMobile?40:""} 
            className='text-light text-hover-theme' />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaInstagram size={isMobile?40:""} 
            className='text-light text-hover-theme' />
          </a>
          <a href="#" className="me-4 text-reset">
            <TiSocialFacebook size={isMobile?50:""} 
            className='text-light text-hover-theme' />
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className={`mt-3 ${isMobile?"column w-100":"row"}`}>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 style={{fontSize:25}} 
              className="text-uppercase fw-bold mb-4">
                PRO<span className="text-theme">TECH</span>
              </h6>
              <p>
                Protech was formed with one visionary mind set to allow property owners, developers, architects and general contractors to deliver a competitive edge for their projects.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p><a href="#" className="text-light text-hover-theme text-decoration-none">Home</a></p>
              <p><a href="#" className="text-light text-hover-theme text-decoration-none">About us</a></p>
              <p><a href="#" className="text-light text-hover-theme text-decoration-none">Services</a></p>
              <p><a href="#" className="text-light text-hover-theme text-decoration-none">Site Works</a></p>
              <p><a href="#" className="text-light text-hover-theme text-decoration-none">Contact us</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              {allServices.map(service=>
                <p><a href="/services/#" className="text-light text-hover-theme text-decoration-none">{service.title}</a></p>
              )}
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><IoLocationSharp className='me-3 text-theme' /> Riyadh, Saudi Arabia</p>
              <p><MdEmail className='me-3 text-theme'/>ayyubsayeed@protech-saudi.com</p>
              <p><MdEmail className='me-3 text-theme'/>imran@protech-saudi.com</p>
              <p><FaPhone className='me-3 text-theme'/> + 966 572744600</p>
              <p><FaPhone className='me-3 text-theme'/> + 966 580681213</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © {new Date().getFullYear()} Copyright: <a className="text-reset fw-bold" href="https://www.protech-saudi.com/">protech-saudi</a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;