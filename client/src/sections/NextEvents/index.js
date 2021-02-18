import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './styles.css';
import CourseCard from '../../components/CourseCard';

const NextEvents = () => {
    const courses = 
    [
        {
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
    ];

    return (
        <section className="page-section schedule" id="schedule">
            <Container>
                <Row className={`has-${courses.length}` }>
                { 
                    courses.map(course => {
                        return (
                            <Col key={ course.id }>
                                <CourseCard course={course} />
                            </Col>
                        );
                    })
                }
                </Row>
            </Container>
        </section>
    );
}

export default NextEvents;