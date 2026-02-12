import { useTranslation } from "react-i18next";

const HaveQuestion = () => {
    const {t} = useTranslation();
    return (
         <section className="call-to-action-two">
        <div className="auto-container">
        	<div className="inner-box clearfix">
                <div className="left-column">
                    <div className="title-outer">
                        <h4>{t('question_title')}</h4>
                        <h2>{t('question_subtitle')}</h2>
                    </div>
                </div>
                
                <div className="right-column">
                    <a href="/contacts" className="theme-btn btn-style-two">{t('buttons.feedback')}</a>
                </div>
			</div>            
        </div>
    </section>
    );
}

export default HaveQuestion;