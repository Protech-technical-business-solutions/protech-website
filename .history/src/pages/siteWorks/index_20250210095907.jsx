import PageBanner from "../../components/PageBanner";

import allFiles from "./nameOfFiles" // name of all the files we want to display here


export default function SiteWorksPage(props){
    return(
        <>
            <PageBanner bannerTitle="Site Works"
             bannerImageURL="/banners/siteWorksPageBanner.webp" />
            <br /><br /><br /><br />
            <h5 style={{
                fontSize:37
            }} 
            className="company-text text-center fw-bold mb-4">
                Our Site Works
            </h5>
            <p style={{
                fontSize:22
            }} className="company-text text-center text-theme">
                View our work
            </p>
            <br /><br /><br />
            <div className="container d-flex flex-wrap gap-3">
                {allFiles.map(fileName=>{
                    if(fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".png")){
                        return <img src={`/siteWorksPage/${filename}`} alt="our work image" />
                    }
                })}
            </div>
        </>
    );
}