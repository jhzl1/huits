import { forwardRef } from "react";
import { portfolios } from "const/portfolios";

const Portfolios = forwardRef((_, ref) => (
  <div className="px-6 md:px-24 pt-10" ref={ref as never}>
    <h2 className="text-[#8108B9] text-6xl mb-10">Portafolio</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {portfolios.map(({ title, description }) => (
        <div className="gradient text-white rounded-lg p-5" key={title}>
          {/* <img src={require("assets/vectors/portfolio.svg")} alt="" className="w-28" /> */}

          <h3 className="font-bold text-3xl">{title}</h3>
          <span className="text-xl">{description}</span>
        </div>
      ))}
    </div>
  </div>
));

export default Portfolios;
