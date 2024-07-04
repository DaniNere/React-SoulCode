import CardAluno from './components/CardAluno';
import CardProduto from './components/Produto';
import Foot from "./components/Foot";
import "./App.css";


function App() {
  return (
    <>
        <main>
        <section>
          <h1>Alunos</h1>
          <CardAluno nome="João" serie="3º Ano" media={8} />
          <CardAluno nome="Maria" serie="2º Ano" media={6.5} />
        </section>
        <section>
          <h1>Produtos</h1>
          <CardProduto nome="Notebook" precoUnitario={2500} desconto={15} imagemUrl="./assets/OSXDCD0.jpg" />
          <CardProduto nome="Mouse" precoUnitario={50} desconto={0} imagemUrl="./assets/Computer Mouse -4.jpg" />
        </section>
        </main>
      <Foot />
    </>
  );
}

export default App;