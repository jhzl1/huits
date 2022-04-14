import { Formik } from "formik";
import { Custom } from "./custom";

const FormContact = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div id="form-contact-container" className="px-24 pt-10 mt-20 pb-20">
      <h2 className="text-[#8108B9] text-6xl mb-10">Contacto</h2>

      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col w-[50%] mb-4">
            <label htmlFor="" className="text-white w-full mb-4">
              Nombre y apellido
            </label>
            <input type="text" className="bg-black/50 rounded-full p-3  border-2 border-[#8108B9] text-white w-full" />
          </div>
          <div className="flex flex-col w-[50%] mb-4">
            <label htmlFor="" className="text-white w-full mb-4">
              Correo electrónico
            </label>
            <input type="text" className="bg-black/50 rounded-full p-3  border-2 border-[#8108B9] text-white w-full" />
          </div>
          <div className="flex flex-col w-[50%] mb-4">
            <label htmlFor="" className="text-white w-full mb-4">
              Teléfono
            </label>
            <input type="text" className="bg-black/50 rounded-full p-3  border-2 border-[#8108B9] text-white w-full" />
          </div>

          <div className="flex flex-col w-[50%] mb-4">
            <label htmlFor="" className="text-white w-full mb-4">
              Mensaje
            </label>
            <textarea className="bg-black/50 rounded-full p-3  border-2 border-[#8108B9] text-white w-full" />
          </div>

          <Custom.Button className="px-10 py-3 text-xl w-96 h-16">Enviar</Custom.Button>
        </div>
      </Formik>
    </div>
  );
};

export default FormContact;
