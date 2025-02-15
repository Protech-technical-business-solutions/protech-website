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
            <div className="d-flex flex-wrap gap-3 justify-content-center mx-3">
                {allFiles.map(fileName=>{
                    if(fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".png")){
                        return <img style={{
                            objectFit:"cover",
                            // maxWidth:285,
                            maxHeight:506.663,
                            // height:"auto",
                            // width:"auto",
                        }} 
                        src={`/siteWorksPage/${fileName}`} alt="our work image" />
                    }else{
                        return <video style={{
                            objectFit:"cover",
                            // maxWidth:285,
                            maxHeight:506.663,
                            // height:"auto",
                            // width:"auto",
                        }} muted={true}
                        playsInline={true} autoPlay={true}
                        src={`/siteWorksPage/${fileName}`} />
                    }
                })}
                <br /><br /><br />
            </div>
        </>
    );
}