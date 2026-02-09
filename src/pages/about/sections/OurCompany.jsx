import { useTranslation } from "react-i18next";
import useSite from "../../../utils/useSite";
import http from "../../../api/http";

const OurCompany = () => {
    const {t} = useTranslation();
    const {about} = useSite();
    return (
        <section className="default-content-section extended">
    	<div className="auto-container">
            <div className="row clearfix">
                <div className="text-column col-md-7 col-sm-12 col-xs-12">
                	<figure className="logo-image"><img width={150} src={http.defaults.baseURL+"/uploads" + about?.small_image} alt=""/></figure>
                    <h2>{t('our_company')}</h2>
                	<div className="text">
                    	<p><div
                        className="text"
                        dangerouslySetInnerHTML={{ __html: about?.full_text || '' }}
                        /></p>
                    </div>
                    <div className="content-info">
                    	<strong>Gurnama Hyzmaty</strong><div className="designation"></div>
                    </div>
                </div>
                
                <div className="image-column col-md-5 col-sm-12 col-xs-12">
                	<div className="inner clearfix">
                        <figure className="image-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img style={{objectFit: "cover"}} width={440} height={750} src={http.defaults.baseURL+"/uploads" + about?.large_image}alt=""/></figure>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
    };
export default OurCompany;