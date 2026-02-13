import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import mailService from "../../../api/mail.service";


const Form = () => {
    const {t} = useTranslation();
    const [captchaToken, setCaptchaToken] = useState(null);
    const [sending, setSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);
    const [data, setData] = useState({
        username: '',
        email: '',
        subject: '',
        message: ''
    });

    console.log(import.meta.env.VITE_CAPTCHA_PUBLIC_TEST);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit=async (e)=>{
        console.log('Token',captchaToken);
        
        e.preventDefault();

        if (!captchaToken) {
            alert('Please complete captcha');
            return;
        }
        setSending(true);
        try{
            setCaptchaToken
            const payload = {
                ...data,
                captchaToken 
            };

            console.log(payload);

            const send = await mailService.sendMail(payload);
            if(send.status === 'OK'){
                setSending(false);
                setSendSuccess(true);
            }
        }catch(err){
            console.log('Error',err);
        }finally{
            setSending(false);
        }
    };

            
    if(sending){
        return (
            <div>Sending...</div>
        )
    }


    if(sendSuccess){
        return (
           <div>Send Success</div>
        )
    }

    return (
        <section className="contact-section">
    	<div className="auto-container">
        	<div className="content-box wow fadeIn" data-wow-delay="100ms" data-wow-duration="1500ms">
                
                <div className="form-container">    
                    <div className="form">
                    	<div className="title"><h2>{t('buttons.feedback')}</h2></div>
                        
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="row clearfix">
                                <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="username" value={data.username} onChange={handleChange} placeholder={t('fields.name')}/>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder={t('fields.mail')} required/>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" name="subject" value={data.subject}  onChange={handleChange} placeholder={t('fields.subject')} required/>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea name="message" value={data.message} onChange={handleChange} placeholder={t('fields.message')} required></textarea>
                                </div>
                                
                                <div className="form-group text-center col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                    <ReCAPTCHA
                                        sitekey={import.meta.env.VITE_CAPTCHA_PUBLIC_TEST}
                                        onChange={(token) => setCaptchaToken(token)}
                                    />
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