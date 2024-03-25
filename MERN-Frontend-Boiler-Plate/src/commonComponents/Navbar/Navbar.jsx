import "./Navbar.scss";
import logo1 from "../../assets/images/logo-243x57.png";
import logo2 from "../../assets/images/logo-inverse-243x57.png";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Cities",
    link: "/cities",
  },
  {
    name: "Categories",
    link: "/Categories",
  },
  {
    name: "Manage",
    link: "/manageall",
  },
];

export const NavbarBs = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage?.getItem("user") ? false : true;
  const [userRole, setRole] = localStorage?.getItem("user")
    ? localStorage.getItem("user")
    : "";

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setRole("");
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
              {navlinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  to={link.link}
                  activeclassname="active"
                  as={NavLink}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="list-icons auth-links" as={"ul"}>
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
              {loggedIn && userRole?.role === "user" ? (
                <Nav.Link
                  className="icon icon-style-camera"
                  to={"/login"}
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
