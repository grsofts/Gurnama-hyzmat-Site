import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { formatDate, imagePath } from "../../../utils/constants";
const Content = ({project}) => {
    const {t, i18n} = useTranslation();
    const lang = i18n.language;
    const title = project?.translations?.[lang].title;
    const short_desc = project?.translations?.[lang].short_desc;
    const full_desc = project?.translations?.[lang]?.full_desc;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.initCarousel) {
                window.initCarousel();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [project]);


    return (
    <section class="single-project">
    	<div class="auto-container">
            <div class="basic-details">
                <div class="row clearfix">
                    <div class="image-column col-md-5 col-sm-8 col-xs-12">
                        
                        <div class="image-carousel">
                            <ul class="two-col-carousel">
                                {
                                    project.images.map((img, index)=>(
                                        <li key={index}><a href={imagePath + img.image_url} class="lightbox-image"><img src={imagePath + img.image_url} alt=""/></a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div class="content-column col-md-7 col-sm-12 col-xs-12">
                    	<div class="info-header">
                        	<h3>{title}</h3>
                            <div class="rating">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                    key={i}
                                    className={`fa ${i < project.rate ? "fa-star" : "fa-star-o"}`}
                                    ></span>
                                ))}
                            </div>
                            <div class="proj-location">{project.address}</div>
                        </div>
                        <div class="text-content">
                        	<ul class="info-list">
                            	<li><strong> {t('client')} :</strong>  {project.client_name} </li>
                                <li><strong> {t('completed')} :</strong>  {formatDate(project.completed)} </li>
                                <li><strong> {t('tags')} :</strong>  {project.tags} </li>
                            </ul>
                            
                            <p>{short_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comments-container">
                <div class="tabs-box tabs-style-six">
                    <ul class="tab-buttons clearfix">
                        <li data-tab="#tab-one" class="tab-btn active-btn">{t('description')}</li>
                    </ul>
                    
                    <div class="tabs-content">
                        <div class="tab active-tab" id="tab-one">
                            <div class="text-content">
                                <p dangerouslySetInnerHTML={{ __html: full_desc || "" }}></p>
                            </div>
                            
                        </div>
                        
                    </div>
                
                </div>
            </div>
            
        </div>
    </section>
    );
};
export default Content;