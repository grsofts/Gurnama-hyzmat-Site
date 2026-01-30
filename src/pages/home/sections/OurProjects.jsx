import { useTranslation } from "react-i18next";
import useProjects from "../../../hooks/useProjects";
import { imagePath } from "../../../utils/constants";

const OurProjects = () => {
    const {t} = useTranslation();
    const { projects, loading, error } = useProjects();

    if (loading) return <div>Загрузка…</div>
    if (error) return <div>Ошибка загрузки</div>
    return (
        <section className="gallery-style-one" style={{ backgroundImage: "url(/src/assets/images/background/bg3.jpg)" }}>
            <div className="outer-container">
                <div className="centered-title style-two">
                    <h2>{t('our')} <strong>{t('projects')}</strong></h2>
                </div>
                
                
                <div className="mixitup-gallery">
                    
                    <div className="filters text-center" style={{display:'none'}}>
                        <ul className="filter-tabs filter-btns clearfix">
                            <li className="active filter" data-role="button" data-filter="all"></li>
                            <li className="filter" data-role="button" data-filter=".design"></li>
                            <li className="filter" data-role="button" data-filter=".web"></li>
                            <li className="filter" data-role="button" data-filter=".photography"></li>
                            <li className="filter" data-role="button" data-filter=".ui"></li>
                        </ul>
                    </div>
                    
                    <div className="filter-list row clearfix">
                        {
                            projects.map((project, index) => (
                            <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portfolio-item-one mix mix_all all photography ui">
                                <div className="inner-box">
                                    <figure className="image-box"><img height={280} src={imagePath + project.images[0]?.image_url} alt=""/></figure>
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href={imagePath + project.images[0]?.image_url} className="option-btn lightbox-image" title={project.title} data-fancybox-group="example-gallery"><span className="icon flaticon-cross-2"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <h3><a href={'project?id='+project.id}>{project.title}</a></h3>
                                    </div>
                                </div>
                            </div>
                            ))
                        }

                        
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portfolio-item-one mix mix_all all design  ui">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/src/assets/images/gallery/3.jpg" alt=""/></figure>
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="/src/assets/images/gallery/3.jpg" className="option-btn lightbox-image" title="Image Caption Here" data-fancybox-group="example-gallery"><span className="icon flaticon-cross-2"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="caption">
                                    <h3><a href="project-single.html">Hover Dam</a></h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portfolio-item-one mix mix_all all design photography">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/src/assets/images/gallery/4.jpg" alt=""/></figure>
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="/src/assets/images/gallery/4.jpg" className="option-btn lightbox-image" title="Image Caption Here" data-fancybox-group="example-gallery"><span className="icon flaticon-cross-2"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="caption">
                                    <h3><a href="project-single.html">Hover Dam</a></h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portfolio-item-one mix mix_all all web ui">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/src/assets/images/gallery/5.jpg" alt=""/></figure>
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="/src/assets/images/gallery/5.jpg" className="option-btn lightbox-image" title="Image Caption Here" data-fancybox-group="example-gallery"><span className="icon flaticon-cross-2"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="caption">
                                    <h3><a href="project-single.html">Hover Dam</a></h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 portfolio-item-one mix mix_all all design web photography ui">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/src/assets/images/gallery/6.jpg" alt=""/></figure>
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="/src/assets/images/gallery/6.jpg" className="option-btn lightbox-image" title="Image Caption Here" data-fancybox-group="example-gallery"><span className="icon flaticon-cross-2"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="caption">
                                    <h3><a href="project-single.html">Hover Dam</a></h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );

};


export default OurProjects;
