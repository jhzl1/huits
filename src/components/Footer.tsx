import { socialMediaLink } from "const/socialMediaLinks";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links-container">
        {socialMediaLink.map(({ icon, link }, i) => (
          <a key={i} href={link} className="text-2xl md:mx-9" target="_blank" rel="noreferrer">
            <i className={`fa-brands ${icon}`} />
          </a>
        ))}
      </div>
      <p className="text-center mt-[25px]">2022 Todos los derechos reservados. Huit Investment</p>
    </footer>
  );
};

export default Footer;
