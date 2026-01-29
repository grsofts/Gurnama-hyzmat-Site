import Form from "./sections/Form";
import Kontakt from "./sections/Kontakt";
import Map from "./sections/Map";
import Title from "./sections/Title";
import '../../assets/js/validate.js';

const Contacts = () => {
  
  return (
    <>
        <Title />
        <Kontakt />
        <Map />
        <Form />
    </>
  );
}
export default Contacts;