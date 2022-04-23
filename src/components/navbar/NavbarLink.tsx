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
      className="navbar-link"
    >
      {children}
    </span>
  );
};

export default NavbarLink;
