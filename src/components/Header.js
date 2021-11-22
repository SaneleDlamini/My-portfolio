import React, { useState } from "react";
import { FaBars} from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import { NavLink, useNavigate } from "react-router-dom";
import "../css/style.css";

const Header = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <span
          className="logo"
          onClick={() => {
            navigate("/home");
          }}
        >
          Awesome Movies
        </span>
        <ul>
          <li>
            <a>
              <NavLink activeClassName="active" to="/home">
                Home
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink activeClassName="active" to="/movies">
                Popular movies
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink activeClassName="active" to="/developer">
                About the Develper
              </NavLink>
            </a>
          </li>
        </ul>
        <span className="toggle-icon fa fa-user" onClick={toggleMenu}>
          {/* <FontAwesomeIcon icon={faCheckSquare} /> */}
          {!toggle && <FaBars />}
          {toggle && <FaTimes />}
        </span>
      </nav>
      {toggle && (
        <ul className="toggle-menu">
          <li>
            <a>
              <NavLink activeClassName="active" to="/home">
                Home
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink activeClassName="active" to="/movies">
                Popular movies
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink activeClassName="active" to="/developer">
                About the Develper
              </NavLink>
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
