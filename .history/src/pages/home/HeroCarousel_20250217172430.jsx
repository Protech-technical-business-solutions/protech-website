import React, { useContext } from "react";
import MyContext from "../../config/contextFile"
import { Link } from "react-router-dom";

const Carousel = () => {
  const { isMobile } = useContext(MyContext)
  return (
<div id="protechCarouselAutoPlay" style={{marginBottom:isMobile?"":"120px"}}
className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className={isMobile?"d-none":"carousel-indicators"}>
    <button type="button" data-bs-target="#protechCarouselAutoPlay" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#protechCarouselAutoPlay" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#protechCarouselAutoPlay" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#protechCarouselAutoPlay" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#protechCarouselAutoPlay" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    {[1,2,3,4,5].map(i => 
    <div className={`carousel-item ${i==1?"active":""}`}>
      <img src={`/carousel/${i}.jpg`} className="d-block w-100" style={{maxHeight:855}} alt="..."/>
      <div className="carousel-content">
        <h5 style={{fontSize:isMobile?25:50}} className="mb-0">Welcome to</h5>
        <p style={{fontSize:isMobile?40:80}} className="fw-bold mb-0">
          PRO<span className="text-theme">TECH</span>
        </p>
        <p style={{fontSize:isMobile?15:30}}>Design, Build, Install & Maintain</p>
        <br />
        <div className="d-flex gap-4">
          <Link to="/about-us" 
          className={`aboutUSCarouselBtn text-decoration-none cursor-pointer ${isMobile?"p-2 mt-0":"py-3 px-5"}`}>
            ABOUT US
          </Link>
          <Link to="services" 
          className={`servicesCarouselBtn text-decoration-none cursor-pointer ${isMobile?"p-2 mt-0":"py-3 px-5"}`}>
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
