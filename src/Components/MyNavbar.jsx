import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../image/mylogo.PNG";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import React, { useState } from "react";

function BasicExample() {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      bg="secondary"
      expand="lg"
      className="p-0 fixed-top"
      collapseOnSelect
      style={{
        background: "linear-gradient(0.3turn, #272d72, #ff1aa4)",
      }}
    >
      <Container className="mobileNav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center text-center">
            <Nav.Link
              href="#home"
              className={`text-info fw-bolder mt-4 navbarLink ${
                activeLink === "home" ? "active" : ""
              } mobile-nav-link`}
              onClick={() => handleNavLinkClick("home")}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#blog"
              className={`text-info fw-bolder mt-4 navbarLink ${
                activeLink === "blog" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("blog")}
            >
              BLOG
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={`text-info fw-bolder mt-4 navbarLink ${
                activeLink === "portfolio" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("portfolio")}
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link
              href="#certificazioni"
              className={`text-info fw-bolder mt-4 navbarLink ${
                activeLink === "certificazioni" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("certificazioni")}
            >
              CERTIFICAZIONI
            </Nav.Link>
            <NavDropdown
              title="Contacts"
              id="basic-nav-dropdown"
              className="mt-3 fs-6 contactsNav"
            >
              <NavDropdown.Item
                href="#Certificazioni"
                className="d-flex align-items-center"
              >
                <AiOutlineMail />
                <span className="mx-2">Email</span>{" "}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                className="d-flex align-items-center"
              >
                <AiOutlineWhatsApp className="text-success" />
                <span className="mx-2">Whatsapp</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                09:00 - 20:00
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Navbar.Brand href="#home" className="mx-auto">
            <img src={logo} alt="" width="90px" />
          </Navbar.Brand>

          <Nav className="ms-auto">
            <div className="d-flex flex-column align-items-center">
              {/*ICONE PER LA NAVBAR*/}
              <div className="navIcons d-flex">
                <Nav.Link href="#link" className="text-light fs-4 ">
                  <FaFacebookSquare />
                </Nav.Link>
                <Nav.Link href="#link" className="text-light fs-4 ">
                  <FaInstagram />
                </Nav.Link>
                <Nav.Link href="#link" className="text-light fs-4 ">
                  <FaLinkedin />
                </Nav.Link>
                <Nav.Link href="#link" className="text-light fs-4 me-5 ">
                  <FaGithubSquare />
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
