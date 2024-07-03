
function Mensagem(props) {
    return (
        <article className="message">
            <h2>{props["message-titulo"]}</h2>
            <p>{props.nomeAutor}</p>
            <img src={props.linkImagem} alt={props.legenda}/>
        </article>
    );
}

export default Mensagem;
