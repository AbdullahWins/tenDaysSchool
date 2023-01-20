import React, { useContext } from "react";
import { Button, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Ten Days School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex align-items-center justify-content-between">
            <Image
              referrerPolicy="no-referrer"
              roundedCircle
              style={{ height: "30px", marginRight: "5px" }}
              src="https://img.freepik.com/premium-vector/education-technology-logo-template_567288-89.jpg?w=2000"
            ></Image>
            <Link to="/">
              <Button className="m-2">Home</Button>
            </Link>
            <Link className="m-2" to="/courses">
              <Button>Courses</Button>
            </Link>
            <Link to="/blogs">
              <Button className="m-2">Blogs</Button>
            </Link>
            <Link to="/faq">
              <Button className="m-2">FaQ</Button>
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center justify-content-between m-2">
            {user?.uid ? (
              <div className="d-flex align-items-center justify-content-between m-2">
                <Image
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={user.displayName}
                  referrerPolicy="no-referrer"
                  roundedCircle
                  style={{ height: "30px", marginRight: "15px" }}
                  src={user.photoURL}
                  alt={user.displayName}
                />
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link className="m-2" to="login">
                <Button>Login</Button>
              </Link>
            )}
            <div className="d-flex align-items-center justify-content-between ms-4 text-light">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Dark Mode"
                />
              </Form>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
