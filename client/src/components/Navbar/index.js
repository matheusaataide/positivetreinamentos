import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Navbar, Nav, OverlayTrigger, Tooltip, Container } from 'react-bootstrap';

import './styles.css';
import Logo from '../../assets/img/logo/logo.png';
import loadData from '../../util/loadData';

const CustomNavbar = props => {
    const [nav, setNav] = useState(false);
    const [shrink, setShrink] = useState(true);
    const [whatsapp, setWhatsapp] = useState('');

    useEffect(() => {
        $(window).scroll(function() {
            $('nav').toggleClass('transparent', $(this).scrollTop() < 80);
        });

        loadData('/sections/contact/whatsapp', setWhatsapp);
    });

    return (
        <Navbar bg="light" expand="lg" fixed="top" className={ shrink === true ? "transparent" : ""}>
            <Container fluid>
                <Navbar.Brand href="/"><img src={Logo} alt="Positive Treinamentos" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Início</Nav.Link>
                        <Nav.Link href="/quem-somos">Quem somos</Nav.Link>
                        <Nav.Link href="/transformacoes-positive">Transformações Positive</Nav.Link>
                        <Nav.Link href="/agenda">Agenda</Nav.Link>
                        <Nav.Link href="/disciplina-positiva">Disciplina Positiva</Nav.Link>
                        <Nav.Link href="/depoimentos" className="d-none">Depoimentos</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={ <Tooltip id={"whatsapp"}>+{whatsapp}</Tooltip> }
                        >
                            <Nav.Link 
                                href={`https://api.whatsapp.com/send?phone=${whatsapp}`} 
                                className="social-media"
                                target="_blank"
                            >
                                <i className="fab fa-whatsapp-square fa-2x"></i>
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement={"bottom"}
                            overlay={ <Tooltip id={"instagram"}>@positivetreinamentos</Tooltip> }
                        >
                            <Nav.Link 
                                href="https://www.instagram.com/positivetreinamentos/" 
                                className="social-media"
                                target="_blank"
                            >
                                <i className="fab fa-instagram-square fa-2x"></i>
                            </Nav.Link>
                        </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>);
    ;
}

export default CustomNavbar;