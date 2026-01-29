import { useTranslation } from "react-i18next";

const OurPartners = () => {
    const {t} = useTranslation();
    return (
        <section className="sponsors-style-one">
    	<div className="outer-container">
        	<div className="centered-title style-two">
            	<h2> {t('our')} <strong>{t('partners')}</strong></h2>
            </div>
            
            <ul className="sponsors-slider">
                <li><a href="#"><img src="/src/assets/images/clients/1.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/2.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/3.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/4.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/5.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/1.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/2.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/3.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/4.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/5.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/1.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/2.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/3.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/4.jpg" alt=""/></a></li>
                <li><a href="#"><img src="/src/assets/images/clients/5.jpg" alt=""/></a></li>
            </ul>
        </div>
    </section>
    );
}

export default OurPartners;