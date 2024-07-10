import { Card, Button, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <main>
            <Row className="gx-4 gy-4">
                <Col md={3}>
                    <Card style={{ width: "286px", marginBottom: "10rem" }}>
                        <Card.Img variant="top" src="https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c" />
                        <Card.Body>
                            <Card.Title>Card Teste</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto, neque ad expedita at odio a magnam beatae, iste voluptatem eveniet officiis nobis, in dolore cumque excepturi illo reprehenderit! Assumenda.
                            </Card.Text>
                            <Button variant="success">Clique Aqui</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: "286px" }}>
                        <Card.Img variant="top" src="https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c" />
                        <Card.Body>
                            <Card.Title>Card Teste</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto, neque ad expedita at odio a magnam beatae, iste voluptatem eveniet officiis nobis, in dolore cumque excepturi illo reprehenderit! Assumenda.
                            </Card.Text>
                            <Button variant="success">Clique Aqui</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: "286px", marginBottom: "10rem" }}>
                        <Card.Img variant="top" src="https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c" />
                        <Card.Body>
                            <Card.Title>Card Teste</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto, neque ad expedita at odio a magnam beatae, iste voluptatem eveniet officiis nobis, in dolore cumque excepturi illo reprehenderit! Assumenda.
                            </Card.Text>
                            <Button variant="success">Clique Aqui</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card style={{ width: "286px", marginBottom: "10rem" }}>
                        <Card.Img variant="top" src="https://fastly.picsum.photos/id/756/200/200.jpg?hmac=-fG1ZTuVYfQwwG3YNud2RtcOvYGcI86kRjc1pVQvO6c" />
                        <Card.Body>
                            <Card.Title>Card Teste</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto, neque ad expedita at odio a magnam beatae, iste voluptatem eveniet officiis nobis, in dolore cumque excepturi illo reprehenderit! Assumenda.
                            </Card.Text>
                            <Button variant="success">Clique Aqui</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </main>
    );
}

export default Home;
