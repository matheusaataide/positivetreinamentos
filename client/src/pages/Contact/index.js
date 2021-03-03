import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import baseUrl from '../../util/baseUrl';
import loadData from '../../util/loadData';

import './styles.css';

const pristineForm = {
    name: '',
    email: '',
    whatsapp: '',
    content: '',
    helpText: ''
};

const Contact = props => {
    
    const [form, setForm] = useState(pristineForm);

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const sendData = async e => {
        e.preventDefault();
    
        axios.post(`${baseUrl}/api/messages`, form)
            .then(res => {
                try {
                    const { status, content } = res.data;
                    if (status) setForm({
                        ...pristineForm,
                        helpText: 'Mensagem enviada com sucesso!'
                    });

                    setTimeout(() => {
                        setForm(pristineForm)
                    }, 3000);
                } catch (err) {
                    console.error(err);
                    setForm({
                        ...form,
                        helpText: 'Não conseguimos enviar no momento!'
                    });
                }
            });
    };

    return (
    <div className="page post d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Contato</title>
        </Helmet>

        <Navbar />
               
        <section className="contact-us page-section">
            <Container>
                <div className="section-wrapper">
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 2}}>
                            <div className="form-container">
                                <h2 className="section-title">Fale conosco</h2>
                                <Form onSubmit={sendData}>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-name" className="label-control">Nome</Form.Label>
                                        <Form.Control required
                                            type="text"
                                            className="form-control-input" 
                                            id="contact-name" 
                                            name="name"
                                            placeholder="Seu nome" 
                                            value={form.name}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-email" className="label-control">E-mail</Form.Label>
                                        <Form.Control required
                                            type="email" 
                                            className="form-control-input" 
                                            id="contact-email" 
                                            name="email" 
                                            placeholder="Seu email"
                                            value={form.email}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-phone" className="label-control">Número de telefone</Form.Label>
                                        <Form.Control required
                                            type="text" 
                                            className="form-control-input" 
                                            id="contact-phone" 
                                            name="whatsapp"
                                            placeholder="Seu número de telefone/whatsapp"
                                            value={form.whatsapp}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-msg" className="label-control">Mensagem</Form.Label>
                                        <Form.Control required 
                                            as="textarea"
                                            className="form-control-textarea" 
                                            id="msg" 
                                            name="content" 
                                            rows={3} 
                                            placeholder="Digite a mensagem..."
                                            value={form.content}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <div className="form-group">
                                        <Button
                                            type="submit" 
                                            className="form-control-submit-button"
                                            style={{
                                                marginTop: '2em'
                                            }}>
                                                Enviar
                                        </Button>
                                    </div>
                                    <div className="form-message">
                                        <div id="contact-msgSubmit" className="h3 text-center">
                                            { form.helpText }
                                        </div>
                                    </div>
                                </Form>
                            </div> 
                        </Col>
                        <Col lg={3}>
                            <Image className="img-fluid cartoon" 
                                src={`${baseUrl}/uploads/caricatura-patricia.png`}
                                alt="Caricatura de Patrícia" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        <Footer />
    </div>
    );
}

export default Contact;