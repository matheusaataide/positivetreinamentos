import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import parseHtml from 'react-html-parser';


import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';

import './styles.css';

class Course extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            course: {
                "id": 2,
                "title": "Workshop de Disciplina Positiva para Pais",
                "content": "<p> <b style=\"text-transform: uppercase;\">Workshop indicado para:</b> Pais, mães, avós, profissionais da educação e todas as pessoas que tenham interesse em conhecer e desenvolver uma comunicação e educação positiva. </p><p> Como podemos contribuir com o desenvolvimento de habilidades sociais e de vida de nossos filhos? Como agir de maneira firme e respeitosa ao mesmo tempo? </p><p> Em nossos workshops oferecemos aos participantes oportunidades e ferramentas para melhor a comunicação com seus filhos, construir relacionamentos mais saudáveis, entender as crenças que influenciam o mau comportamento da criança. </p><p>Disciplina Positiva é uma abordagem desenvolvida pela <b>Dra. Jane Nelsen</b>, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países. </p><p> A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro. A Disciplina Positiva possui os seguintes critérios: </p><ul> <li>Respeito mútuo;</li><li>Desenvolve senso de aceitação e importância;</li><li>É efetiva a longo prazo;</li><li>Ensina habilidades sociais e de vida;</li><li>Nos incentiva a descobrir capacidades e poder pessoal.</li></ul>",
                "url": "",
                "local": "Plataforma Zoom",
                "status": true,
                "img": "para-pais.png",
                "date": "2021-03-13T17:30:07.000Z",
                "createdAt": "2021-01-17T21:26:07.000Z",
                "updatedAt": "2021-01-17T21:26:07.000Z",
                "createdById": 2,
                "updatedById": 2,
                "transformationId": 2,
                "transformation": {
                    "id": 2,
                    "title": "Disciplina Positiva para Pais",
                    "img": "",
                    "content": "",
                    "status": true,
                    "createdAt": "2021-01-17T21:25:24.000Z",
                    "updatedAt": "2021-01-17T21:25:24.000Z",
                    "createdById": 2,
                    "updatedById": 2
                }
            }
        }
    }

    render () {
        const { course } = this.state;
        return (
            <div className="page course d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - {course.title}</title>
                </Helmet>

                <CustomNavbar shrink />
                <Container className="content flex-grow-1 flex-shrink-0">
                <Row>
                        <Col style={{ textAlign: 'justify' }}>
                            <h2 className="page-subtitle">Evento</h2>
                            <h1 className="page-title">{course.title}</h1>
                            <ul className="info">
                                <li><i className="fas fa-map-marker-alt" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                                <span>{ course.local }</span></li>
                                <li><i className="fas fa-calendar" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                                <span>{ format(
                                            parseISO(course.date),
                                            "dd' 'MMM', às 'HH:mm'h'",
                                            { locale: ptBr })
                                        }</span></li>
                            </ul>
                            
                            <Image fluid
                                className="course-image"
                                src={`${baseURL}/uploads/${course.img}`} 
                                alt={course.title} />
                            <div>{ parseHtml(course.content) }</div>           
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'center'}}>
                            <div className="cta">
                                <a 
                                    className="btn btn-primary"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScJyArpCdpOgPmvMkGGqRCwQ8aFPQNxwb_P_DmifoFF9h-CSA/viewform"
                                    alt="Formulário de inscrição">
                                    Inscrever-me        
                                </a> 
                                <a 
                                    className="btn btn-link"
                                    href="https://api.whatsapp.com/send?phone=5582999395433&text=Ol%C3%A1!%20Vi%20um%20evento%20no%20seu%20site,%20e%20queria%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20ele!%20%F0%9F%98%81%F0%9F%92%99"
                                    alt="Falar no whatsapp">
                                    Fale conosco! <i className="fab fa-whatsapp" style={{marginLeft: '.5em'}}></i>        
                                </a> 
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Course;