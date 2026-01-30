import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import partner from "../../../api/partner.service";
import { imagePath } from "../../../utils/constants";

const OurPartners = () => {
    const {t} = useTranslation();
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPartners = async () => {
          try {
            const data = await partner.getPartners()
              setPartners(data)
          } catch (e) {
            console.log(e);
          } finally {
            setLoading(false);
          }
        }

        loadPartners();
      }, [])

    if (loading) return <div>Загрузка…</div>
    return (
        <section className="sponsors-style-one">
    	<div className="outer-container">
        	<div className="centered-title style-two">
            	<h2> {t('our')} <strong>{t('partners')}</strong></h2>
            </div>
            
            <ul className="sponsors-slider">
                {
                    partners.map(pt => (
                        <li key={pt.id} style={{ height: '190px !important'}}><a href="#"><img height={150} width={270} style={{objectFit: 'contain', height: '190px !important'}} src={`${imagePath}${pt.image}`} alt={pt.name}/></a></li>
                    ))
                }
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