import React, { useContext } from "react";
import MyContext from "../../config/contextFile"
import { Link } from "react-router-dom";

const Carousel = () => {
  const { isMobile } = useContext(MyContext);
  return (
<div id="protechCarouselAutoPlay" style={{marginBottom: isMobile ? "" : "120px"}}
className="carousel slide" data-bs-ride="carousel">
  <div className={isMobile ? "d-none" : "carousel-indicators"}>
    {[1,2,3,4,5,6].map(i =>
    <button type="button" className={i === 1 ? "active" : ""} key={i} 
    data-bs-target="#protechCarouselAutoPlay" data-bs-slide-to={i-1} aria-label={`Slide ${i+1}`}></button>
    )}
  </div>
  <div className="carousel-inner" style={{height: isMobile ? 500 : 900}}>
    {[1,2,3,4,5,6].map(i => 
    <div className={`carousel-item ${i === 1 ? "active" : ""}`} style={{height: "100%"}}>
      <img src={`/carousel/${i}.jpg`} className="d-block w-100" style={{height: "100%", objectFit: "cover"}} alt="..."/>
      <div className="carousel-content">
        <h5 style={{fontSize: isMobile ? 55 : 50}} className="mb-0">Welcome to</h5>
        <p style={{fontSize: isMobile ? 65 : 80}} className="fw-bold mb-0">
          PRO<span className="text-theme">TECH</span>
        </p>
        <p style={{fontSize: isMobile ? 30 : 30}}>Design, Build, Install & Maintain</p>
        <br />
        <div className="d-flex gap-4">
          <Link to="/about-us" 
          className={`aboutUSCarouselBtn text-decoration-none cursor-pointer ${isMobile ? "p-4" : "py-4 px-6"}`}>
            ABOUT US
          </Link>
          <Link to="services" 
          className={`servicesCarouselBtn text-decoration-none cursor-pointer ${isMobile ? "p-4" : "py-4 px-6"}`}>
            SERVICES
          </Link>
        </div>
      </div>
    </div>
    )}
  </div>
</div>
  );
};

export default Carousel;
