// components/Footer.js
import React, { useContext } from 'react';

import MyContext from "../config/contextFile"

const Footer = () => {
  const {isMobile} = useContext(MyContext)
  return (
    <section>
      <div className="py-4 d-flex flex-wrap justify-content-around bg-theme text-white fw-bold">
        <div>
          <h4 className="company-text">
          We create with the heart & build with the mind
          </h4>
          <br />
          <h3 style={{
            fontSize:31
          }}>
            Looking for a quality construction company?
          </h3>
        </div>
        <div className='d-flex align-items-center'>
          <button className="btn-footer-quote px-5 border-0 py-4 text-center fw-bold font-Raleway">
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