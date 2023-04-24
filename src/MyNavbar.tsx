import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <>
      <Navbar fixed ="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Contact</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/seanflynn5">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sean-g-flynn/">LinkedIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default MyNavbar;