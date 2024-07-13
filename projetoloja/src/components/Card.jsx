import React from 'react';
import { Card as BootstrapCard, Button, Row, Col } from 'react-bootstrap';

function Card({ title, cards }) {
    return (
        <>
            <h2>{title}</h2>
            <Row className="gx-4 gy-4">
                {cards.map((card, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}>
                        <BootstrapCard className="custom-card">
                            <BootstrapCard.Img variant="top" src={card.img} />
                            <BootstrapCard.Body>
                                <BootstrapCard.Title>{card.title}</BootstrapCard.Title>
                                <BootstrapCard.Text>{card.text}</BootstrapCard.Text>
                                <Button variant="success">{card.buttonText}</Button>
                            </BootstrapCard.Body>
                        </BootstrapCard>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Card;
