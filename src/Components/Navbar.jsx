import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BV COLLEGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown title="Admission" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
               Apply Now
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
               UG & PG Admission
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Tuition & Fees
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Scholarships & Financial Aid
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Academics" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
              Programs & Departments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Course Catalog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Faculty Directory
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Research Opportunities
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;