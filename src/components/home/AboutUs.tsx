import Infinite from "assets/vectors/Infinite";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const AboutUs = forwardRef((_, ref) => {
  const { t } = useTranslation();

  return (
    <div className="text-white mb-7 md:mb-20" ref={ref as never}>
      <div className="md:py-28 grid grid-cols-1  lg:grid-cols-2">
        <div className="px-6 md:px-24 py-10">
          <h2 className="text-[#8108B9] text-5xl md:text-6xl mb-10">
            {t("about.title.1")} <span className="text-white"> {t("about.title.2")}</span>
          </h2>

          <p className="text-xl md:text-3xl">{t("about.description")}</p>
        </div>

        <img
          src={require("assets/img/about.png")}
          alt=""
          className="mb-10 md:mb-0 h-[300px] w-[600px] sm:w-[1000px] sm:h-[500px] md:h-[600px]"
        />
      </div>
      <div className="mb-40 md:mb-52">
        <Infinite className="w-60  md:w-96 lg:w-[500px]" />

        <div className="mx-5 md:mx-24 flex flex-col items-end justify-end -m-32">
          <h2 className="text-[#8108B9] text-5xl md:text-6xl mb-5 md:self-end">{t("about.title.3")}</h2>

          <span className="text-white text-5xl md:text-6xl"> {t("about.title.4")}</span>
        </div>
      </div>
      <p className="text-xl md:text-3xl px-6 md:px-24 py-0  md:py-10">{t("about.description.2")}</p>
    </div>
  );
});

export default AboutUs;
