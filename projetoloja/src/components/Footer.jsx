import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <p className="mb-0">© 2024 MyCompany. Todos os direitos reservados.</p>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link as={Link} to="/politicas" className="text-white">
              Políticas de Privacidade
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </footer>
  );
}


export default Footer;
