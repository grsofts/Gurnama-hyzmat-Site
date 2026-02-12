import { useCallback, useEffect, useState } from "react";
import bannersService from "../../../api/sliders.service";
import { useTranslation } from "react-i18next";
import { imagePath } from "../../../utils/constants";

const Slider = () => {
  // const [loading, setLoading] = useState(false);
  const [banners, setBanners] = useState([]);
  const {t} = useTranslation();


 const loadBanners = useCallback(async () => {
  try {
    // setLoading(true);
    const data = await bannersService.getBanners();
    setBanners(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error(err);
  } finally {
    // setLoading(false);
  }
}, []);
  useEffect(() => { 
    loadBanners(); 
  }, [loadBanners]);

  return (
    <section className="main-slider style-one">
    	
        <div className="tp-banner-container">
            <div className="tp-banner">
                <ul>
                	{
                    banners.map(sl => (
                      <li key={sl.id} data-transition="slideup" data-slotamount="1" data-masterspeed="1000" data-thumb={`${imagePath}${sl.image}`} data-saveperformance="off"  data-title="Awesome Title Here">
                        <img src={`${imagePath}${sl.image}`}  alt=""  data-bgposition="center bottom" data-bgfit="cover" data-bgrepeat="no-repeat"/> 

                        <div className="transparent-bg-layer-full"></div>
                        
                        <div className="tp-caption sfb sft tp-resizeme"
                        data-x="center" data-hoffset="0"
                        data-y="center" data-voffset="-100"
                        data-speed="1500"
                        data-start="0"
                        data-easing="easeOutExpo"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.01"
                        data-endelementdelay="0.3"
                        data-endspeed="1200"
                        data-endeasing="Power4.easeIn"><h5 className="sub-heading"></h5></div>
                        
                        
                        <div className="tp-caption sfb sft tp-resizeme"
                        data-x="center" data-hoffset="0"
                        data-y="center" data-voffset="-40"
                        data-speed="1500"
                        data-start="500"
                        data-easing="easeOutExpo"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.01"
                        data-endelementdelay="0.3"
                        data-endspeed="1200"
                        data-endeasing="Power4.easeIn"><h3 className="big-text">{sl.title}</h3></div>
                        
                        <div className="tp-caption sfb sfb tp-resizeme"
                        data-x="center" data-hoffset="0"
                        data-y="center" data-voffset="30"
                        data-speed="1500"
                        data-start="1000"
                        data-easing="easeOutExpo"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.01"
                        data-endelementdelay="0.3"
                        data-endspeed="1200"
                        data-endeasing="Power4.easeIn"><h3 className="bg-text">{sl.name}</h3></div>
                        
                        <div className="tp-caption sfb sfb tp-resizeme"
                        data-x="center" data-hoffset="0"
                        data-y="center" data-voffset="110"
                        data-speed="1500"
                        data-start="1500"
                        data-easing="easeOutExpo"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.01"
                        data-endelementdelay="0.3"
                        data-endspeed="1200"
                        data-endeasing="Power4.easeIn"><div className="text text-center">{sl.desc}</div></div>
                        
                        <div className={sl.link === null ? "hidden" : "tp-caption sfb sfb tp-resizeme"}
                        data-x="center" data-hoffset="0"
                        data-y="center" data-voffset="190"
                        data-speed="1500"
                        data-start="2000"
                        data-easing="easeOutExpo"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.01"
                        data-endelementdelay="0.3"
                        data-endspeed="1200"
                        data-endeasing="Power4.easeIn">
                          <a href={sl.link} target={sl.link?.startsWith('http') ? '_blank' : undefined} className="theme-btn btn-style-one">{t('buttons.readmore')}</a>
                        </div>
                        
                        </li>
                    ))
                  }
                    
                </ul>
                
            	<div className="tp-bannertimer"></div>
            </div>
        </div>
    </section>  
  );
}
export default Slider;