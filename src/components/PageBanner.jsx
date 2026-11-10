export default function PageBanner(props){
    return (
        <section className="page-banner" style={{ backgroundImage: `url("${props.bannerImageURL}")` }}>
            <div className="container">
                <h1>{props.bannerTitle}</h1>
            </div>
        </section>
    );
}
