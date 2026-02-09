import { useTranslation } from "react-i18next";
import useSite from "../../../utils/useSite";
import http from "../../../api/http";

const OurCompany = () => {

    const { t } = useTranslation();
    const {about } = useSite();

    return (
        <section className="default-content-section bg-grey">
    	<div className="outer-container">
            <div className="row clearfix">
                <div className="text-column col-md-6 col-sm-12 col-xs-12">
                	<figure className="logo-image"><a href="index.html"><img width={120} src={http.defaults.baseURL+"/uploads" + about?.small_image} alt=""/></a></figure>
                    <h2>{t('our_company')}</h2>
                	<div className="text">
                    	<p>{
                            about?.short_text
                            }</p>
                    </div>
                    <div className="content-info">
                    	<strong></strong><div className="designation">Gurnama Hyzmaty</div>
                    </div>
                </div>
                

                <div className="image-column col-md-6 col-sm-12 col-xs-12">
                	<div className="inner clearfix">
                        <figure className="image-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img width={570} src={http.defaults.baseURL+"/uploads" + about?.large_image} alt=""/></figure>
                        {/* <figure className="video-box wow bounceInUp" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="/src/assets/images/resource/featured-image-5.jpg" alt=""/><a className="lightbox-image play-link" href="http://www.youtube.com/watch?v=opj24KnzrWo"><span className="icon flaticon-play-button"></span></a></figure> */}
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default OurCompany;