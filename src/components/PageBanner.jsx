export default function PageBanner(props){
    return (
        <div style={{
            backgroundImage:`url(${props.bannerImageURL})`,
            width:"100%",
            height:170
        }}>
            <div className="d-flex align-items-center h-100 container">
                <h4 className="text-light fs-1 fw-bold">
                    {props.bannerTitle}
                </h4>
            </div>
        </div>
    );
}