import { FC } from "react";

export const NavbarContainer: FC = ({ children }) => {
  return <div className="fixed top-0 bg-white/80 w-full h-24 p-5 flex items-center justify-between">{children}</div>;
};
