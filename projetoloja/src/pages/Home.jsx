import { Container } from 'react-bootstrap';
import Card from "../components/Card";

function Home() {
    const categories = [
        {
            title: "Categoria 1",
            cards: [
                {
                    img: "https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c",
                    title: "Card Teste 1",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    buttonText: "Clique Aqui"
                },
                {
                    img: "https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c",
                    title: "Card Teste 2",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    buttonText: "Clique Aqui"
                }
            ]
        },
        {
            title: "Categoria 2",
            cards: [
                {
                    img: "https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c",
                    title: "Card Teste 3",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    buttonText: "Clique Aqui"
                },
                {
                    img: "https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c",
                    title: "Card Teste 4",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                    buttonText: "Clique Aqui"
                }
            ]
        }
    ];

    return (
        <main>
            <Container>
                {categories.map((category, index) => (
                    <Card key={index} title={category.title} cards={category.cards} />
                ))}
            </Container>
        </main>
    );
}

export default Home;
