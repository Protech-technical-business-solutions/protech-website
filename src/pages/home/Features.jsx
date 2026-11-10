import React, { useContext } from 'react';
import MyContext from '../../config/contextFile';
import { Link } from 'react-router-dom';
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const Features = () => {
  const { t, isArabic } = useContext(MyContext);
  const cards = [
    { tone: "brand", icon: "buildingLogo.png", title: t('home.features.qualityTitle'), content: t('home.features.qualityContent') },
    { tone: "dark", icon: "group.png", title: t('home.features.professionalsTitle'), content: t('home.features.professionalsContent') },
    { tone: "light", icon: "support.png", title: t('home.features.supportTitle'), content: t('home.features.supportContent') },
  ];
  const Arrow = isArabic ? FaAnglesLeft : FaAnglesRight;

  return (
    <section className="features">
      <div className="container">
        <div className="row g-4">
          {cards.map(card => (
            <div className="col-12 col-md-4" key={card.icon}>
              <article className={`feature-card feature-card--${card.tone}`}>
                <span className="feature-card__icon">
                  <img src={`/featureCard/${card.icon}`} alt="" width={36} height={36} />
                </span>
                <h3 className="feature-card__title">{card.title}</h3>
                <p className="feature-card__text">{card.content}</p>
                <Link to="/about-us" className="feature-card__link">
                  {t('home.features.readMore')} <Arrow size={12} />
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
