import Post from './Post';
import Mensagem from './Message';
import './Blog.css';

function Blog() {
    return (
        <section className="blog">
            <h2>Postagem do Dia</h2>

            <Post
                titulo="React é muito bom"
                desc="Descrição da postagem 1"
                linkImagem="https://picsum.photos/200"
            />

            <Mensagem
                message-titulo="Sem paciência ter, Jedi nunca será 🤓"
                nomeAutor="Dani Nere"
                linkImagem="https://fastly.picsum.photos/id/640/200/200.jpg?hmac=iFmWtlROU2QVjs0GSK5LASqVkXu6yl8MIQHJrpra6PA"
                legenda="Imagem de uma paisagem"
            />
        </section>
    );
}

export default Blog;
