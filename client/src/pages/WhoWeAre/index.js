import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CustomNavbar from '../../components/CustomNavbar';
import ProfileCard from '../../components/ProfileCard';
import BackToTopButton from '../../components/BackToTopButton';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';
import './styles.css';

const WhoWeAre = () => {
    const users = [
        {
            "id": 1,
            "username": "rafael",
            "name": "Rafael Barbosa",
            "email": "rafael@email.com",
            "password": "positive.rb",
            "profilePic": "1610935329279-rafael.jpg",
            "createdAt": "2021-01-17T21:25:13.000Z",
            "updatedAt": "2021-01-18T02:02:09.000Z",
            "graduations": [
                {
                    "id": 1,
                    "content": "Esposo da Patrícia",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                },
                {
                    "id": 2,
                    "content": "Pai da Alícia e da Lavínia",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                },
                {
                    "id": 3,
                    "content": "Administrador de Empresas com MBA em Gestão Comercial e Inteligência de Mercado",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                },
                {
                    "id": 4,
                    "content": "Practitioner em Programação Neurolinguística",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                },
                {
                    "id": 5,
                    "content": "Professional & Self Coach",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                },
                {
                    "id": 6,
                    "content": "Treinador Comportamental",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                },
                {
                    "id": 7,
                    "content": "Especialista em Inteligência Emocional (SBIE)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                },
                {
                    "id": 8,
                    "content": "MBA Executivo em Gestão Comercial & Inteligência de Mercado. (IPOG)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 1
                }
            ]
        },
        {
            "id": 2,
            "username": "patricia",
            "name": "Patrícia Carvalho",
            "email": "patricia@email.com",
            "password": "positive.pc",
            "profilePic": "1610935319031-patricia-carcalho.jpg",
            "createdAt": "2021-01-17T21:25:13.000Z",
            "updatedAt": "2021-01-18T02:01:59.000Z",
            "graduations": [
                {
                    "id": 9,
                    "content": "Esposa do Rafael",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 10,
                    "content": "Mãe da Alícia e da Lavínia",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 11,
                    "content": "Administradora de Empresas com MBA em Gestão Empresarial, Gestão de Projetos, Finanças Corporativas e Gestão de Pessoas com Coaching",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 12,
                    "content": "Master Practitioner em Programação Neurolinguística (INEXH)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 13,
                    "content": "Consteladora Sistêmica Integrativa (IBC)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 14,
                    "content": "Treinadora Comportamental (IFT)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 15,
                    "content": "Master Coach (IBC) para Pais, Adolescentes e Escolar (Parent Coaching)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 16,
                    "content": "Especialista em Inteligência Emocional (SBIE)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 17,
                    "content": "Educadora para Pais, Professores, Escolas e Empresas em Disciplina Positiva pela PDA (USA)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                },
                {
                    "id": 18,
                    "content": "Consultora em Encorajamento (Lynn Lott)",
                    "createdAt": "2021-01-17T21:25:13.000Z",
                    "updatedAt": "2021-01-17T21:25:13.000Z",
                    "userId": 2
                }
            ]
        }
    ];
    
    return (
    <div id="top" className="page who-we-are d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Quem somos</title>
        </Helmet>

        <CustomNavbar shrink />
        <Container className="flex-grow-1 flex-shrink-0">
            <Row>
                <Col style={{ textAlign: 'justify' }}>
                    <h1 className="page-title">Quem somos nós</h1>
                    <Image 
                        className="img-hero"
                        src={`${baseURL}/uploads/rafael-e-patricia.jpg`} 
                        alt="Rafael e Patrícia" />
                    <div class="content">
                        <p>
                            A Positive Treinamentos surgiu com  ideias do casal Rafael e Patrícia, que,
                            por possuírem seus maiores valores voltados para a Família, oferecem
                            um trabalho de desenvolvimento pessoal com pais, casais, jovens e escolas.
                        </p>
                        <p>
                            Sempre trabalhando na área empresarial, percebemos a necessidade que
                            muitas pessoas possuem de melhorar o seu relacionamento familiar, 
                            onde muitas vezes, por estarem em conflitos com família, 
                            dificuldade de lidar com filhos, escola, profissionais muito bons
                            e competentes não conseguiam ser produtivos e não desempenhavam 
                            seus papéis como gostariam.
                        </p>
                        <p>
                            Entendemos a necessidade de nos atualizarmos sempre no âmbito profissional 
                            e acreditamos que a família é a base para nossa vida e nosso relacionamento,
                            com isso precisamos estar conectados, em harmonia e realizados no segmento familiar 
                            para estarmos mais preparados e termos sucessos nos negócios.
                        </p>
                        <p>
                            A escola é a segunda casa de nossos filhos e é imprescindível que ela
                            seja um ambiente agradável, respeitoso e encorajador, além de ser responsável 
                            pela educação e produção de conhecimentos que levarão as crianças e jovens 
                            para a preparação profissional e para a vida.
                        </p>
                    </div>      
                </Col>
            </Row>
            <section className="page-section">
                <Row>
                    <h2 className="section-title">Estamos prontos para te ajudar</h2>
                </Row>
                <Row>
                    { users.map((user, index) => (
                        <Col key={index}
                            xs={12}
                            lg={{ span: 5, offset: index === 0 ? 1 : 0 }}>
                            <ProfileCard user={user} />
                        </Col>
                    ))}
                </Row>
            </section>
            <BackToTopButton />
        </Container>
        <Footer />
    </div>
    );
}

export default WhoWeAre;