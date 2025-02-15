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

function divideArray(arr,no_of_chunks) { // dividing an array into subarrays
    const n = arr.length;
    const partSize = Math.floor(n / no_of_chunks);
    const remainder = n % no_of_chunks;

    // Determine the split points
    const part1 = arr.slice(0, partSize + (remainder > 0 ? 1 : 0));
    const part2 = arr.slice(partSize + (remainder > 1 ? 1 : 0), 2 * partSize + (remainder > 1 ? 1 : 0));
    const part3 = arr.slice(2 * partSize + (remainder > 2 ? 1 : 0));

    return [part1, part2, part3];
}


export default function Test(props){
    let allFileNamesInChunks = divideArray(allFiles, 3); // we need to divide this array into 3 chunks
    
    return (
        <div className="row">
            {allFileNamesInChunks.map(column=>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    {column.map(filename =>{
                        if(filename.endsWith(".mp4")){
                            return <div>
                                <video style={{
                                    // objectFit:"contain",
                                    marginBottom:10,
                                    maxWidth:500,
                                    // maxHeight:506.663,
                                    // height:"auto",
                                    // width:"auto",
                                }} muted={true}
                                playsInline={true} autoPlay={true}
                                src={`/siteWorksPage/${filename}`} />
                            </div>
                        }else{
                            return <div>
                                <img style={{
                                    // objectFit:"contain",
                                    marginBottom:10,
                                    maxWidth:500,
                                    // maxHeight:506.663,
                                    // height:"auto",
                                    // width:"auto",
                                }}
                                src={`/siteWorksPage/${filename}`} alt="our work image" />
                            </div>
                        }
                    })}
                </div>
            )}
        </div>
    );
}