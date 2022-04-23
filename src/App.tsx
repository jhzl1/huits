import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";

import { Home } from "pages";
import { Navbar } from "components/navbar";
import { socialMediaLink } from "const/socialMediaLinks";
import Burger from "assets/vectors/Burger";
import Footer from "components/Footer";

const App = () => {
  const [showNavbar, setshowNavbar] = useState(false);
  const portfolioRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const scrollOptions = { behavior: "smooth", block: "start" };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView(scrollOptions);
  };
  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView(scrollOptions);
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView(scrollOptions);
  };

  const links = [
    { title: "Nosotros", scrollFunc: scrollToAbout },
    { title: "Portafolio", scrollFunc: scrollToPortfolio },
    { title: "Contacto", scrollFunc: scrollToContact },
  ];

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
          {links.map(({ title, scrollFunc }) => (
            <Navbar.Link key={title} onClick={scrollFunc} setshowNavbar={setshowNavbar}>
              {title}
            </Navbar.Link>
          ))}

          <div className="grid grid-cols-3 gap-14 md:gap-5 my-8 md:flex">
            {socialMediaLink.map(({ icon, link }, i) => (
              <a key={i} href={link} className="text-3xl md:text-base" target="_blank" rel="noreferrer">
                <i className={`fa-brands ${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </Navbar>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home.CtaHome scrollToAbout={scrollToAbout} />
                <Home.AboutUs ref={aboutRef} />
                <Home.Portfolios ref={portfolioRef} />
                <Home.FormContact ref={contactRef} />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
