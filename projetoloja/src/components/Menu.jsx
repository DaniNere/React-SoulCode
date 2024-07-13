import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Footer from "./Footer";
import Logoimg from "../assets/Rp.png";
import "../index.css"

function Menu() {
  const location = useLocation();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const validRoutes = ["/", "/login", "/cadastro", "/politicas", "/tarefas"];
    setIsNotFound(!validRoutes.includes(location.pathname));
  }, [location]);

  return (
    <div className="d-flex flex-column">
      <header>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container fluid>
            <Link to="/" className="navbar-brand">
              <img src={Logoimg} width="32" alt="RP Acessórios Logo" />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                {isNotFound ? (
                  <Link className="nav-link" to="/">Home</Link>
                ) : (
                  <>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/cadastro">Cadastro</Link>
                    <Link className="nav-link" to="/contato">Contato</Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Conteúdo principal da aplicação (será renderizado pelas rotas) */}
      <main className="flex-grow-1">
        {/* Conteúdo principal aqui */}
      </main>
      <Footer />
    </div>
  );
}

export default Menu;
