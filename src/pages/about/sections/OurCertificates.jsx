import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import certs from "../../../api/certificate.service";
import { imagePath } from "../../../utils/constants";

const OurCertificates = () => {
    const {t} = useTranslation();

    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadCertificates = async () => {
            try {
            const data = await certs.getCertificates()
                setCertificates(data)
            } catch (e) {
            console.log(e);
            } finally {
            setLoading(false);
            }
        }

        loadCertificates();
        }, [])

    if (loading) return <div>Загрузка…</div>
    return (
        <section className="services-style-four">
    	<div className="auto-container">
        	<div className="default-sec-title left-aligned">
            	<h2>{t('menu.certificates')}</h2>
                <div className="desc-text">{t('certificate_subtitle')}</div>
            </div>
            
        	<div className="row clearfix">
            	
                {
                    certificates.map((cert, index) => (
                        <div key={index} className="featured-service-column col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="inner-box wow fadeIn" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <figure className="image-box"><a href="service-single.html"><img height={219} src={imagePath + cert.image} alt=""/></a></figure>
                                <div className="lower-content">
                                    <h3>{cert.name}</h3>
                                    <div className="text"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
                
            </div>
        </div>
    </section>
    );
};

export default OurCertificates;