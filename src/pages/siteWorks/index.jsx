import { useContext } from "react";
import PageBanner from "../../components/PageBanner";

import allFiles from "./nameOfFiles" // name of all the files we want to display here
import MyContext from "../../config/contextFile";


function divideArray(arr) { // dividing an array into subarrays
    const n = arr.length;
    const partSize = Math.floor(n / 3);
    const remainder = n % 3;

    // Determine the split points
    const part1 = arr.slice(0, partSize + (remainder > 0 ? 1 : 0));
    const part2 = arr.slice(partSize + (remainder > 1 ? 1 : 0), 2 * partSize + (remainder > 1 ? 1 : 0));
    const part3 = arr.slice(2 * partSize + (remainder > 2 ? 1 : 0));

    return [part1, part2, part3];
}


export default function SiteWorksPage(props){
    const { t } = useContext(MyContext);
    let allFileNamesInChunks = divideArray(allFiles); // we need to divide this array into 3 chunks

    return (
        <div>
            <PageBanner bannerTitle={t('pages.siteWorks.banner')}
             bannerImageURL="/banners/siteWorksPageBanner2.webp" />
            <section className="section">
                <div className="container-xxl">
                    <div className="section-head">
                        <h2 className="section-title">{t('pages.siteWorks.title')}</h2>
                        <p className="section-sub">{t('pages.siteWorks.subtitle')}</p>
                        <div className="title-bar" />
                    </div>
                    <div className="row g-3">
                        {allFileNamesInChunks.map((column, colIdx) =>
                            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-3" key={colIdx}>
                                {column.map(filename =>
                                    filename.endsWith(".mp4")
                                        ? <video key={filename} className="gallery-item" muted playsInline autoPlay loop
                                            preload="metadata" src={`/siteWorksPage/${filename}`} />
                                        : <img key={filename} className="gallery-item" loading="lazy"
                                            src={`/siteWorksPage/${filename}`} alt="our work image" />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
