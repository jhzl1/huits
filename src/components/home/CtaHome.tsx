import { useTranslation } from "react-i18next";

const CtaHome = ({ scrollToAbout }: { scrollToAbout: () => void }) => {

  const { t } = useTranslation();
  return (
    <div id="cta-container">
      <div>
        <h2 className="text-5xl sm:text-7xl my-5 font-bold">{t("slogan.1")}</h2>
        <h2 className="text-5xl sm:text-7xl my-5 font-bold">{t("slogan.2")}</h2>
        <button
          className=" gradient text-white rounded-full py-3 mt-20 md:mt-0 text-xl w-72 sm:w-96 h-16"
          onClick={scrollToAbout}
        >
          {t("start.button.text")}
        </button>
      </div>
    </div>
  );
};

export default CtaHome;
