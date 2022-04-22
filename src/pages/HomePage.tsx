import AboutUs from "components/AboutUs";
import CtaPage from "components/CtaHome";
import FormContact from "components/FormContact";
import Portfolios from "components/Portfolios";

const HomePage = () => {
  return (
    <>
      {/* <CtaPage /> */}
      <AboutUs />
      <Portfolios />
      <FormContact />
    </>
  );
};

export default HomePage;
