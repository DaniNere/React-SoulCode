import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Alert } from "react-bootstrap";

function Contato() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        alert("Feedback enviado com sucesso!");
    };

    return (
        <Container className="form-section">
            <h2 className="text-center">Contato</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu nome"
                        {...register("name", { required: "Nome é obrigatório" })}
                    />
                    {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email", {
                            required: "Email é obrigatório",
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Email inválido"
                            }
                        })}
                    />
                    {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFeedback">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Deixe seu feedback"
                        {...register("feedback", { required: "Feedback é obrigatório" })}
                    />
                    {errors.feedback && <Alert variant="danger">{errors.feedback.message}</Alert>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}

export default Contato;
