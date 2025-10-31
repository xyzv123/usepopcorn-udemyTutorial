import { Children } from "react";
import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

function Navbar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export default Navbar;
