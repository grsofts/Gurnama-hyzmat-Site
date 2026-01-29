import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Header2 = () => {

    const location = useLocation();
    const { t } = useTranslation();

    return (
    <header className="header-style-four site-header">
        
        
    	<div className="main-box">
            <div className="outer-container clearfix">
                <div className="logo-box">
                    <div className="logo"><a href="index.html"><img src="/src/assets/images/logo_white.png" className="py-4" style={{width: '290px', height: 'auto'}} alt="" /></a></div>
                </div>
                
                <div className="nav-outer clearfix">
                    <nav className="main-menu">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                        </div>
                        
                        <div className="navbar-collapse collapse clearfix">
                            <ul className="navigation clearfix">
                                <li className={location.pathname === "/home" ? "current" : ""}><a href="home">{t('menu.home')}</a></li>
                                <li className={location.pathname === "/services" ? "current" : ""}><a href="services">{t('menu.services')}</a></li>
                                <li className={location.pathname === "/projects" ? "current" : ""}><a href="projects">{t('menu.projects')}</a></li>
                                <li className={location.pathname === "/about-us" ? "current" : ""}><a href="about-us">{t('menu.aboutus')}</a></li>
                                <li className={location.pathname === "/contacts" ? "current" : ""}><a href="contacts">{t('menu.contacts')}</a></li>
                            </ul>
                        </div>
                    </nav>
                    
                </div>
                
                <div className="nav-toggler">
                <button className="hidden-bar-opener"><span className="icon fa fa-bars"></span></button>
                </div>
                
                
            </div>   
        </div>
    
    </header>
  );
};
export default Header2;