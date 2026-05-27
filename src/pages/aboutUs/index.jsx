import { useContext } from "react";
import MyContext from "../../config/contextFile"

import PageBanner from "../../components/PageBanner"

function AboutUs(props){
    const {isMobile, t} = useContext(MyContext)
    return(
        <div>
            <PageBanner bannerTitle={t('pages.about.banner')} 
            bannerImageURL="/banners/aboutPageBanner.webp" />
            {isMobile? <><br /><br /></> : <><br /><br /><br /><br /><br /></>}
            <div className="container">
                <h5 style={{
                    fontSize:isMobile?57:37
                }} 
                className="company-text text-center fw-bold mb-4">
                    {t('pages.about.title')}
                </h5>
                <p style={{
                    fontSize:isMobile?33:22
                }} className="company-text text-center text-theme">
                    {t('pages.about.subtitle')}
                </p>
                {isMobile?<br /> : <><br /><br /><br /><br /><br /></>}
                <div className={`d-flex gap-5 ${isMobile?"flex-wrap":""}`}>
                    <div>
                        <p style={{fontSize:isMobile?25:15, lineHeight:"33px", color:"#666666"}}
                        className="mt-3">
                            {t('pages.about.body1')}
                        </p>
                    </div>
                    <img style={{
                        width:"100%"
                    }}
                        src="/aboutPage/engineer.png" alt="engineer" />
                </div>
                <br />
                <p style={{fontSize:isMobile?25:15, lineHeight:"33px", color:"#666666"}}>
                    {t('pages.about.body2')}     
                </p>
                {isMobile?<br /> : <><br /><br /><br /><br /><br /></>}
            </div>
        </div>
    );
}



export default AboutUs;