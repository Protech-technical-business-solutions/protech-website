import React, { useContext } from 'react';
import MyContext from '../../config/contextFile';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useContext(MyContext);

  const services = [
    {
      title: t('home.main.architecture.title'),
      content: t('home.main.architecture.content'),
      iconImage: "/mainServiceSection/architect.png"
    },
    {
      title: t('home.main.construction.title'),
      content: t('home.main.construction.content'),
      iconImage: "/mainServiceSection/construction.png"
    }
  ];

  return (
    <section className="section main-service" style={{ backgroundImage: "url('/mainServiceSection/background.jpg')" }}>
      <div className="container">
        <div className="row gx-4 gx-lg-5 gy-5 align-items-center">
          <div className="col-12 col-lg-7">
            <span className="section-eyebrow">{t('home.main.eyebrow')}</span>
            <h2 className="section-title">
              {t('home.main.title1')}<br />{t('home.main.title2')}
            </h2>
            <div className="title-bar ms-0" />
            <p className="main-service__intro">{t('home.main.intro')}</p>
            <p className="body-copy">{t('home.main.body')}</p>

            <div className="row g-3 mt-2">
              {services.map(service =>
                <div className="col-12 col-sm-6" key={service.title}>
                  <div className="mini-card">
                    <div className="mini-card__head">
                      <img src={service.iconImage} alt="" width={40} height={40} />
                      <h3>{service.title}</h3>
                    </div>
                    <p>{service.content}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to="/services" className="btn-brand">{t('home.main.readMore')}</Link>
              <Link to="/services" className="btn-brand btn-brand--dark">{t('home.main.getBrochure')}</Link>
            </div>
          </div>

          <div className="col-12 col-lg-5 d-none d-md-flex justify-content-center">
            <img className="main-service__img" src="/mainServiceSection/mainImage.png" alt="construction" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
