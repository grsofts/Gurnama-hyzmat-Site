import { useTranslation } from "react-i18next";

const Title = () => {
    const {t} = useTranslation();
    return (<section className="page-title" style={{ backgroundImage: 'url(/src/assets/images/background/title_about.png)' }}>
    	<div className="auto-container">
        	<div className="clearfix">
            	<div className="title-column">
                	<h1>{t('menu.aboutus')}</h1>
                </div>
                <div className="breadcrumb-column">
                    <ul className="bread-crumb clearfix">
                        <li><a href="home">{t('menu.home')}</a></li>
                        <li className="active">{t('menu.aboutus')}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>);
};

export default Title;
