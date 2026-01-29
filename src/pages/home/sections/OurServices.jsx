import { useTranslation } from "react-i18next";

const OurServices = () => {
    const {t} = useTranslation();

    return (
        
    <section className="services-style-one">
    	<div className="outer-container">
        	<div className="centered-title style-two"><h2>{t('our')} <strong>{t('services')}</strong></h2></div>

        	<div className="row clearfix">

                <div className="column col-md-4 col-sm-6 col-xs-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <figure className="image-box">
                        	<img src="/src/assets/images/resource/featured-image-1.jpg" alt=""/>
                            <a href="#" className="overlay-box"><span className="icon flaticon-arrows-9"></span></a>
                        </figure>
                        <div className="lower-box">
                            <h3 className="sub-title">Electrical Services</h3>
                            <h2 className="title">Local Specials</h2>
                            <div className="text">Praising pain was born and I will give you a complete account</div>
                        </div>
                    </div>
                </div>
                
                <div className="column col-md-4 col-sm-6 col-xs-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <figure className="image-box">
                        	<img src="/src/assets/images/resource/featured-image-2.jpg" alt=""/>
                            <a href="#" className="overlay-box"><span className="icon flaticon-arrows-9"></span></a>
                        </figure>
                        <div className="lower-box">
                            <h3 className="sub-title">Electrical Services</h3>
                            <h2 className="title">Piston Presser</h2>
                            <div className="text">Praising pain was born and I will give you a complete account</div>
                        </div>
                    </div>
                </div>
                
                <div className="column col-md-4 col-sm-6 col-xs-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <figure className="image-box">
                        	<img src="/src/assets/images/resource/featured-image-3.jpg" alt=""/>
                            <a href="#" className="overlay-box"><span className="icon flaticon-arrows-9"></span></a>
                        </figure>
                        <div className="lower-box">
                            <h3 className="sub-title">Electrical Services</h3>
                            <h2 className="title">Welding Irons</h2>
                            <div className="text">Praising pain was born and I will give you a complete account</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
};
export default OurServices;