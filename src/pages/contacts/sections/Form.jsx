import { useTranslation } from "react-i18next";

const Form = () => {
    const {t} = useTranslation();
    return (
        <section className="contact-section">
    	<div className="auto-container">
        	<div className="content-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                
                <div className="form-container">    
                    <div className="form">
                    	<div className="title"><h2>{t('buttons.feedback')}</h2></div>
                        
                        <form id="contact-form" method="post" action="sendemail.php">
                            <div className="row clearfix">
                                <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="username" value="" placeholder={t('fields.name')}/>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email" value="" placeholder={t('fields.mail')} required/>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" name="subject" value="" placeholder={t('fields.subject')} required/>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea name="message" placeholder={t('fields.message')} required></textarea>
                                </div>
                                
                                <div className="form-group text-center col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <button type="submit" className="theme-btn">{t('buttons.send')}</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
                
                
            </div>
        </div>
    </section>
    );
};
export default Form;