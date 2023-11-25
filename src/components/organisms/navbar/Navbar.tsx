import React, { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from "./images/logo.png";
import Logo from "../../../assets/img/emblema.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink } from "react-router-hash-link";

import "./Navbar.css";
import { Box } from "@mui/material";
import { navLinks } from "../../../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //   change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.screenY >= 90 ? setColor(true) : setColor(false);
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  const closeMenu = () => setClick(false);

  return (
    <Box className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {
            click ? (
              <CloseIcon
                sx={{ color: "#fff", width: "30px", height: "30px" }}
              />
            ) : (
              <MenuIcon sx={{ color: "#fff", width: "30px", height: "30px" }} />
              // <FaTimes size={30} style={{ color: "#ffffff" }} />
            )
            // <FaBars size={30} style={{ color: "#ffffff" }} />
          }
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navLinks.map(
            (item: { name: string; link: string }, index: number) => {
              if (item.link.includes("#")) {
                return (
                  <HashLink
                    to={item.link}
                    key={index}
                    className={"nav-item"}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </HashLink>
                );
              } else {
                return (
                  <Link
                    to={item.link}
                    key={index}
                    className="nav-item"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                );
              }
            }
          )}
          {/* <Link to={"/"} className={"nav-item"}>
            Home
          </Link>
          {/* <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li> 
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>
              Demo
            </a>
          </li> */}
        </ul>
      </nav>
    </Box>
  );
};

export default Navbar;
