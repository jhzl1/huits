import AboutUs from "components/AboutUs";
import CtaPage from "components/CtaHome";
import FormContact from "components/FormContact";
import Portfolios from "components/Portfolios";

const HomePage = () => {
  return (
    <div>
      <CtaPage />
      <AboutUs />
      <Portfolios />
      <FormContact />
    </div>
  );
};

export default HomePage;
