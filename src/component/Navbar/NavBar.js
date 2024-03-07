import React, { useContext, useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LogedUserMenuItems, menuItems, theme } from "../rawdata";
import { AuthContext } from "../../AuthContext";
import { home } from "../../assets";

const NavBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const { isLogged, setIsLogged } = useContext(AuthContext);

  const closeNavbar = () => setExpanded(false);

  const handelLogout = async () => {
    sessionStorage.clear();
    setIsLogged(false);
  };

  const UserOptions = () => {
    return (
      <>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Profile
          </a>
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" to="/profile">
                My Profile
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/edit">
                Edit Profile
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <Link class="dropdown-item" to="/upload">
                Upload Document
              </Link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Doctor
          </a>
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" to="/mydoctor">
                My Doctors
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/message">Messages</Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <Link class="dropdown-item" to="search">
                Search Doctor
              </Link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Setting
          </a>
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" to="/accountSwitch?query=doctor">
                Apply for Doctor
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/accountSwitch?query=user">
                Apply for User
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <Link class="dropdown-item" to="/upload">
                Change Password
              </Link>
            </li>
          </ul>
        </li>
      </>
    );
  };

  return (
    <Navbar
      style={{ backgroundColor: theme }}
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
            src={home}
            alt=""
            width="40"
            height="40"
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
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          {isLogged && UserOptions()}</Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link className="d-flex justify-content-between gap-2 w-full">
            {isLogged ? (
              <Button className="btn-danger" onClick={() => handelLogout()}>
                LOGOUT
              </Button>
            ) : (
              <>
                <Button
                  className="btn btn-light"
                  onClick={() => navigate("/signin")}
                >
                  SIGN IN
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => navigate("/register")}
                >
                  GET STARTED
                </Button>
              </>
            )}
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
