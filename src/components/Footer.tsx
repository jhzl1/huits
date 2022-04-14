import { socialMediaLink } from "const/socialMediaLinks";

const Footer = () => {
  return (
    <div className="bg-[#652682] h-[118px] flex justify-center items-center flex-col pt-6">
      <div className="flex flex-row justify-center items-center">
        {socialMediaLink.map(({ icon, link }, i) => (
          <a
            key={i}
            href={link}
            className="text-white text-2xl mx-9"
            target="_blank"
            rel="noreferrer"
          >
            <i className={`fa-brands ${icon}`} />
          </a>
        ))}
      </div>
      <p className="text-white mar mt-[25px]">
        2022 Todos los derechos reservados Huit Investment
      </p>
    </div>
  );
};

export default Footer;
