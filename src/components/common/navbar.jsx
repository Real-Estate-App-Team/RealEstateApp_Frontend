import Container from 'react-bootstrap/Container';
import { UserOutlined } from '@ant-design/icons'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  const expand = 'lg'; // Set the desired expand size
  return (
    <Container className='my-3'>
    <Navbar expand={expand} className="bg-none mb-3">
      <Container fluid>
          <Navbar.Brand href="#">
          <img src="/assets/img/logo.png" alt="logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='d-flex align-items-center' id={`offcanvasNavbarLabel-expand-${expand}`}>
            <UserOutlined />
            <Nav.Link href="#login">Login</Nav.Link>
            <div>/</div>
            <Nav.Link href="#register">Register</Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#properties">Properties</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className='ms-auto d-none d-lg-flex align-items-center'>
            <UserOutlined className='d-none d-lg-block' />
            <Nav.Link href="#login">Login</Nav.Link>
            <div className='d-none d-lg-block'>/</div>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </Container>
  );
}

export default OffcanvasExample;
