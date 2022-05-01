import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Portfolios = forwardRef((_, ref) => {
  const { t } = useTranslation();

  const portfolios = [
    {
      title: "portfolio.item.1",
      description: "portfolio.descr.1",
      image: require("assets/img/graph.png"),
    },
    {
      title: "portfolio.item.2",
      description: "portfolio.descr.2",
      image: require("assets/img/torneo.png"),
    },
    {
      title: "portfolio.item.3",
      description: "portfolio.descr.3",
      image: require("assets/img/pergamino.png"),
    },
  ];

  return (
    <div className="px-6 md:px-24 pt-10" ref={ref as never}>
      <h2 className="text-[#8108B9] text-5xl md:text-6xl mb-10"> {t("portfolio.title")}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {portfolios.map(({ title, description, image }) => (
          <div className="gradient text-white rounded-lg p-7" key={title}>
            <img src={image} alt="" className="w-32 md:w-28 mb-5 m-auto" />

            <h3 className="font-bold text-3xl mb-3">{t(title)}</h3>
            <span className="text-xl">{t(description)}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Portfolios;
