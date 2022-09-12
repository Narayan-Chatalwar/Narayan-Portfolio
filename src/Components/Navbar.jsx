import React from "react";
import logo from "../Atributes/Nlogo2.svg";

import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div id="home">
      <div className={styles.navbarfixing}>
        <nav className="navbar shadow  navbar-expand-lg bg-light ">
          <div className="container-fluid">
            <img
              className={styles.logoimage}
              src={logo}
              style={{ width: "2rem" }}
              alt=""
            />
            <div className={styles.listcontainer}>
              <ul>
                <a href="#home">
                  <li>Home</li>
                </a>
                <a href="#about">
                  <li>About</li>
                </a>
                <a href="#skills">
                  <li>Skills</li>
                </a>
                <a href="#projects">
                  <li>Projects</li>
                </a>
                <a href="#contact">
                  
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
