import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";

import { Navbar } from "components/navbar";
import { socialMediaLink } from "const/socialMediaLinks";
import Footer from "components/Footer";
import HomePage from "pages/HomePage";
import Burger from "assets/vectors/Burger";
import AboutUs from "components/AboutUs";
import Portfolios from "components/Portfolios";
import FormContact from "components/FormContact";
import CtaHome from "components/CtaHome";

function App() {
  const [showNavbar, setshowNavbar] = useState(false);
  const portfolioRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <BrowserRouter>
      <Navbar>
        <Navbar.Logo />
        <button className="md:hidden z-20" onClick={() => setshowNavbar(!showNavbar)}>
          <Burger color={showNavbar ? "white" : "purple"} />
        </button>

        <div
          className={`responsive-links-container gradient md:w-auto md:bg-none md:flex-row md:relative md:right-0 md:text-[#652682] py-10 ${
            showNavbar ? "right-0" : " -right-[600px]"
          } transition-all duration-200 `}
        >
          <Navbar.Link onClick={scrollToAbout} setshowNavbar={setshowNavbar}>
            Nosotros
          </Navbar.Link>
          <Navbar.Link onClick={scrollToPortfolio} setshowNavbar={setshowNavbar}>
            Portafolio
          </Navbar.Link>
          <Navbar.Link onClick={scrollToAbout} setshowNavbar={setshowNavbar}>
            Proyectos
          </Navbar.Link>
          <Navbar.Link onClick={scrollToAbout} setshowNavbar={setshowNavbar}>
            Contactos
          </Navbar.Link>

          <div className="grid grid-cols-3 gap-14 md:gap-5 my-8 md:flex">
            {socialMediaLink.map(({ icon, link }, i) => (
              <a key={i} href={link} className="text-3xl md:text-base" target="_blank" rel="noreferrer">
                <i className={`fa-brands ${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </Navbar>
      <div className="App w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CtaHome scrollToAbout={scrollToAbout} />
                <AboutUs ref={aboutRef} />
                <Portfolios ref={portfolioRef} />
                <FormContact />
              </>
            }
          />
        </Routes>
        <Footer />

        <div id="div">desplazamientro</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
