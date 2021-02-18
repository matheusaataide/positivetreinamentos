import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, } from 'react-bootstrap';

import './styles.css';
import Association from '../../assets/img/associacao.png';

const Footer = () => (
    <footer className="footer-section bg-white flex-shrink-0">
        <Container>
            <Row className="flex-column-reverse flex-md-row pt-5 mt-5">
                <Col xs={12} lg={6} className="text-center">
                   <Image fluid src={Association} alt="PDA Associação" className="association" />
                </Col>
                <Col xs={12} lg={6}>
                    <ul className="list-unstyled footer-menu pt-2">
                        <li>
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/quem-somos">Quem somos</Link>
                        </li>
                        <li>
                            <a className="nav-link" href="#transformacoes-positive">Transformações Positive</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#agenda">Agenda</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#depoimentos">Depoimentos</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="pt-5 w-100 text-center">
                        <p>Copyright © Positive Treinamentos 2020. Todos os direitos reservados. 
                            Desenvolvido por <a href="https://www.instagram.com/matheusaataide">Matheus Ataide</a>.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;