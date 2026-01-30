import useSite from "../../../utils/useSite";

const Kontakt = () => {
    const  { contacts } = useSite();
    return (
        <section className="info-section">
    	<div className="auto-container">
            <div className="contact-info">
                
                <div className="row clearfix">
                    
                    <div className="info-column col-md-4 col-sm-6 col-xs-12">
                        <div className="inner-box">
                            <div className="icon wow zoomInStable" data-wow-delay="0ms" data-wow-duration="1500ms"><span className="flaticon-location"></span></div>
                            <h4>Find Us</h4>
                            <ul>
                                <li>{contacts.filter(c => c.key === 'address').map(c => c.value)}</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="info-column col-md-4 col-sm-6 col-xs-12">
                        <div className="inner-box">
                            <div className="icon wow zoomInStable" data-wow-delay="300ms" data-wow-duration="1500ms"><span className="flaticon-symbol"></span></div>
                            <h4>Mail Us</h4>
                            <ul>
                                <li>{contacts.filter(c => c.key === 'email').map(c => c.value)}</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="info-column col-md-4 col-sm-6 col-xs-12">
                        <div className="inner-box">
                            <div className="icon wow zoomInStable" data-wow-delay="600ms" data-wow-duration="1500ms"><span className="flaticon-technology-1"></span></div>
                            <h4>Call us</h4>
                            <ul>
                                <li>{contacts.filter(c => c.key === 'phone').map(c => c.value)}</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        </div>
    </section>
    );
};
export default Kontakt;