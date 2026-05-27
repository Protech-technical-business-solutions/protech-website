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
            <br /><br /><br /><br />
            <h5 style={{
                fontSize:37
            }} 
            className="company-text text-center fw-bold mb-4">
                {t('pages.siteWorks.title')}
            </h5>
            <p style={{
                fontSize:22
            }} className="company-text text-center text-theme">
                {t('pages.siteWorks.subtitle')}
            </p>
            <br /><br /><br />
            <div className="row">
                {allFileNamesInChunks.map(column=>
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        {column.map(filename =>{
                            if(filename.endsWith(".mp4")){
                                return <div className="d-flex justify-content-center">
                                    <video style={{
                                        objectFit:"fill",
                                        marginBottom:10,
                                        width:"100%",
                                    }} muted={true}
                                    playsInline={true} autoPlay={true}
                                    src={`/siteWorksPage/${filename}`} />
                                </div>
                            }else{
                                return <div className="d-flex justify-content-center">
                                    <img style={{
                                        objectFit:"fill",
                                        marginBottom:10,
                                        width:"100%",
                                    }}
                                    src={`/siteWorksPage/${filename}`} alt="our work image" />
                                </div>
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}