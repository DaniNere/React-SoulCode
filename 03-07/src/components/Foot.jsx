import React from 'react';
import './Foot.css';

const Foot = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Rodapé para o exercicio de React.</p>
    </footer>
  );
};

export default Foot;
