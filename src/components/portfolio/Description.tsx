import Infinite from "assets/vectors/Infinite";
import { useTranslation } from "react-i18next";

const DescriptionPortfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white mb-7 md:mb-20">
      <div className="md:py-28 grid grid-cols-1  lg:grid-cols-2">
        <div className="px-6 md:px-24 py-10">
          <h2 className="text-white text-5xl md:text-6xl mb-10">{t("history.title")}</h2>

          <p className="text-xl md:text-3xl">{t("history.description")}</p>
        </div>

        <img
          src={require("assets/img/ourportfolio.png")}
          alt=""
          className="mb-10 md:mb-0 h-[300px] w-[600px] sm:w-[900px] sm:h-[500px] md:h-[600px]"
        />
      </div>
      <div className="mb-40 md:mb-52">
        <Infinite className="w-60  md:w-96 lg:w-[500px]" />

        <div className="mx-5 md:mx-24 flex flex-col items-end justify-end -m-32">
          <h2 className="text-[#8108B9] text-5xl md:text-6xl md:self-end">{t("portfolio.composition.title")}</h2>
        </div>
      </div>
      <p className="text-xl md:text-3xl px-6 md:px-24 py-0  md:py-10">{t("portfolio.composition.description")}</p>
    </div>
  );
};

export default DescriptionPortfolio;
