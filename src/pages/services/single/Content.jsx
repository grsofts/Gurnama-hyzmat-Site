import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { imagePath } from "../../../utils/constants";
const Content = ({service}) => {
    const { i18n} = useTranslation();
    const lang = i18n.language;
    const title = service?.translations?.[lang].title;
    const short_desc = service?.translations?.[lang].short_desc;
    const full_desc = service?.translations?.[lang]?.full_desc;
    const image = service?.translations?.[lang]?.image;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.initCarousel) {
                window.initCarousel();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [service]);


    return (
    <section class="news-detail-section">
    	<div class="auto-container">
            
            <div class="content-container">
            	<h2 class="post-title">{title}</h2>
                
                <div class="content">
                	<p dangerouslySetInnerHTML={{ __html: short_desc || "" }}></p>
                	<p dangerouslySetInnerHTML={{ __html: full_desc || "" }}></p>

                    <div class="two-column">
                    	<div class="row clearfix">
                        	<div class="image-column col-md-7 col-sm-12 col-xs-12"><figure class="image-box"><img src={imagePath + image} alt=""/></figure></div>
                        </div>	
                    </div>
                    
                </div>
            </div>
            
        </div>
    </section>
    
    );
};
export default Content;