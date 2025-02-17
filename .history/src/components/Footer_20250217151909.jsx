// components/Footer.js
import React, { useContext } from 'react';

import MyContext from "../config/contextFile"

const Footer = () => {
  const {isMobile} = useContext(MyContext)
  return (
    <section>
      <div className="px-4 py-4 d-flex flex-wrap justify-content-around bg-theme text-white fw-bold">
        <div>
          <h4 
          className="company-text" style={{
            fontSize:isMobile?"10px !important":""
          }} >
          We create with the heart & build with the mind
          </h4>
          <br />
          <h3 style={{
            fontSize:isMobile?20:31
          }}>
            Looking for a quality construction company?
          </h3>
        </div>
        <div className='d-flex align-items-center'>
          <button className={`btn-footer-quote ${isMobile?"p-3":"px-5 py-4"} rounded-2 border-0 text-center fw-bold font-Raleway`}>
            GET A QUOTE
          </button>
        </div>
      </div>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Protech Saudi Arabia. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;