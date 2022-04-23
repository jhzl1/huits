import { forwardRef } from "react";

const FormContact = forwardRef((_, ref) => (
  <div id="form-contact-container" className="px-6 md:px-24 pt-10 mt-20 pb-20" ref={ref as never}>
    <h2 className="text-[#8108B9] text-6xl mb-10">Contacto</h2>
    <span className="text-3xl ">Escríbenos a contacto@huitinvestment.com</span>
  </div>
));
export default FormContact;
