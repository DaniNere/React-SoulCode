
import './Produto.css'; 

const CardProduto = ({ nome, precoUnitario, desconto, imagemUrl }) => {
  // Calcula o valor do desconto
  const valorDesconto = (desconto / 100) * precoUnitario;
  // Calcula o preço com desconto
  const precoComDesconto = precoUnitario - valorDesconto;

  return (
    <div className="card-produto">
      <img src={imagemUrl} alt={nome} className="produto-imagem" />
      <h2>{nome}</h2>
      <p>Preço: {desconto > 0 ? <span className="preco-original">R${precoUnitario.toFixed(2)}</span> : `R$${precoUnitario.toFixed(2)}`}</p>
      {desconto > 0 && <p>Com desconto: <strong>R${precoComDesconto.toFixed(2)}</strong></p>}
    </div>
  );
}

export default CardProduto;
