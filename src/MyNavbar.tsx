import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import githubCat from './assets/github-cat.png';
import linkedIn from './assets/linkedin.png';

function MyNavbar() {
  return (
    <>
      <Navbar fixed="top" bg="muted" variant="light">
        <Container>
        My Links
          <Navbar.Brand>
            <a href="https://github.com/seanflynn5">
              <img
                alt="GitHub"
                src={githubCat}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </a>
            <a href="https://www.linkedin.com/in/sean-g-flynn/">
              <img
                alt="LinkedIn"
                src={linkedIn}
                width="30"
                height="35"
                className="d-inline-block align-top"
              />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
