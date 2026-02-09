import { useTranslation } from "react-i18next";
import useSite from "../utils/useSite.jsx";
import { formatDaysAgo, imagePath } from "../utils/constants.js";
import useProjects from "../hooks/useProjects.jsx";
import http from "../api/http.js";

const Footer = () => {
    const { t } = useTranslation();
    const { contacts, about } = useSite();
    const {projects, loading, error} = useProjects();
  return (
    <footer className="main-footer">
        
        <div className="widgets-section" style={{ backgroundImage: "url(/src/assets/images/background/bg2.jpg)" }}>
        	<div className="outer-container">
            	<div className="row clearfix">
                	<div className="big-column col-md-6 col-sm-12 col-xs-12">
                    	<div className="row clearfix">
                            
                        	<div className="footer-column col-md-6 col-sm-6 col-xs-12">
                            	<div className="footer-widget about-widget">
                                	<figure className="footer-logo"><a href="index.html"><img src="/src/assets/images/logo_white.png" style={{height: "50px"}} alt=""/></a></figure>
                                    
                                    <div className="widget-content">
                                    	<div className="text">{about?.footer_text} </div>
                                        <ul className="contact-info">
                                            {
                                                contacts?.map((contact, index) => (
                                                    <li key={index} style={{ paddingLeft: 0}}>
                                                        <span style={{marginRight: 10}}>
                                                            <img src={`${imagePath}${contact.icon}`} style={{filter: 'invert(100%)', height: '24px', width: '24px'}} alt={contact.value} /> 
                                                        </span>
                                                        <span>
                                                            {contact.value}
                                                        </span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                	<div className="big-column col-md-6 col-sm-12 col-xs-12">
                    	<div className="row clearfix">
                            
                        	<div className="footer-column col-md-6 col-sm-6 col-xs-12">
                            	<div className="footer-widget links-widget">
                                	<h2>{t('pages')}</h2>
                                    <div className="widget-content">
                                    	<ul className="list">
                                        	<li><a href="home">{t('menu.home')}</a></li>
                                            <li><a href="about-us">{t('menu.aboutus')}</a></li>
                                            <li><a href="services">{t('menu.services')}</a></li>
                                            <li><a href="projects">{t('menu.projects')}</a></li>
                                            <li><a href="contacts">{t('menu.contacts')}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        	<div className="footer-column col-md-6 col-sm-6 col-xs-12">
                            	<div className="footer-widget posts-widget">
                                	<h2>{t('last_projects')}</h2>
                                    <div className="widget-content">
                                        {loading && <p>Loading...</p>}
                                        {error && <p>Error loading posts</p>}
                                        {!loading && !error && projects.slice(0, 2).map(post => {
                                            return (
                                                <div className="post" key={post.id}>
                                                    <div className="content">
                                                        <figure className="post-thumb"><a href="#"><img src={http.defaults.baseURL+"/uploads" + post?.images[0].image_url} alt=""/></a></figure>
                                                        <h4><a href="#">{post.title}</a></h4>
                                                        <div className="time">{formatDaysAgo(post.completed)}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                 </div>
             </div>
         </div>
         
         
         <div className="footer-bottom">
         	<div className="outer-container">
            	<div className="row clearfix">
                	<div className="col-md-6 col-sm-12"><div className="copyright">Gurnama Hyzmaty &copy; <span className="year">{new Date().getFullYear()}</span>. All rights are reserved.</div></div>
                    <div className="col-md-6 col-sm-12"><div className="developed-by">Developed by <a target="_blank" href="https://shaylan.biz/it-department" className="author-name">Shaylan Group - IT Solutions</a></div></div>
                </div>
            </div>
         </div>
         
    </footer>
  );
}

export default Footer;