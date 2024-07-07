import React from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Slider from "react-slick";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import NoriPdvImage from "./assets/Nori.pdv.png";
import EcommerceImage from "./assets/ecommerce.jpg";
import SistemaDeCreditoImage from "./assets/sistemadecredito.jpg";

function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div id="root">
            <Navbar />
            <main>
                <Banner />
                <div className="post-container">
                    <h2 className="projetos">Meus Projetos</h2>
                    <Slider {...settings}>
                        <Post
                            title="Nori PDV"
                            description="Este projeto baseia-se na criação de uma API RESTful para um PDV (frente de caixa) . Com ela, os usuários podem se cadastrar, cadastrar clientes e produtos e criar pedidos."
                            imageUrl={NoriPdvImage}
                        />
                        <Post
                            title="E-Commerce"
                            description="Esta é uma API de comércio eletrônico completa construída usando Express e Mongo. Ele contém todas as funcionalidades necessárias de uma API de comércio eletrônico, incluindo registro de usuário, login de usuário, gerenciamento de categoria (adicionar, editar, excluir), gerenciamento de produto (adicionar, editar, excluir), adição de imagens de recursos de produtos, adição de imagens de produtos , criação de pedidos e muito mais."
                            imageUrl={EcommerceImage}
                        />
                        <Post
                            title="Sistema de Análise de Crédito"
                            description="API Rest para um Sistema de Analise de Solicitação de Crédito"
                            imageUrl={SistemaDeCreditoImage}
                        />
                      </Slider>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
