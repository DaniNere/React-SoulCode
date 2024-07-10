import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return (
        <div className="rodape">
            <footer className="bg-dark text-white mt-auto py-3">
                <Container>
                    <p className="text-center mb-0">© 2024 MyCompany. Todos os direitos reservados.</p>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/politicas" className="text-white">
                                Políticas de Privacidade
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </footer>

        </div>

    );
}

export default Footer;
