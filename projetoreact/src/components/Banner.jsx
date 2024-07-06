import '../styles/Banner.css'; // Importe seu arquivo CSS de estilos
import imagem from '../assets/Logo Dani Dev (2).png'; // Importe sua imagem

function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-text">
                    <h2 className="title">👋 Oi! Meu Nome é Danielle</h2>
                    <p className="body">
                        Uma desenvolvedora Full Stack que adora assuntos do universo nerd 🤓
                        <br />
                        👩‍🎓 Formada em Redes de Computadores - Estácio de Sá.
                        <br />
                        Estou sempre me desafiando com novos projetos e buscando feedback na 
                        <br />
                        comunidade de programação, além de compartilhar meus conhecimentos.
                    </p>
                </div>
                <div className="banner-image">
                    <img src={imagem} alt="Logo Dani Dev" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
