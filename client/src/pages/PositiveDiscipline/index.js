import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image} from 'react-bootstrap';
import htmlParser from 'react-html-parser';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';
import loadData from '../../util/loadData';

import './styles.css';

const testemonials = [
    'andre-tenorio.png',
    'diego-raphael.png',
    'julia-barros.png',
    'juliana-vieira.png',
    'julianna-ferreira.png',
    'monica-barbosa.png',
    'poliana-lima.png'
];

const PositiveDiscipline = props => {
    
    const [positiveDiscipline, setPositiveDiscipline] = useState({});

    useEffect(() => {
        loadData('/sections/positive-discipline', setPositiveDiscipline);
    }, []);

    return (
    <div className="page positive-discipline d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Disciplina Positiva</title>
        </Helmet>

        <Navbar />
        <Container className="flex-grow-1 flex-shrink-0">
            <Row>
                <Col>
                    <div className="page-content">
                        <h1 className="page-title">Disciplina Positiva</h1>
                        <p className="lead">
                            <span>Por <Link to="/quem-somos" style={{
                                fontWeight: 'bold',
                                color: '#2ba2cc'
                            }}>Patrícia Carvalho</Link></span>
                        </p>
                        <Image 
                            className="img-hero"
                            src={`${baseURL}/uploads/${ positiveDiscipline.img }`} 
                            alt="Disciplina Positiva" />
                        { htmlParser(positiveDiscipline.text) }
                    </div>        
                </Col>
            </Row>
            <Row className="testemonials">
                <Col xs={8} lg={4}>
                    <Image fluid
                        className="testemonial mb-5" 
                        alt="Depoimento"
                        src={`${baseURL}/uploads/depo1.png`}  />
                </Col>
                <Col xs={8} lg={4}>
                    <Image fluid
                        className="testemonial" 
                        alt="Depoimento"
                        src={`${baseURL}/uploads/depo2.png`}  />
                </Col>
                <Col xs={8} lg={4}>
                    <Image fluid
                        className="testemonial" 
                        alt="Depoimento"
                        src={`${baseURL}/uploads/depo3.png`}  />
                </Col>   
                <Col xs={8} lg={4}>
                    <Image fluid
                        className="testemonial" 
                        alt="Depoimento"
                        src={`${baseURL}/uploads/depo4.png`}  />
                </Col>  
                <Col xs={8} lg={4}>
                    <Image fluid
                        className="testemonial" 
                        alt="Depoimento"
                        src={`${baseURL}/uploads/depo5.png`}  />
                </Col>  
                <Col xs={8} lg={4}>
                    <Image fluid
                        className="testemonial" 
                        alt="Depoimento"
                        src={`${baseURL}/uploads/depo6.png`}  />
                </Col>    
            </Row>
        </Container>
        <Footer />
    </div>
    );
}

export default PositiveDiscipline;