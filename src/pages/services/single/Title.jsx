import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Title = ({service}) => {
    const {t, i18n} = useTranslation();
    const lang = i18n.language;
    const title = service.translations[lang].title;

    useEffect(()=>{
    },[service]);
    
    return (
        <section className="page-title" style={{ backgroundImage: "url(/src/assets/images/background/bg3.jpg)" }}>
        <div className="auto-container">
            <div className="clearfix">
                <div className="title-column">
                    <h1>{title}</h1>
                </div>
                <div className="breadcrumb-column">
                    <ul className="bread-crumb clearfix">
                        <li><a href="/home">{t('menu.home')}</a></li>
                        <li><a href="/services">{t('menu.services')}</a></li>
                        <li className="active">{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
};
export default Title;