import Footer from "components/Footer";
import { Navbar } from "components/navbar";
import { socialMediaLink } from "const/socialMediaLinks";
import HomePage from "pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Navbar.Logo />

        <div className="flex items-center">
          <Navbar.Link>Nosotros</Navbar.Link>
          <Navbar.Link>Portafolio</Navbar.Link>
          <Navbar.Link>Proyectos</Navbar.Link>
          <Navbar.Link>Contactos</Navbar.Link>

          <div>
            {socialMediaLink.map(({ icon, link }, i) => (
              <a key={i} href={link} className="text-[#652682] text-xl mx-5" target="_blank" rel="noreferrer">
                <i className={`fa-brands ${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
