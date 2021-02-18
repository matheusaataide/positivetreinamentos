import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Slick from 'react-slick';

import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';

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

class Blog extends React.Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div className="page positive-discipline d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Disciplina Positiva</title>
                </Helmet>

                <CustomNavbar shrink />
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
                                    src={`${baseURL}/uploads/dp.jpg`} 
                                    alt="Disciplina Positiva" />
                                <p>
                                    Muito se tem falado sobre uma nova abordagem para a educação de nossos filhos, a Disciplina Positiva.
                                    O que seria? Como podemos colocar em prática e o que ganhamos quando aplicamos em nossa vida?
                                </p>
                                <p>
                                    Disciplina Positiva é uma abordagem desenvolvida pela Dra. Jane Nelsen, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países.                    
                                </p>
                                <p>
                                    A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro, e possui os seguintes critérios:
                                </p>
                                <ul>
                                    <li>Respeito mútuo;</li>
                                    <li>Desenvolve senso de aceitação e importância;</li>
                                    <li>É efetiva a longo prazo;</li>
                                    <li>Ensina habilidades sociais e de vida;</li>
                                    <li>Nos incentiva a descobrir capacidades e poder pessoal.</li>
                                </ul>
                            </div>        
                        </Col>
                    </Row>
                    <Row className="testemonials">
                        <Col xs={8} lg={4}>
                            <Image fluid
                                className="testemonial" 
                                alt="Depoimento"
                                src={`${baseURL}/uploads/depo-andre-tenorio.png`}  />
                        </Col>
                        <Col xs={8} lg={4}>
                            <Image fluid
                                className="testemonial" 
                                alt="Depoimento"
                                src={`${baseURL}/uploads/depo-diego-raphael.png`}  />
                        </Col>
                        <Col xs={8} lg={4}>
                            <Image fluid
                                className="testemonial" 
                                alt="Depoimento"
                                src={`${baseURL}/uploads/depo-juliana-vieira.png`}  />
                        </Col>     
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Blog;