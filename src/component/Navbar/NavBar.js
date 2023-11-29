import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {menuItems} from "../rawdata"

const NavBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      style={{ backgroundColor: "#264653" }}
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand
          onClick={() => {
            closeNavbar();
            navigate("/");
          }}
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          DrDoc
        </Navbar.Brand>
        {expanded && (
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
        )}
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-between"
          onSelect={closeNavbar}
        >
          <Nav className="mr-auto">
            {menuItems.map((item, index) => (
              <Nav.Link
                key={index}
                onClick={() => {
                  closeNavbar();
                  navigate(item.path);
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link className="d-flex justify-content-between gap-2 w-full">
            <Button className="btn-primary" onClick={()=>navigate("/signin")}>Login</Button>
            <Button className="btn-danger" onClick={()=>navigate("/register")}>Register</Button>
            {!expanded && (
              <Navbar.Toggle
                aria-controls="navbar-nav"
                onClick={() => setExpanded(!expanded)}
              />
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
