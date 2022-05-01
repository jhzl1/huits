import { useState } from "react";
import { useTranslation } from "react-i18next";

type Language = "es" | "en";

const BtnChangeLocale = () => {
  const { i18n } = useTranslation();

  const colombiaFlag = require("assets/img/colombia.png");
  const eeuuFlag = require("assets/img/eeuu.png");

  const [language, setLanguage] = useState<Language>("en");

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === "en") setLanguage("es");
    else setLanguage("en");
  };

  return (
    <div className="ml-2">
      <button onClick={onChangeLanguage}>
        <img src={language === "es" ? colombiaFlag : eeuuFlag} alt="es" className="w-7 rounded-sm" />
      </button>
    </div>
  );
};

export default BtnChangeLocale;
