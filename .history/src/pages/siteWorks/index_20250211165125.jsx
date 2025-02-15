import PageBanner from "../../components/PageBanner";

import allFiles from "./nameOfFiles" // name of all the files we want to display here


function SiteWorksPage(props){
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
                        return <div className="">
                            <img style={{
                                objectFit:"cover",
                                // maxWidth:285,
                                maxHeight:506.663,
                                // height:"auto",
                                // width:"auto",
                            }}
                            src={`/siteWorksPage/${fileName}`} alt="our work image" />
                        </div>
                    }else{
                        return <div className="">
                            <video style={{
                                objectFit:"cover",
                                // maxWidth:285,
                                maxHeight:506.663,
                                // height:"auto",
                                // width:"auto",
                            }} muted={true}
                            playsInline={true} autoPlay={true}
                            src={`/siteWorksPage/${fileName}`} />
                        </div>
                    }
                })}
            </div>
            <br /><br /><br />
        </>
    );
}

let allFileNamesInChunks = [];
const no_of_files_in_each_col = Math.floor(allFiles.length/3)

for(let i=0; i<allFiles.length; i+=no_of_files_in_each_col){
    const chunk = allFileNamesInChunks.slice(i,no_of_files_in_each_col);
    allFileNamesInChunks.push(chunk);
}

export default function Test(props){
    return (
        <div>
            {allFileNamesInChunks.map(column=>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    {column.map(filename =>{
                        if(filename.endsWith(".mp4")){
                            return <video style={{
                                objectFit:"cover",
                                // maxWidth:285,
                                // maxHeight:506.663,
                                // height:"auto",
                                // width:"auto",
                            }} muted={true}
                            playsInline={true} autoPlay={true}
                            src={`/siteWorksPage/${filename}`} />
                        }else{
                            return <img style={{
                                objectFit:"cover",
                                // maxWidth:285,
                                // maxHeight:506.663,
                                // height:"auto",
                                // width:"auto",
                            }}
                            src={`/siteWorksPage/${fileName}`} alt="our work image" />
                        }
                    })}
                </div>
            )}
        </div>
    );
}