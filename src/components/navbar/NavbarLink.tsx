import { FC } from "react";

interface NavbarLinkProps {
  onClick: () => void;

  setshowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarLink: FC<NavbarLinkProps> = ({ children, onClick, setshowNavbar }) => {
  return (
    <span
      onClick={() => {
        setshowNavbar(false);
        onClick();
      }}
      className="my-8 md:my-0 mx-4 lg:mx-10 text-3xl md:text-base cursor-pointer"
    >
      {children}
    </span>
  );
};

export default NavbarLink;
