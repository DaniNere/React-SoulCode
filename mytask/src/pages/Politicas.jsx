import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function Politicas() {
    return (
        <Container><br />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Políticas de Privacidade</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptate explicabo architecto assumenda nemo praesentium reiciendis, laudantium consequuntur dolorem ab, unde et quibusdam ipsum temporibus repellendus magni. Cum, nisi commodi.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default Politicas;
