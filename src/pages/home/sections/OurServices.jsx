import { useTranslation } from "react-i18next";
import useServices from "../../../hooks/useServices";
import { imagePath } from "../../../utils/constants";

const OurServices = () => {
    const {t} = useTranslation();
    const { services, loading, error } = useServices()

    if (loading) return <div>Загрузка…</div>
    if (error) return <div>Ошибка загрузки</div>

    return (
        
    <section className="services-style-one">
    	<div className="outer-container">
        	<div className="centered-title style-two"><h2>{t('our')} <strong>{t('services')}</strong></h2></div>

        	<div className="row clearfix">
                {
                    services.map((service, index) => (
                        <div className="column col-md-4 col-sm-6 col-xs-12" key={index}>
                            <div className="inner-box wow fadeInLeft" data-wow-delay={`${index * 100}ms`} data-wow-duration="1500ms">
                                <figure className="image-box">
                                    <img height={250} style={{ objectFit: "cover" }} src={`${imagePath}${service.image}`} alt={service.title} />
                                    <a href="#" className="overlay-box"><span className="icon flaticon-arrows-9"></span></a>
                                </figure>
                                <div className="lower-box">
                                    <h3 className="sub-title"></h3>
                                    <h2 className="title">{service.title}</h2>
                                    <div className="text">{service.short_desc}</div>
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
export default OurServices;