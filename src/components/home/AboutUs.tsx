import Infinite from "assets/vectors/Infinite";
import { forwardRef } from "react";

const AboutUs = forwardRef((_, ref) => (
  <div className="text-white mb-20" ref={ref as never}>
    <div className="py-28  grid grid-cols-2">
      <div className="mx-24 ">
        <h2 className="text-[#8108B9] text-6xl mb-10">
          Quiénes <span className="text-white"> somos</span>
        </h2>

        <p className="text-3xl">
          Somos un equipo multidisciplinario enfocado en brindar soluciones innovadoras basadas en la aplicación de
          tecnologías blockchain, con ello buscamos innovar continuamente en el mundo financiero global fundamentado en
          parámetros de eficiencia e integridad. Huit’s Investment nace como un holding cuya premisa fundamental es la
          construcción de confianza y la continua búsqueda de oportunidades de crecimiento.
        </p>
      </div>

      {/* <div>
          <img src={require("assets/img/about.png")} alt="" className="w-[940px] h-[600px]" />
        </div> */}
    </div>
    <div className="mb-52">
      {/* <Infinite /> */}

      <div className="mx-24 flex flex-col items-end justify-end -m-32">
        <h2 className="text-[#8108B9] text-6xl mb-5 self-end">Nuestro propósito</h2>

        <span className="text-white text-5xl"> y nuestros valores</span>
      </div>
    </div>
    <p className="text-3xl mx-24">
      En Huit's investment nuestro propósito es democratizar el acceso al mercado bursátil y financiero teniendo como
      fundamento una adecuada administración del riesgo de mercado, así como la búsqueda continua de oportunidades en un
      mundo competitivo, que beneficien los intereses de nuestros stakeholders promoviendo así un crecimiento tanto
      personal como financiero de los mismos.
    </p>
  </div>
));

export default AboutUs;
