// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import React from "react";
import Titulo from "./components/Title";
import Mensagem from "./components/Message";
import Foot from "./components/Foot";

// Componente principal da aplicação
function App() {
  return (
    <>
      <main>
        <Titulo />
        <Mensagem />
        <Mensagem />
        <Mensagem />
        <Mensagem />
        <Mensagem />
      </main>
      <Foot />
    </>
  );
}

export default App;
