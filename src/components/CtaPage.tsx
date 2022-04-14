import { Custom } from "./custom";

const CtaPage = () => {
  return (
    <div id="cta-container" className="h-screen flex items-center px-28">
      <div>
        <h2 className="text-white text-7xl my-5">Vive libre,</h2>
        <h2 className="text-white text-7xl my-5">vive Huit´s</h2>

        <Custom.Button className="px-10 py-3 text-xl w-96 h-16">Inicio</Custom.Button>
      </div>
    </div>
  );
};

export default CtaPage;
