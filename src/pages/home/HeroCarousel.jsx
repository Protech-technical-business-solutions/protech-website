import React, { useContext } from "react";
import MyContext from "../../config/contextFile"
import { Link } from "react-router-dom";

const SLIDES = [1, 2, 3, 4, 5];

const Carousel = () => {
  const { t } = useContext(MyContext);
  return (
    <section id="pertechHeroCarousel" className="hero carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000">
      <div className="carousel-indicators">
        {SLIDES.map(i =>
          <button type="button" className={i === 1 ? "active" : ""} key={i}
            data-bs-target="#pertechHeroCarousel" data-bs-slide-to={i - 1} aria-label={`Slide ${i}`}></button>
        )}
      </div>
      <div className="carousel-inner">
        {SLIDES.map(i =>
          <div key={i} className={`carousel-item ${i === 1 ? "active" : ""}`}>
            <img src={`/carousel/${i}.jpg`} className="hero__img" alt="" loading={i === 1 ? "eager" : "lazy"} />
          </div>
        )}
      </div>

      {/* static copy over the rotating images */}
      <div className="hero__overlay">
        <div className="container">
          <div className="hero__content">
            <p className="hero__welcome">{t('home.hero.welcome')}</p>
            <h1 className="hero__brand">
              <span className="text-theme">{t('home.hero.brandPro')}</span>{t('home.hero.brandTech')}
            </h1>
            <p className="hero__subtitle">{t('home.hero.subtitle')}</p>
            <div className="hero__actions">
              <Link to="/about-us" className="btn-brand">{t('home.hero.about')}</Link>
              <Link to="/services" className="btn-brand btn-brand--ghost">{t('home.hero.services')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
