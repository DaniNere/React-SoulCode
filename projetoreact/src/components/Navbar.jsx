import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <header className="navbar">
      <hr />
      <p className="navbar-title">Meu Portfólio</p>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item"> <a href="#about" className="navbar-link">Sobre</a></li>
          <li className="navbar-item"> <a href="#projects" className="navbar-link">Projetos</a></li>
          <li className="navbar-item"> <a href="#contact" className="navbar-link">Contato</a></li>
          <button className="navbar-button">Entrar</button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
