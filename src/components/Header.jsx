
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useSite from "../utils/useSite";
import { imagePath } from "../utils/constants";
const Header = () => {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);
    const { contacts } = useSite();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(false);
        localStorage.setItem('lang', lang);
        window.location.reload();
    };
    return (
    <header className="header-style-one site-header">
    	<div className="header-top">
        	<div className="outer-container">
            	<div className="row clearfix">
                    
                    <div className="top-left col-md-4 col-sm-4 col-xs-12">
                    	<ul>
                        	<li><span className="icon fa fa-clock-o"></span> Mon - Sat : 9 am - 9 pm</li>
                        </ul>
                    </div>
                    
                    <div className="top-right-inner">

                        {/* ЯЗЫК */}
                        <div className="lang-wrapper">
                        <div className="current-lang" onClick={() => setOpen(!open)}>
                            <img
                            src={`/flags/${i18n.language}.png`}
                            alt={i18n.language}
                            />
                        </div>

                        {open && (
                            <ul className="lang-dropdown">
                            <li onClick={() => changeLang("ru")}>
                                <img src="/flags/ru.png" />
                            </li>
                            <li onClick={() => changeLang("tm")}>
                                <img src="/flags/tm.png" />
                            </li>
                            <li onClick={() => changeLang("en")}>
                                <img src="/flags/en.png" />
                            </li>
                            </ul>
                        )}
                        </div>

                    	<ul>
                            
                        	<li className="social-links">
                                {
                                    contacts?.map((c, index) => {
                                        if (c.type === 'social') {
                                            return (
                                                <a key={index} target="_blank" href={c.link}>
                                                    <span>
                                                        <img width={14} style={{filter: 'invert(100%)'}} src={`${imagePath}${c.icon}`} alt=""/>
                                                    </span>
                                                </a>
                                            );
                                        }
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        <div className="header-upper">
        	<div className="outer-container">
            	<div className="clearfix">
                	
                	<div className="pull-left logo-outer">
                    	<div className="logo">
                            <a href="home">
                            <div className="d-flex align-items-start">
                                <img src="/src/assets/images/logo_white.png" style={{width: '320px', height: 'auto'}} alt="Factorian" title="Factorian"/>
                            </div>
                        </a></div>
                    </div>
                    
                    <div className="pull-right upper-right clearfix">
                    	
                        <div className="upper-column info-box">
                        	<div className="icon-box"><span className="flaticon-telephone-1"></span></div>
                            <ul>
                            	<li><strong style={{cursor: 'pointer'}}><a style={{color: 'inherit', textDecoration: 'none'}} href={`tel:${contacts.find(c => c.key === 'phone')?.value}`}>
                                    {contacts.find(c => c.key === 'phone')?.value}
                                </a></strong></li>
                                <li style={{ textTransform: 'lowercase' }}><a style={{color: 'inherit', textDecoration: 'none'}} href={`mailto:${contacts.find(c => c.key === 'email')?.value}`}>
                                    {contacts.find(c => c.key === 'email')?.value}
                                </a></li>
                            </ul>
                        </div>
                        
                        <div className="upper-column info-box">
                        	<div className="icon-box"><span className="flaticon-placeholder-3"></span></div>
                            <ul>
                            	<li><strong>{contacts.find(c => c.key === 'address')?.value}</strong></li>
                                <li><span>{contacts.find(c => c.key === 'address')?.value}</span></li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="header-lower">
        	<div className="outer-container">
            	<div className="main-box">
                
                    <div className="outer-container clearfix">
                        
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
                                        <li className="current"><a href="home">{t('menu.home')}</a></li>
                                        <li className=""><a href="services">{t('menu.services')}</a></li>
                                        <li className=""><a href="projects">{t('menu.projects')}</a></li>
                                        <li className=""><a href="about-us">{t('menu.aboutus')}</a></li>
                                        <li><a href="contacts">{t('menu.contacts')}</a></li>
                                    </ul>
                                </div>
                            </nav>
                            
                        </div>
                        
                        <div className="nav-toggler">
                        <button className="hidden-bar-opener"><span className="icon fa fa-bars"></span></button>
                        </div>
                        {/* <div className="search-box-btn"><span className="icon fa fa-search"></span></div> */}
                        
                    </div>    
                </div>
                
            </div>
        </div>
    
    </header>
    );
};
export default Header;