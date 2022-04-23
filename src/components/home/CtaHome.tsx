const CtaHome = ({ scrollToAbout }: { scrollToAbout: () => void }) => {
  return (
    <div
      id="cta-container"
      className="h-screen flex flex-col justify-center md:flex-row md:justify-start items-center p-0 md:px-28 "
    >
      <div>
        <h2 className="text-5xl sm:text-7xl my-5 font-bold">Vive libre,</h2>
        <h2 className="text-5xl sm:text-7xl my-5 font-bold">vive Huit´s</h2>
        <button
          className=" gradient text-white rounded-full py-3 mt-20 md:mt-0 text-xl w-72 sm:w-96 h-16"
          onClick={scrollToAbout}
        >
          Inicio
        </button>
      </div>
    </div>
  );
};

export default CtaHome;
