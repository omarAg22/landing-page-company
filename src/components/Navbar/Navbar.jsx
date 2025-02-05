import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    // Add body scroll lock when menu is open
    document.body.style.overflow = !mobileMenu ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setMobileMenu(false);
    document.body.style.overflow = "unset";
  };

  const navItems = [
    { to: "hero", label: "Home", offset: 0 },
    { to: "program", label: "Services", offset: -260 },
    { to: "about", label: "About us", offset: -150 },
    { to: "contact", label: "Contact us", offset: -150, isButton: true },
  ];

  return (
    <nav className={`navbar ${sticky ? "navbar-sticky" : ""}`}>
      <div className="navbar-container">
        <p className="navbar-logo">Kadir Technologies</p>

        <img
          src={menu_icon}
          alt="Toggle menu"
          className="menu-icon"
          onClick={toggleMenu}
        />

        <ul className={`navbar-menu ${mobileMenu ? "show" : ""}`}>
          {navItems.map((item) => (
            <li key={item.to} className="navbar-item">
              <Link
                to={item.to}
                smooth={true}
                offset={item.offset}
                duration={500}
                className={item.isButton ? "navbar-button" : "navbar-link"}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
