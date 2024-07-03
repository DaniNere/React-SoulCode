// function Navbar (props){
 
// if(props.logado){
//     return <header>
//         <hr />
//         <p>Bem Vindo(a)! {props.nomeUsuario}</p>
//             <nav>
//                 <ul>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">Postagem</a></li>
//                     <li><a href="#">Meu perfil</a></li>
//                     <li><a href="#">Sair</a></li>
//                 </ul>
//             </nav>
//             <hr />
//     </header>
// } else {
//     return (
//     <header>
//         <hr />
//         <p>Você está desconectado!</p>
//             <nav>
//                 <ul>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">Postagem</a></li>
//                 </ul>
//             </nav>
//             <hr />
//     </header>
//     )}
// }

function Navbar(props) {

    let mensagem;

    if(props.logado){
        mensagem = `Você está logado! ${props.nomeUsuario}`;

    }else {
        mensagem = "Você está desconectado!";
    }
    return (
        <header>
            <hr />
            
            <p>{mensagem}</p>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Postagem</a></li>
                    <li><a href="#">Meu perfil</a></li>
                    <li><a href="#">Sair</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
}

export default Navbar