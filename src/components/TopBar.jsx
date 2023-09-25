import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      className="bg-"
      light
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          MyBirdie
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Why MyBirdie</Nav.Link>
            <Nav.Link href="#action2">Pricing</Nav.Link>
            <div className="nav-item">
              <Nav.Link href="#">Our resources  </Nav.Link>
              <div className="dropdown-content">
                <div className="service-items">
                <div className="service-list">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
                <div className="service-list">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
                <div className="service-list">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
                </div>
                
              </div>
            </div>
            <div className="nav-item">
              <Nav.Link href="#">Solutions  </Nav.Link>
              <div className="dropdown-content">
                <div className="service-items">
                <div className="service-list">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
                <div className="service-list">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
                <div className="service-list">
                  <a href="#">Service 1</a>
                  <a href="#">Service 2</a>
                  <a href="#">Service 3</a>
                </div>
                </div>
                
              </div>
            </div>
          </Nav>
          <Form className="d-flex gap-3">
          <Link to="/contact">
              <Button className="navbar-btns" variant="outline-danger">
              Contact Sales
            </Button>
          </Link>
          
            <Link to="/login">
              <Button className="navbar-btns" variant="outline-success">
                Log in
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
