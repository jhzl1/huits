import { NavbarContainer as NavbarHOC } from "./NavbarContainer";
import NavbarLink from "./NavbarLink";
import { NavbarLogo } from "./NavbarLogo";

export const Navbar = Object.assign(NavbarHOC, {
  Link: NavbarLink,
  Logo: NavbarLogo,
});
