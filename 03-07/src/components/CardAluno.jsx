import "./CardAluno.css";

const CardAluno = ({ nome, serie, media }) => {
    // Verifica se o aluno está aprovado ou reprovado
    const status = media >= 7 ? 'Aprovado!' : 'Reprovado!';
    // Determina a classe CSS baseado no status
    const statusClass = media >= 7 ? 'aprovado' : 'reprovado';
  
    return (
      <div className={`card-aluno ${statusClass}`}>
        <h2>{nome}</h2>
        <p>Série: {serie}</p>
        <p>Média: {media}</p>
        <p>{status}</p>
      </div>
    );
  }
  
  export default CardAluno;
 