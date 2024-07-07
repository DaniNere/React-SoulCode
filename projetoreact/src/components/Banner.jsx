import React from 'react';
import '../styles/Banner.css'; // Importe seu arquivo CSS de estilos
import imagem from "../assets/Logo Dani Dev (2).png";
import imghtml from "../assets/html.png";
import imgcss from "../assets/css.png";
import imgjs from "../assets/js.png";
import reactimg from "../assets/reactimg.jpg";
import nestimg from "../assets/nestjs.png";
import nodeimg from "../assets/node.png";
import expressimg from "../assets/express.png";
import mongoimg from "../assets/mongodb.png";
import postgressimg from "../assets/postgress.png"; // Corrigido o nome do arquivo

function Banner() {
    return (
        <section className="banner">
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
            <div className="stacks">
                <h2 className="titulo"><strong>Minhas Stacks:</strong></h2>
                <p className="subtitulo">Tecnologias que estou trabalhando recentemente</p>
                <ul className="stacks-list">
                    <li className="stack-item">
                        <img src={imghtml} alt="HTML" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={imgcss} alt="CSS" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={imgjs} alt="JavaScript" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={reactimg} alt="React" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={nestimg} alt="Nest.js" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={nodeimg} alt="Node.js" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={expressimg} alt="Express" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={mongoimg} alt="MongoDB" className="stack-icon" />

                    </li>
                    <li className="stack-item">
                        <img src={postgressimg} alt="PostgreSQL" className="stack-icon" />

                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Banner;
