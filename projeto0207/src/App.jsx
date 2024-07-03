// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático


import Foot from "./components/Foot";
import Blog from "./components/Blog/";
import Navbar from "./components/Navbar";

// Componente principal da aplicação
function App() {
  return (
    <>
      <main>
        <Navbar logado ={true} nomeUsuario="Feliz"/>
       <Blog />
       </main>
      <Foot />

    </>
  );
}

export default App;
