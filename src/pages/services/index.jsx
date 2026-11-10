import { useContext } from "react";

import MyContext from "../../config/contextFile"

import PageBanner from "../../components/PageBanner";
import getAllServices from "./allServices";


function ServiceBlock({ id, title, image, alt, children }) {
    return (
        <section id={id} className="service-block">
            <div className="container">
                <div className="row gx-4 gx-lg-5 gy-4 align-items-center">
                    <div className="col-12 col-md-5">
                        <img className="service-block__img" src={image} alt={alt} loading="lazy" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h2 className="service-block__title">{title}</h2>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ServicesPage(){
    const { locale, t } = useContext(MyContext)
    const allServices = getAllServices(locale)
    return(
        <div>
            <PageBanner bannerTitle={t('pages.services.banner')}
            bannerImageURL="/banners/servicePageBanner.webp" />
            <div className="section pb-0">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">{t('pages.services.title')}</h2>
                        <p className="section-sub">{t('pages.services.subtitle')}</p>
                        <div className="title-bar" />
                    </div>
                </div>
            </div>
            <div className="services-list">
                {allServices.map(service =>
                    <ServiceBlock key={service.id} id={service.id} title={service.title} image={service.image} alt={service.title}>
                        <ul className="service-list">
                            {service.items.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </ServiceBlock>
                )}
                <ServiceBlock id="Electrical Services" title={t('pages.services.electricalTitle')}
                    image="/servicesPage/electrical.jpg" alt={t('pages.services.electricalTitle')}>
                    <p className="body-copy mb-0">{t('pages.services.electricalBody')}</p>
                </ServiceBlock>
            </div>
        </div>
    );
}
