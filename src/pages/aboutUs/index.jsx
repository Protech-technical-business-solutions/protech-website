import { useContext } from "react";
import MyContext from "../../config/contextFile"

import PageBanner from "../../components/PageBanner"

function AboutUs(props){
    const { t } = useContext(MyContext)
    return(
        <div>
            <PageBanner bannerTitle={t('pages.about.banner')}
            bannerImageURL="/banners/aboutPageBanner.webp" />
            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">{t('pages.about.title')}</h2>
                        <p className="section-sub">{t('pages.about.subtitle')}</p>
                        <div className="title-bar" />
                    </div>
                    <div className="row gx-4 gx-lg-5 gy-5 align-items-center">
                        <div className="col-12 col-lg-6">
                            <p className="body-copy mb-0">{t('pages.about.body1')}</p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img className="about-img" src="/aboutPage/engineer.png" alt="engineer" loading="lazy" />
                        </div>
                    </div>
                    <div className="about-callout">
                        <p className="body-copy mb-0">{t('pages.about.body2')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
