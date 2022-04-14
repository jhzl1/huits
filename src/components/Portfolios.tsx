const Portfolios = () => {
  return (
    <div className="mx-24">
      <h2 className="text-[#8108B9] text-6xl mb-10">Portafolio</h2>

      <div className="grid grid-cols-3 gap-5">
        <div className="bg-gradient-to-br from-[#E164C5] via-[#8000FF] to-[#8000FF] text-white rounded-lg p-5">
          {/* <img src={require("assets/vectors/portfolio.svg")} alt="" className="w-28" /> */}

          <h3 className="font-bold text-3xl">Portafolio Huits</h3>
          <span className="text-xl">Nuestro propósito es democratizar el acceso al mercado bursátil.</span>
        </div>
        <div className="bg-gradient-to-br from-[#E164C5] via-[#8000FF] to-[#8000FF] text-white rounded-lg p-5">
          {/* <img src={require("assets/vectors/portfolio.svg")} alt="" className="w-28" /> */}

          <h3 className="font-bold text-3xl">Liga Huit's</h3>
          <span className="text-xl">Apoyamos el crecimiento de los becados ceando eventos en Axie Inifinity.</span>
        </div>
        <div className="bg-gradient-to-br from-[#E164C5] via-[#8000FF] to-[#8000FF] text-white rounded-lg p-5">
          {/* <img src={require("assets/vectors/portfolio.svg")} alt="" className="w-28" /> */}

          <h3 className="font-bold text-3xl">Beverly Huit's</h3>
          <span className="text-xl">La colección NFT que democratiza el acceso a una Land en Lunacia.</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
