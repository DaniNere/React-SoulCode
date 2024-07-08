import Card from "./Card";
import "../styles/Galeria.css";

import NoriPdvImage from "../assets/Nori.pdv.png";
import EcommerceImage from "../assets/ecommerce.jpg";
import SistemaDeCreditoImage from "../assets/sistemadecredito.jpg";

const posts = [
  {
    id: 1,
    title: "Nori PDV",
    description: "Este projeto baseia-se na criação de uma API RESTful para um PDV (frente de caixa). Com ela, os usuários podem se cadastrar, cadastrar clientes e produtos e criar pedidos.",
    image: NoriPdvImage
  },
  {
    id: 2,
    title: "E-Commerce",
    description: "Esta é uma API de comércio eletrônico completa construída usando Express e Mongo. Ele contém todas as funcionalidades necessárias de uma API de comércio eletrônico, incluindo registro de usuário, login de usuário, gerenciamento de categoria (adicionar, editar, excluir), gerenciamento de produto (adicionar, editar, excluir), adição de imagens de recursos de produtos, adição de imagens de produtos, criação de pedidos e muito mais.",
    image: EcommerceImage
  },
  {
    id: 3,
    title: "Sistema de Análise de Crédito",
    description: "API Rest para um Sistema de Analise de Solicitação de Crédito",
    image: SistemaDeCreditoImage
  }
];

function Galeria() {
  return (
    <div className="galeria">
      {posts.map(post => (
        <Card 
          key={post.id} 
          title={post.title} 
          description={post.description} 
          image={post.image} 
        />
      ))}
    </div>
  );
}

export default Galeria;
