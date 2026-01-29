import OurCompany from "./sections/OurCompany";
import OurProjects from "./sections/OurProjects";
import OurServices from "./sections/OurServices";
import Slider from "./sections/Slider";
import OurPartners from "./sections/OurPartners";
import Testimonials from "./sections/Testimonials";

const Home = () => {

    return (
      <>
          <Slider />
          <OurServices />
          <OurCompany />
          <OurProjects />
          <Testimonials/>
          <OurPartners/>
      </>
    );
}

export default Home;