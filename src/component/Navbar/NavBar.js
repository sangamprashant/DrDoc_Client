import React, { useContext, useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LogedUserMenuItems, menuItems } from "../rawdata";
import { AuthContext } from "../../AuthContext";

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
            Email & Password
          </a>
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" to="/profile">
                Change Password
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
                Doctor
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/accountSwitch?query=user">
                User
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/search">Search Doctors</Link>
        </li>
      </>
    );
  };

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
            src="https://github.com/sangamprashant.png"
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
          <Nav className="mr-auto">{isLogged && UserOptions()}</Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link className="d-flex justify-content-between gap-2 w-full">
            {isLogged ? (
              <Button className="btn-danger" onClick={() => handelLogout()}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  className="btn-primary"
                  onClick={() => navigate("/signin")}
                >
                  Login
                </Button>
                <Button
                  className="btn-danger"
                  onClick={() => navigate("/register")}
                >
                  Register
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
