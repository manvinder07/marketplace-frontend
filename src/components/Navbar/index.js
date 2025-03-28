import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../assets/images/mav-marketplace.png"; // Ensure your logo path is correct
import "./index.scss";

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="/" activeClassName="active" className="nav-item">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active" className="nav-item">
            <FontAwesomeIcon icon={faSearch} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
