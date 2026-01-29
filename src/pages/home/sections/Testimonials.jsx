import { useTranslation } from "react-i18next";

const Testimonials = () => {
    const {t, i18n} = useTranslation();
    return (
        <section className="testimonial-style-one">
    	<div className="auto-container">
        	<div className="centered-title style-two">
                {
                    i18n.language === 'ru' ? 
                    <h2>{t('testimonial')} <strong>{t('clients')}</strong></h2>
                    :
                    <h2>{t('clients')} <strong>{t('testimonial')}</strong></h2>
                }
            </div>
            
            <div className="testimonial-carousel two-column-carousel">
                <div className="slide-item">
                    <div className="inner-box clearfix">
                    	<div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                        
                        <div className="image-outer">
                        	<figure className="author-image"><img src="/src/assets/images/resource/testi-image-1.jpg" alt=""/></figure>
                        </div>
                        <div className="content-outer">
                        	<div className="text">I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</div>
                            <h4>- Hasib Sharif,  <span className="theme_color">Envato</span></h4>
                        </div>
                    </div>
                </div>
                
                <div className="slide-item">
                    <div className="inner-box clearfix">
                    	<div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                        <div className="image-outer">
                        	<figure className="author-image"><img src="/src/assets/images/resource/testi-image-2.jpg" alt=""/></figure>
                        </div>
                        <div className="content-outer">
                        	<div className="text">I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</div>
                            <h4>- Tahira Tuz Zohra,  <span className="theme_color">Envato</span></h4>
                        </div>
                    </div>
                </div>
                
                <div className="slide-item">
                    <div className="inner-box clearfix">
                    	<div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                        <div className="image-outer">
                        	<figure className="author-image"><img src="/src/assets/images/resource/testi-image-1.jpg" alt=""/></figure>
                        </div>
                        <div className="content-outer">
                        	<div className="text">I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</div>
                            <h4>- Hasib Sharif,  <span className="theme_color">Envato</span></h4>
                        </div>
                    </div>
                </div>
                
                <div className="slide-item">
                    <div className="inner-box clearfix">
                    	<div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                        <div className="image-outer">
                        	<figure className="author-image"><img src="/src/assets/images/resource/testi-image-2.jpg" alt=""/></figure>
                        </div>
                        <div className="content-outer">
                        	<div className="text">I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</div>
                            <h4>- Tahira Tuz Zohra,  <span className="theme_color">Envato</span></h4>
                        </div>
                    </div>
                </div>
                
                <div className="slide-item">
                    <div className="inner-box clearfix">
                    	<div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                        
                        <div className="image-outer">
                        	<figure className="author-image"><img src="/src/assets/images/resource/testi-image-1.jpg" alt=""/></figure>
                        </div>
                        <div className="content-outer">
                        	<div className="text">I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</div>
                            <h4>- Hasib Sharif,  <span className="theme_color">Envato</span></h4>
                        </div>
                    </div>
                </div>
                
                <div className="slide-item">
                    <div className="inner-box clearfix">
                    	<div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                        <div className="image-outer">
                        	<figure className="author-image"><img src="/src/assets/images/resource/testi-image-2.jpg" alt=""/></figure>
                        </div>
                        <div className="content-outer">
                        	<div className="text">I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</div>
                            <h4>- Tahira Tuz Zohra,  <span className="theme_color">Envato</span></h4>
                        </div>
                    </div>
                </div>
                
            </div>
                
        </div>
    </section>
    );
}
export default Testimonials;