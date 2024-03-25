import "./Navbar.scss";
import logo1 from "../../assets/images/logo-243x57.png";
import logo2 from "../../assets/images/logo-inverse-243x57.png";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export const NavbarBs = () => {
  const { state, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const loggedIn = localStorage?.getItem("user") ? false : true;
  // const AdminLogin = user?.role == "admin" ? true : false
  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // setRole(false);
    navigate("/");
  };

  return (
    <header>
      <Navbar
        expand="md"
        className="body-bg-tertianary p-4"
        data-md-stick-up="true"
        data-lg-stick-up="true"
      >
        <Container className="flex-md-column flex-xl-row">
          <Navbar.Brand className="order-md-0 order-1 logo" href="/">
            <h3>{"Capture Crafts"}</h3>
            <Image
              src={logo1}
              sm={4}
              md={3}
              alt="logo"
              className="logo-image"
              hidden
            />
            <Image
              src={logo2}
              sm={4}
              md={3}
              alt="logo"
              className="logo-image"
              hidden
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="order-md-1 order-0"
            aria-controls="NavbarNav"
          />
          <Navbar.Collapse className="order-2" id="NavbarNav">
            <Nav className="me-auto" as={"ul"}>
              {state.role === "admin" && (
                <>
                  <Nav.Link to="/" activeclassname="active" as={NavLink}>
                    Home
                  </Nav.Link>
                  <Nav.Link to="/cities" activeclassname="active" as={NavLink}>
                    Citys
                  </Nav.Link>
                  <Nav.Link
                    to="/categories"
                    activeclassname="active"
                    as={NavLink}
                  >
                    Categories
                  </Nav.Link>
                  <Nav.Link
                    to="/manageall"
                    activeclassname="active"
                    as={NavLink}
                  >
                    Manage
                  </Nav.Link>
                </>
              )}
              {state.role==="user" && (
                <>
                  <Nav.Link to="/" activeclassname="active" as={NavLink}>
                    Home
                  </Nav.Link>
                  <Nav.Link to="/cities" activeclassname="active" as={NavLink}>
                    Citys
                  </Nav.Link>
                  <Nav.Link
                    to="/categories"
                    activeclassname="active"
                    as={NavLink}
                  >
                    Categories
                  </Nav.Link>
                  <Nav.Link
                    to="/photographers"
                    activeclassname="active"
                    as={NavLink}
                  >
                    Photographers
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav className="list-icons auth-links" as={"ul"}>
              {state.role === "user" ? (
                <Nav.Link
                  className="icon icon-style-camera"
                  to={"/joinphotographer"}
                  as={NavLink}
                >
                  {" "}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span> Join as a Photographer
                </Nav.Link>
              ) : (
                ""
              )}
              {loggedIn ? (
                <>
                  <Nav.Link
                    className="icon icon-style-camera"
                    to={"/login"}
                    as={NavLink}
                  >
                    {" "}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> LogIn
                  </Nav.Link>
                  <Nav.Link
                    className="icon icon-style-camera"
                    to={"/SignUp"}
                    as={NavLink}
                  >
                    {" "}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> SignUp
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  className="icon icon-style-camera"
                  onClick={handleLogout}
                  to={"/login"}
                  as={NavLink}
                >
                  {" "}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span> Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
