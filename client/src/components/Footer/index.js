import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, } from 'react-bootstrap';

import './styles.css';
import LogoAssociation from '../../assets/img/associacao.png';

const Footer = () => (
    <footer className="footer-section bg-white flex-shrink-0">
        <Container>
            <Row className="flex-column-reverse flex-md-row pt-5 mt-5">
                <Col xs={12} lg={6} className="text-center">
                    <Image fluid 
                        src={ LogoAssociation } 
                        alt="PDA Associação" 
                        className="association" 
                    />
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
                            <Link className="nav-link" to="/transformacoes-positive">Transformações Positive</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/agenda">Agenda</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/disciplina-positiva">Disciplina Positiva</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contato">Contato</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="pt-5 w-100 text-center">
                        <p>Copyright © Positive Treinamentos 2021. Todos os direitos reservados.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;