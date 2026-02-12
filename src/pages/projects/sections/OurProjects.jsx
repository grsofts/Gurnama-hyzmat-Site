import { useTranslation } from "react-i18next";
import useProjects from "../../../hooks/useProjects";
import { formatDate, imagePath } from "../../../utils/constants";
import { Link } from "react-router-dom";

const OurProjects = () => {
    const {t} = useTranslation();
    const {projects, loading, error} = useProjects();
    if (loading) return <div>Загрузка…</div>
    if (error) return <div>Ошибка загрузки</div>
    return (
        <section className="default-news-section">
    	<div className="auto-container">
            
            {
                projects.map((project, index) => (
                    <div className="news-style-four" key={index}>
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="clearfix">
                                <div className="image-column pull-right col-lg-6 col-sm-6 col-md-5 col-xs-12">
                                    <figure className="image-box">
                                        <Link to={project.id.toString()}>
                                            <img src={imagePath + project.images[0]?.image_url} alt=""/>
                                        </Link>
                                        </figure>
                                </div>
                                <div className="content-column pull-left col-lg-6 col-sm-6 col-md-5 col-xs-12">
                                    <div className="inner">
                                        <div className="info"><a className="cat-name">{project.client_name}</a>     <span className="date">{formatDate(project.completed)}</span></div>
                                        <h3><a href="blog-single.html">{project.title}</a></h3>
                                        <div className="text">{project.short_desc}</div>
                                        <Link to={project.id.toString()} className="theme-btn btn-style-two">
                                            {t('buttons.readmore')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </section>
    );
    };
export default OurProjects;