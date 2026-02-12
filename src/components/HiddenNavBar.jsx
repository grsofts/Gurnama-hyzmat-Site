import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const HiddenNavBar = () => {
    const location = useLocation();
    const {t} = useTranslation();
  return (
    <section className="hidden-bar right-align">
        
        <div className="hidden-bar-closer">
            <button className="btn"><i className="fa fa-close"></i></button>
        </div>
        
        <div className="hidden-bar-wrapper">
        
            <div className="logo text-center">
                <a href="home"><img src="images/logo-sidebar.png" alt=""/></a>			
            </div>
            
            <div className="side-menu">
                <ul className="navigation clearfix">
                    <li className={location.pathname === "/home" ? "current" : ""}><a href="/home">{t('menu.home')}</a></li>
                    <li className={location.pathname === "/services" ? "current" : ""}><a href="/services">{t('menu.services')}</a></li>
                    <li className={location.pathname === "/projects" ? "current" : ""}><a href="/projects">{t('menu.projects')}</a></li>
                    <li className={location.pathname === "/about-us" ? "current" : ""}><a href="/about-us">{t('menu.aboutus')}</a></li>
                    <li className={location.pathname === "/contacts" ? "current" : ""}><a href="/contacts">{t('menu.contacts')}</a></li>
                </ul>
            </div>
        
            <div className="social-icons">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        
        </div>
    </section>
  );
}
export default HiddenNavBar;