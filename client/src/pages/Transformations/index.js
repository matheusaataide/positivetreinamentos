import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import loadData from '../../util/loadData';

import './styles.css';
import ImgTransf from '../../assets/img/transformations/father.png';

const Schedule = props => {
    return (
    <div className="page schedule d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Transformações Positive</title>
        </Helmet>

        <Navbar />
        <Container  className="flex-grow-1 flex-shrink-0">
            <Row>
                <Col>
                    <h2 className="page-title">Transformações<br/>Positive</h2>
                </Col>
            </Row>
            <Row>
                <Col className=''>
                    <Image fluid 
                        src={ ImgTransf }
                        alt="Caricatura de Patrícia" />
                <p>Como podemos contribuir com o desenvolvimento de habilidades sociais e
de vida de nossos filhos? Como agir de maneira firme e respeitosa ao mesmo
tempo?
Em nossos workshops oferecemos aos participantes oportunidades e
ferramentas para melhor a comunicação com seus filhos, construir relacionamentos mais saudáveis, entender as crenças que influenciam o mau
comportamento da criança.
Disciplina Positiva é uma abordagem desenvolvida pela Dra.
Jane Nelsen, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver
cooperação, resolução de problemas, autodisciplina e
responsabilidade.
As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada
com crianças, adolescentes, adultos, professores, escolas,
empresas e está presente em mais de 60 países.
A Disciplina Positiva atua na aplicação do equilíbrio entre
firmeza e gentileza, pois é percebido algumas dificuldades
quando tendemos a ir mais para um lado ou outro.
A Disciplina Positiva possui os seguintes critérios: - Foca na resolução de problemas; - Respeito mútuo; - Desenvolve senso de aceitação e importância; - É efetiva a longo prazo; - Ensina habilidades sociais e de vida; - Nos incentiva a descobrir capacidades e poder pessoal.

Cada Workshop é desenvolvido com temas específicos e faixa
etária definida, onde são utilizadas ferramentas e dinâmicas
distintas a fim de direcionar você à solução.</p>
                    
                </Col>
            </Row>
            </Container>
        <Footer />
    </div>
    );
}

export default Schedule;