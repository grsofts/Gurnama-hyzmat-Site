const Map = () => {
    return (
        <section className="map-section">
    	<div className="map-outer">
            
            {/* <div className="map-canvas"
                data-zoom="10"
                data-lat="23.820208"
                data-lng="90.413266"			  
                data-type="roadmap"
                data-hue="#ffc400"
                data-title="Dhaka"
                data-content="Dhaka 1206, Bangladesh<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
                style={{ height: "600px" }}>
                    <div id="map" style={{ height: "100%" }}></div> 
            </div> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1443.0535728412217!2d58.437378940665006!3d37.922902117262375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffc5c481e0ac5%3A0x3024bdde975fcdf1!2sShaylan%20Group!5e0!3m2!1sru!2sat!4v1769605056810!5m2!1sru!2sat" height="900" 
            style={{ border: 0, width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    );
};
export default Map;