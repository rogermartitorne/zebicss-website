import { NavLink } from "react-router-dom";
import { GitHub } from "../utils/icons"
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar">
        <div style={{ display: "flex", gap: "1em" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/docs">Docs</NavLink>
          <NavLink to="/demo">Demo</NavLink>
        </div>
        <a href="https://github.com/rogermartitorne/zebicss" target="_blank">
          {GitHub}
        </a>
      </nav>
    </>
  );
}

export default Header;