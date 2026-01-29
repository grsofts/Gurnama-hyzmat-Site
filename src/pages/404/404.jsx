import { useTranslation } from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation();
  return (
    <>
    <section className="error-section">
        <div className="auto-container">
        	
            <figure className="error-image wow zoomInStable" data-wow-delay="0ms" data-wow-duration="2000ms"><img src="/src/assets/images/icons/error-image.png" alt=""/></figure>
            <h3>THIS IS NOT THE WEB PAGE YOU ARE LOOKING FOR</h3>
            <div className="text">Please try one of the following pages &ensp;  &ensp;
            <a href="home" className="theme-btn">{t('menu.home')}</a></div>
            
            <div className="search-website">
                <form method="post" action="home">
                    <div className="form-group">
                        {/* <input type="search" name="search" value="" required placeholder="What are you looking for?"/> */}
                        {/* <button type="submit" className="theme-btn"><span className="fa fa-search"></span></button> */}
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  );
};
export default NotFound;