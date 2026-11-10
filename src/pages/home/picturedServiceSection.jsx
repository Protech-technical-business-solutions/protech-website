import React, { useContext } from 'react';
import MyContext from "../../config/contextFile"

import { HashLink } from 'react-router-hash-link'; // this is for navigating into a specific div (we need it as we used hashrouter!)

import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const Services = () => {
  const { t, isArabic } = useContext(MyContext)
  const Arrow = isArabic ? FaAnglesLeft : FaAnglesRight;
  const cards = [
    { title: t('home.pictured.interior'), image: '/picturedServiceSection/interiorDesigning.png', target: '/services#Interior Design' },
    { title: t('home.pictured.mep'), image: '/picturedServiceSection/HVAC.png', target: '/services#MEP Works' },
    { title: t('home.pictured.construction'), image: '/picturedServiceSection/construction.png', target: '/services#Construction Services' },
  ];

  return (
    <section className="section pictured" style={{ backgroundImage: "url('/picturedServiceSection/bg.jpg')" }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {cards.map(card => (
            <div className="col-12 col-sm-10 col-md-4" key={card.target}>
              {/* HashLink scrolls to the section with that id on the services page */}
              <HashLink smooth to={card.target} className="photo-card" style={{ backgroundImage: `url('${card.image}')` }}>
                <span className="photo-card__body">
                  <span className="photo-card__title">{card.title}</span>
                  <span className="photo-card__btn">
                    {t('home.pictured.readMore')} <Arrow size={12} />
                  </span>
                </span>
              </HashLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
