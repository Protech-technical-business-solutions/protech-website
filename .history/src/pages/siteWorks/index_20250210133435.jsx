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


import { RowsPhotoAlbum } from "react-photo-album";

let photos = [];

for(let i of allFiles){
    photos.push(
        {
            src:"/siteWorksPage/"+i,
            height:50,
            width:50,
        }
    )
}

export default function Test(props){
    return (
        <div>
            hello
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>        </div>
    );
}