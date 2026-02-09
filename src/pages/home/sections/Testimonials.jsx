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
                        	<div className="text">Обращались по ремонту алюминиевой лодки. Были трещины в корпусе после сезона. Всё сделали аккуратно, швы ровные, протечек нет. Проверяли уже на воде — результатом довольны.</div>
                            <h4>- Эзиз,  <span className="theme_color">Envato</span></h4>
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
                        	<div className="text">Нужно было срочно усилить корпус судна. Работы выполнили в оговорённые сроки, без лишних вопросов. Видно, что специалисты понимают, с чем работают. Рекомендую.</div>
                            <h4>- Максат,  <span className="theme_color">Envato</span></h4>
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
                        	<div className="text">Делали герметичную сварку — до этого была постоянная проблема с протечками. После ремонта всё сухо, даже при нагрузке. Качественная работа, без халтуры.</div>
                            <h4>- Александр Николаев,  <span className="theme_color"></span></h4>
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
                        	<div className="text">Обращались несколько раз по разным работам: ремонт корпуса и усиление конструкции. Каждый раз результат стабильный. Если нужен надёжный сварщик для водного транспорта — смело можно обращаться.</div>
                            <h4>- Тахир,  <span className="theme_color">Envato</span></h4>
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
                        	<div className="text">Заказывали установку и сварку металлических элементов на лодку. Всё сделали чётко по размерам, ничего не пришлось переделывать. Работа выглядит надёжно.</div>
                            <h4>- Ибрагим,  <span className="theme_color">Envato</span></h4>
                        </div>
                    </div>
                </div>
                
            </div>
                
        </div>
    </section>
    );
}
export default Testimonials;