const CtaPortfolio = () => {
  return (
    <div id="cta-container">
      <div className="lg:grid-cols-4 flex">
        <div> 
          <h2 className="text-5xl sm:text-7xl my-5 font-bold">Huit</h2>
          <h2 className="text-5xl sm:text-4xl my-5 font-bold text-opacity-70 italic text-black">Huit´s Investment Portfolio</h2>
        </div>
        <div className="w-60">
          <h2></h2>
        </div>      
        <div className="w-60">
          <h2></h2>
        </div>   
        <div className="bg-black w-80 text-center sm:text-5xl font-bold bg-opacity-50 border-4 rounded-3xl border-purple-800">
        <div className="h-4"></div>   
        <h3 className="sm:text-2xl text-opacity-100">APR</h3> 
        <div className="h-4"></div>   
        <h3 className="sm:text-7xl">15%</h3>     
        </div>      
      </div>
    </div>
  );
};

export default CtaPortfolio;
