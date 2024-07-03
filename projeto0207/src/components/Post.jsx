
function Post(props) {
    return (
        <article className="post">
            <h2 className="post-titulo">{props.titulo}</h2>
            <img src={props.linkImagem} alt="Imagem do post"/>
            <p className="post-descricao">{props.desc}</p>
        </article>
    );
}

export default Post;
