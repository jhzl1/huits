import { useState } from "react";
import { useTranslation } from "react-i18next";
import { string } from "yup";

type Language = "es" | "en";

const BtnChangeLocale = () => {
  const { i18n } = useTranslation();

  const colombiaFlag = require("assets/img/spanishFlag.png");
  const eeuuFlag = require("assets/img/englishFlag.png");

  const [language, setLanguage] = useState<Language>("en");

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === "en") setLanguage("es");
    else setLanguage("en");
  };

  return (
    <div className="ml-2">
      <div className="w-32 ml-10 col-span-2">
        <span>
          <button onClick={onChangeLanguage}>
           <img src={language === "es" ? eeuuFlag : colombiaFlag} alt="es" className="w-12 rounded-full" />                    
         </button>
      </span>
        <span>
          {language === "es" ? "English" : "Español"}
        </span>      
      </div> 
    </div>
  );
};

export default BtnChangeLocale;
