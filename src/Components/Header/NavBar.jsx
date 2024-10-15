import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Style from "./NavBar.module.css";

export default function NavBar() {
  const currentMode = localStorage.getItem("currentMode") || "dark";
  const [theme, setTheme] = useState(currentMode);

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  return (
    <Navbar expand="lg" className="fixed-top py-0 ">
      <Container className={`${Style.bgNav}  px-5`}>
        <Navbar.Brand href="#home" className="text-light">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className={`${Style.home} text-light`}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${Style.projects} text-light`}
            >
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className={`${Style.skills} text-light`}>
              Skills
            </Nav.Link>
            <Nav.Link
              href="#contacts"
              className={`${Style.contacts} text-light`}
            >
              Contacts
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1llBUJdj5-1u5HWpcAL9mW5uZ9HmIPUvp/view?usp=sharing"
              target="blank"
              className={`${Style.contacts}  text-light`}
            >
              Resume
            </Nav.Link>
          </Nav>
          <button onClick={toggleTheme} className="bgMode ms-auto">
            <i className="fa-solid fa-circle-half-stroke fs-5"></i>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
