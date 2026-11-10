import React, { useContext } from 'react';
import MyContext from "../../config/contextFile"

const Services = () => {
  const { t } = useContext(MyContext)

  const localizedServices = [
    { title: t('home.best.design'), content: t('home.best.designContent'), cardImage: "/bestServiceSection/design.png" },
    { title: t('home.best.build'), content: t('home.best.buildContent'), cardImage: "/bestServiceSection/build.png" },
    { title: t('home.best.maintenance'), content: t('home.best.maintenanceContent'), cardImage: "/bestServiceSection/maintenance.png" },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t('home.best.title')}</h2>
          <p className="section-sub">{t('home.best.subtitle')}</p>
          <div className="title-bar" />
        </div>
        <div className="row g-4 justify-content-center">
          {localizedServices.map(service =>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 d-flex justify-content-center" key={service.cardImage}>
              {/* card artwork (hex icon + photo) is baked into the image; text sits in its white bands */}
              <article className="offer-card" style={{ backgroundImage: `url('${service.cardImage}')` }}>
                <h3 className="offer-card__title">{service.title}</h3>
                <p className="offer-card__text">{service.content}</p>
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
