import React, { useState }  from 'react';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';

import'./styles.css';
import api from '../../util/api';

import ImageCartoonPatricia from '../../assets/img/caricaturas/patricia.png';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        whatsapp: '',
        content: ''
    });
    const [helpText, setHelpText] = useState(''); 

    const sendData = async e => {
        e.preventDefault();
    
        const res = await api.post('messages', form);

        setHelpText('Mensagem enviada com sucesso!');
        setForm({
            name: '',
            email: '',
            whatsapp: '',
            content: ''
        });
    };
    
    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
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
                                    <div id="contact-msgSubmit" className="h3 text-center">{ helpText }</div>
                                </div>
                            </Form>
                        </div> 
                    </Col>
                    <Col lg={3}>
                        <Image className="img-fluid cartoon" 
                            src={ImageCartoonPatricia}
                            alt="Caricatura de Patrícia" />
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
    );
}


export default ContactUs;