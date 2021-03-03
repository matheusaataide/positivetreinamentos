import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import parseHtml from 'react-html-parser';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import loadData from '../../util/loadData';
import baseURL from '../../util/baseUrl';

import './styles.css';

const CoursePage = props => {
    const [course, setCourse] = useState({ title: '', date: '2021-01-01T00:00:00.000Z' });
    const [whatsapp, setWhatsapp] = useState('');

    const { id, title } = useParams();

    useEffect(() => {
        loadData(`/courses/${ id }`, setCourse);
        loadData('/sections/contact/whatsapp', setWhatsapp);
    }, []);

    return (
    <div className="page course d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - { course.title }</title>
        </Helmet>

        <Navbar />
        <Container className="content flex-grow-1 flex-shrink-0">
            <Row>
                <Col style={{ textAlign: 'justify' }}>
                    <h2 className="page-subtitle">Evento</h2>
                    <h1 className="page-title">{course.title}</h1>
                    <ul className="info">
                        <li><i className="fas fa-map-marker-alt" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                        <span>{ course.location }</span></li>
                        <li>
                            <i 
                                className="fas fa-calendar" 
                                style={{ marginRight: '.65em', color: '#2ba2cc' }}>
                            </i> 
                            <span>
                                { format( parseISO(course.date),
                                          "dd' 'MMM', às 'HH:mm'h'",
                                          { locale: ptBr })}
                            </span>
                        </li>
                    </ul>
                    
                    <Image fluid
                        className="course-image"
                        src={`${baseURL}/uploads/${course.image}`} 
                        alt={course.title} />
                    <div>{ parseHtml(course.content) }</div>           
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: 'center'}}>
                    <div className="cta">
                        <a 
                            className="btn btn-primary"
                            href={course.url_form}
                            alt="Formulário de inscrição"
                            target="_blank"
                            rel="noreferrer">
                            Inscrever-me        
                        </a> 
                        <a 
                            className="btn btn-link"
                            href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=Ol%C3%A1!%20Vi%20um%20evento%20no%20seu%20site,%20e%20queria%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20ele!%20%F0%9F%98%81%F0%9F%92%99`}
                            alt="Falar no whatsapp"
                            target="_blank"
                            rel="noreferrer">
                            Fale conosco! <i className="fab fa-whatsapp" style={{marginLeft: '.5em'}}></i>        
                        </a> 
                    </div>
                    
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
    );
};    

export default CoursePage;