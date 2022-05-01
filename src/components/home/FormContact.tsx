import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const FormContact = forwardRef((_, ref) => {
  const { t } = useTranslation();

  return (
    <div id="form-contact-container" className="px-6 md:px-24 pt-10 mt-20 pb-20" ref={ref as never}>
      <h2 className="text-[#8108B9] text-6xl mb-10">{t("contact.title")}</h2>
      <span className=" text-base  md:text-3xl "> {t("contact.description")} contacto@huitinvestment.com</span>
    </div>
  );
});
export default FormContact;
