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
      <Infinite className="w-60  md:w-96 lg:w-[500px]" />
      <div className="md:py-28 grid grid-cols-1  lg:grid-cols-2">
        <img
          src={require("assets/img/piechart.png")}
          alt=""
          className="ml-44 md:ml-3  4 mt-34 md:mt-24 mb-10 md:mb-0 h-[200px] w-[300px] sm:w-[600px] sm:h-[300px] md:h-[500px]"
        />
        <div className="px-6 md:px-24 py-10">
          <h2 className="text-[#8108B9] text-5xl md:text-6xl mb-10">{t("portfolio.composition.title")}</h2>
          <p className="text-xl md:text-3xl">{t("portfolio.composition.description")}</p>
        </div>
      </div>
      <div className="md:py-18 grid grid-cols-1  lg:grid-cols-1">
        <div className="px-6 md:px-24 py-10">
          <h2 className="text-white text-5xl md:text-6xl mb-10">{t("portfolio.historicchange.title")}</h2>
          <div className="bg-black w-[1000px] overflow-hidden sm:w-[900px] text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800 ml-auto mr-auto ">
            <img
              src={require("assets/img/historicprofit.png")}
              alt=""
              className="ml-auto mr-auto h-[200px] w-full sm:h-[300px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
      <div className="md:py-14 grid grid-cols-2  lg:grid-cols-2">
        <div className="ml-44 md:ml-3 mt-34 md:mt-24 mb-10 md:mb-0 w-[300px] sm:w-[600px]"></div>
        <div className="px-6 md:px-24 py-10">
          <h2 className="text-[#8108B9] text-7xl md:text-7xl mb-10">{t("portfolio.performance.title")}</h2>
        </div>
      </div>

      <div className="grid grid-cols-3  lg:grid-cols-3">
        <div className="bg-black w-80 text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800 mr-auto ml-auto">
          <div className="h-4"></div>
          <h3 className="sm:text-2xl text-opacity-100">{t("profit.time.1")}</h3>
          <div className="h-4"></div>
          <h3 className="sm:text-7xl">{process.env.REACT_APP_PERFORMANCE_1MONTH}</h3>
        </div>
        <div className="bg-black w-80 text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800 mr-auto ml-auto">
          <div className="h-4"></div>
          <h3 className="sm:text-2xl text-opacity-100">{t("profit.time.2")}</h3>
          <div className="h-4"></div>
          <h3 className="sm:text-7xl">{process.env.REACT_APP_PERFORMANCE_3MONTH}</h3>
        </div>
        <div className="bg-black w-80 text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800 mr-auto ml-auto">
          <div className="h-4"></div>
          <h3 className="sm:text-2xl text-opacity-100">{t("profit.time.3")}</h3>
          <div className="h-4"></div>
          <h3 className="sm:text-7xl">{process.env.REACT_APP_PERFORMANCE_1YEAR}</h3>
        </div>
        <br></br>
      </div>
      <div className="grid grid-cols-3  lg:grid-cols-3">
        <div className="bg-black w-80 text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800 mr-auto ml-auto">
          <div className="h-4"></div>
          <h3 className="sm:text-2xl text-opacity-100">{t("profit.time.4")}</h3>
          <div className="h-4"></div>
          <h3 className="sm:text-7xl">{process.env.REACT_APP_PERFORMANCE_INIT}</h3>
        </div>
        <div className="bg-black w-80 text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800 mr-auto ml-auto">
          <div className="h-4"></div>
          <h3 className="sm:text-2xl text-opacity-100">{t("profit.time.5")}</h3>
          <div className="h-4"></div>
          <h3 className="sm:text-7xl">{process.env.REACT_APP_PERFORMANCE_PROMD}</h3>
        </div>
        <div className="bg-black w-80 text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800 mr-auto ml-auto">
          <div className="h-4"></div>
          <h3 className="sm:text-2xl text-opacity-100">{t("profit.time.6")}</h3>
          <div className="h-4"></div>
          <h3 className="sm:text-7xl">{process.env.REACT_APP_PERFORMANCE_1MONTH}</h3>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPortfolio;
