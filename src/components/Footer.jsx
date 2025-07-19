import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MyContext from "../config/contextFile"

import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram,FaGoogle,FaLinkedin,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import allServices from '../pages/services/allServices';

const Footer = () => {
  const navigate = useNavigate();
  const {isMobile} = useContext(MyContext)
  return (
    <section style={{width:"100%"}}>
      <div className={`px-4 ${isMobile ? "pt-5" :"py-4"} d-flex flex-wrap justify-content-around bg-theme text-white fw-bold`}>
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
          }} onClick={() => {window.scrollTo(0,0);navigate("/contact-us")}}
          className={`btn-footer-quote px-5 py-4 ${isMobile && "mb-5"} rounded-2 border-0 text-center fw-bold font-Raleway`}>
            GET A QUOTE
          </button>
        </div>
      </div>
    <footer 
    // style={{width:"99.23645%"}} 
    className="text-center overflow-hidden bg-dark text-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social networks:</span>
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
                PRO<span className="text-theme">TECH</span>
              </h6>
              <p style={{fontSize:isMobile?30:""}}>
                Protech was formed with one visionary mind set to allow property owners, developers, architects and general contractors to deliver a competitive edge for their projects.
              </p>
            </div>
            <div className="col-md-8 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 style={{
                fontSize:isMobile?34:""
              }}
              className="text-uppercase fw-bold mb-4 mt-5">Quick Links</h6>
              <p style={{fontSize:isMobile?25:""}}><a href="#" className="text-light text-hover-theme text-decoration-none">Home</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#" className="text-light text-hover-theme text-decoration-none">About us</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#" className="text-light text-hover-theme text-decoration-none">Services</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#" className="text-light text-hover-theme text-decoration-none">Site Works</a></p>
              <p style={{fontSize:isMobile?25:""}}><a href="#" className="text-light text-hover-theme text-decoration-none">Contact us</a></p>
            </div>
            <div className="col-md-8 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 style={{
                fontSize:isMobile?34:""
              }}
              className="text-uppercase fw-bold mb-4 mt-5">Services</h6>
              {allServices.map(service=>
                <p style={{fontSize:isMobile?25:""}}><a href="/services/#" className="text-light text-hover-theme text-decoration-none">{service.title}</a></p>
              )}
            </div>
            <div className="col-md-8 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 style={{
                fontSize:isMobile?34:""
              }}
              className="text-uppercase fw-bold mb-4 mt-5">Contact</h6>
              <p style={{fontSize:isMobile?25:""}}><IoLocationSharp className='me-3 text-theme' /> Riyadh, Saudi Arabia</p>
              <p style={{fontSize:isMobile?25:""}}><MdEmail className='me-3 text-theme'/>ayyubsayeed@protech-saudi.com</p>
              <p style={{fontSize:isMobile?25:""}}><MdEmail className='me-3 text-theme'/>imran@protech-saudi.com</p>
              <p style={{fontSize:isMobile?25:""}}><FaPhone className='me-3 text-theme'/> + 966 572744600</p>
              <p style={{fontSize:isMobile?25:""}}><FaPhone className='me-3 text-theme'/> + 966 580681213</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: isMobile ? 25 : ""}}>
        © {new Date().getFullYear()} Copyright: <a className="text-reset fw-bold" href="https://www.protech-saudi.com/">protech-saudi</a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;