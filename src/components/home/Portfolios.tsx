import { forwardRef } from "react";
import { useTranslation, getI18n } from "react-i18next";
import { useRef, useState } from "react";

const Portfolios = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const portRef = useRef<any>(null);
  portRef.current.scrollTo(0, 0)

  const portfolios = [
    {
      title: "portfolio.item.1",
      description: "portfolio.descr.1",
      image: require("assets/img/graph.png"),
      info:"more.info",
    },
    {
      title: "portfolio.item.2",
      description: "portfolio.descr.2",
      image: require("assets/img/torneo.png"),
      info:"items.contact",
    },
    {
      title: "portfolio.item.3",
      description: "portfolio.descr.3",
      image: require("assets/img/pergamino.png"),
      info:"items.moreinfo",
    },
  ];

  const infoTr = getI18n();
  const Info = () =>  (
    <div className="gradient text-white rounded-full py-3 mt-20 md:mt-0 text-xl w-94 sm:w-auto h-16 text-center">
      { infoTr.language == "en" ? <MoreInfoTextEn /> : <SpanishInfo /> }
    </div>
  )

  const MoreInfo = () =>  (
    <div className="gradient text-white rounded-full py-3 mt-20 md:mt-0 text-xl w-94 sm:w-auto h-16 text-center">
      { infoTr.language == "en" ? <EnglishInfo /> : <MoreInfoTextEs /> }
    </div>
  )

  const EnglishInfo = () =>  (
    <a href="https://beverlyhuit.huitinvestment.com/english">More Info</a>
  )

  const SpanishInfo = () =>  ( 
    <a href="https://beverlyhuit.huitinvestment.com/español">Más Información</a>
  )

  const MoreInfoTextEn = () =>  (
   <a href="/ourportfolio">More Info</a>
  )

  const MoreInfoTextEs = () =>  (
    <a href="/ourportfolio">Más Información</a>
  )

  return (
    <div className="px-6 md:px-24 pt-10" ref={ref as never}>
      <h2 className="text-[#8108B9] text-5xl md:text-6xl mb-10"> {t("portfolio.title")}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {portfolios.map(({ title, description, image, info }) => (         
          <div className="gradient text-white rounded-lg p-7" key={title}>
            <img src={image} alt="" className="w-32 md:w-28 mb-5 m-auto" />
            <h3 className="font-bold text-3xl mb-3">{t(title)}</h3>
            <span className="text-xl">{t(description)}</span>
            <br></br>
            <br></br>
            <div className="content-center grid grid-cols-1 lg:grid-cols-1 gap-5">
              { info == "items.moreinfo" ? <Info /> : info == "more.info" ? <MoreInfo />: null }
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
});

export default Portfolios;
