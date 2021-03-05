import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import htmlParser from 'react-html-parser';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import loadData from '../../util/loadData';

import './styles.css';
import ImgTransf from '../../assets/img/transformations/father.png';

const Transformations = props => {

    const [weBelieve, setWeBelieve] = useState({});
    const [positiveDiscipline, setPositiveDiscipline] = useState({});

    useEffect(() => {
        loadData('/sections/we-believe', setWeBelieve);
        loadData('/sections/positive-discipline', setPositiveDiscipline);
    }, []);

    return (
    <div className="page transformations d-flex flex-column">
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
                    
                    { htmlParser(weBelieve.text) }
                    <br />
                    <span>Conheça os serviços que desenvolvemos e encontre o que você está buscando.</span>
                </Col>
                <Col>
                    <Image fluid 
                        src={ ImgTransf }
                        alt="Caricatura de Patrícia" />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Disciplina Positiva para Pais
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <p><b>
                                        Workshop indicado para pais, mães, avós, profissionais da educação e todas as pessoas
                                        que tenham interesse em conhecer e desenvolver uma
                                        comunicação e educação positiva.</b>
                                    </p>

                                    <p>Como podemos contribuir com o desenvolvimento de habilidades sociais e
                                        de vida de nossos filhos? Como agir de maneira firme e respeitosa ao mesmo
                                        tempo?
                                        Em nossos workshops oferecemos aos participantes oportunidades e
                                        ferramentas para melhor a comunicação com seus filhos, construir relacionamentos mais saudáveis, entender as crenças que influenciam o mau
                                        comportamento da criança.</p>

                                    { htmlParser(positiveDiscipline.text)}

                                    <p>Cada Workshop é desenvolvido com temas específicos e faixa
                                        etária definida, onde são utilizadas ferramentas e dinâmicas
                                        distintas a fim de direcionar você à solução no grande desafio
                                        da criação de nossos filhos.</p>

                                    <p>Nossos encontros são repletos de dinâmicas e muita interação
                                        que nos permitem vivenciar momentos de grande aprendizado,
                                        gerando reflexões que nos ajudam a reconhecer as
                                        necessidades de nossos filhos, desenvolvendo em nós e neles
                                        um senso de aceitação e importância.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Disciplina Positiva para Ambiente Escolar
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>Este projeto é indicado para Escolas que desejem implantar a Disciplina Positiva no ambiente escolar nos mais diversos setores, dentro e fora da sala de aula. </p>

                                    { htmlParser(positiveDiscipline.text) }

                                    <p>A implantação da Disciplina Positiva na pode ser implementada como um
                                    programa de disciplina, desenvolvimento de liderança, buscando trazer para
                                    o ambiente maior senso de pertencimento e cooperação, que pode ser um
                                    suporte para escolas que já possuam algum programa.</p>

                                    <p>Como podemos manter os colaboradores motivados e comprometidos
                                    com o desempenho da escola? Como contribuir com o
                                    desenvolvimento de habilidades sociais, liderança, que possam refletir
                                    nos alunos? Afinal, todos os funcionários são responsáveis pela boa
                                    conduta e aprendizado das crianças e jovens.
                                    Como agir de maneira firme e respeitosa com os colaboradores sem ser
                                    permissivo ou autoritário, algo que atrapalha consideravelmente o
                                    relacionamento profissional?</p>
                                    <p>Oferecemos aos participantes oportunidades e ferramentas para
                                    melhor a comunicação na escola, construir relacionamentos mais
                                    saudáveis, desenvolvimento de habilidades de autocontrole,
                                    responsabilidade, foco na resolução de problemas. Como realizar
                                    reuniões de equipes curtas e efetivas, aonde há a valorização de todos.</p>

                                    <p>
                                        <b>Projeto a ser definido juntamente com a escola. Além da abordagem da Disciplina Positiva, são utilizadas outras
                                        metodologias, como Coaching, Inteligência Emocional, Treinamentos
                                        Vivenciais, atendimentos individuais, de acordo com a necessidade da
                                        escola. </b>
                                    </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                Disciplina Positiva para Professores
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p><b>Workshop indicado para professores, coordenadores, diretores de escola e pessoas que
                                    busquem conhecer a Disciplina Positiva para Professores.</b></p>

                                    { htmlParser(positiveDiscipline.text)}

                                    <p>Como podemos fazer para manter o aluno participativo e atento às
                                    aulas? Como contribuir com o desenvolvimento de habilidades sociais e
                                    de vida de crianças e jovens? Como conseguir cooperação da turma de
                                    forma que não seja autoritária ou permissiva? Como agir de maneira
                                    firme e respeitosa ao mesmo tempo?</p>
                                    <p>
                                    Em nossos workshops oferecemos aos participantes oportunidades e
                                    ferramentas para melhor a comunicação com seus alunos, construir
                                    relacionamentos mais saudáveis, entender as crenças que influenciam
                                    o mau comportamento da criança e jovem, encorajando a atitudes e
                                    mudanças positiva, além do desenvolvimento de habilidades de
                                    autocontrole, responsabilidade, respeito às adversidades e habilidades
                                    para resolver problemas. Os participantes irão aprender como liderar
                                    reuniões de classes efetivas onde o foco na resolução de problemas
                                    direcionam ações que transformam o ambiente de sala de aula e
                                    escola.</p>

                                    <p><b>Cada Workshop é desenvolvido com temas específicos e são utilizadas
                                    ferramentas e dinâmicas distintas a fim de direcionar ao que você busca
                                    desenvolver. Além da agenda determinada, realizamos Workshops de acordo com a
                                    formação de grupos de escola.</b></p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                Disciplina Positiva para Casais
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <p><b>Independente do estado atual de seu relacionamento, se você
                                    soubesse que tem algo que pode melhorar a sua relação, o que
                                    você faria?</b></p>

                                    <p><b>Metodologias Abordadas:</b>
                                    <ul>
                                        <li>Coaching;</li>
                                        <li>Programação Neurolinguística;</li>
                                        <li>Inteligência Emocional;</li>
                                        <li>Disciplina Positiva.</li> 
                                    </ul> </p>

                                    <p><b> Conteúdo abordado:</b>
                                        <ul>
                                            <li>Linguagens do Amor;</li> 
                                            <li>Ferramentas de autoconhecimento e ações individuais e
                                            para o casal;</li> 
                                            <li>Foco em soluções ao invés do foco em problemas;</li>
                                            <li>Utilizando firmeza e gentileza;</li>
                                            <li>Comunicação Transparente e Positiva;</li>
                                            <li>Escutar com empatia;</li>
                                            <li>Pausa Positiva;</li>
                                            <li>Autocuidado;</li>
                                            <li>Ordens sistêmicas do casal x filhos;</li>
                                            <li>A importância do perdão;</li>
                                            <li>Reuniões de Casal.</li> 
                                        </ul>
                                    </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                Treinamento Positive Family
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                     <ul>
                                        <li>Como está o seu relacionamento com sua família hoje?</li>
                                        <li>Seus comportamentos estão adequados?</li>
                                        <li>O que precisa desenvolver para que atingir seus objetivos como pai/ mãe?</li>
                                        <li>Suas atitudes estão de acordo com os seus valores?</li>
                                        <li>As pessoas de sua família estão assumindo os papéis que deveriam?</li>
                                        <li>Os membros de sua família se sentem pertencentes? Ou alguém se sente deslocado?</li> 
                                        <li>Como está sua comunicação com sua família? Vocês conversam e compartilham sobre seus sonhos ou você tem dificuldade ou falta de tempo para dialogar?</li>
                                    </ul>

                                    <p>Esses questionamentos são bem comuns e
                                    muitas vezes nos deparamos com situações semelhantes
                                    e ficamos um tanto perdidos sem saber como mudar isso.
                                    O primeiro passo para mudar essa realidade
                                    é se conhecer melhor, como ser humano, pai/ mãe, para
                                    então identificar novas formas de se relacionar com as
                                    pessoas mais importantes de nossas vidas, nossa família.
                                    Dessa forma construiremos uma vida mais equilibrada,
                                    positiva e realizada.</p>

                                    <p><b>Positive Family é um treinamento prático e dinâmico desenvolvido para
                                    despertar o melhor pai/ mãe e ser humano que existe em você, almejando autoconhecimento, autoconfiança, desenvolver
                                    comunicação positiva, aprender a lidar melhor
                                    com os comportamentos e emoções.</b></p>
                                   
                                    <p><b>Público alvo:</b>
                                        <ul>
                                            <li>Pais de crianças e adolescentes que desejem uma melhor comunicação entre a família e desenvolver práticas parentais positivas;</li> 
                                            <li>Pais, Avós, Professores e outras pessoas que buscam o
                                            autoconhecimento, aumento de autoestima e autoconfiança.</li> 
                                        </ul>
                                    </p>

                                    <p><b>Benefícios:</b>
                                    <ul>
                                        <li>Construir habilidades de comunicação entre pais e filhos;</li>
                                        <li>Desenvolver novas atitudes para práticas parentais positivas;</li>
                                        <li>Aumentar a confiança dos pais sobre a educação dos filhos;</li>
                                        <li>Trazer o equilíbrio do sistema familiar através do posicionamento adequado;</li>
                                        <li>Estreitar o relacionamento entre os membros da família;</li>
                                        <li>Aplicação de ferramentas que serão utilizadas para o autoconhecimento;</li>
                                        <li>Trabalhar o equilíbrio entre a razão e a emoção;</li>
                                        <li>Comunicar-se de forma mais assertiva;</li>
                                        <li>Quebra de crenças limitantes;</li>
                                        <li>Desenvolvimento de mindset positivo.</li>
                                    </ul></p>

                                    <p><b>Conteúdo Programático:</b>
                                    <ul>
                                        <li>Mente consciente e inconsciente;</li>
                                        <li>Ordens do amor (Constelação Familiar);</li>
                                        <li>Crenças limitantes x crenças possibilitadoras;</li>
                                        <li>Comunicação e educação positivas;</li>
                                        <li>Ferramentas de auto conhecimento;</li>
                                        <li>Dinâmicas de médio impacto</li>
                                    </ul></p>
                                    
                                    <p><b>Metodologias utilizadas:</b>
                                    <ul>
                                        <li>Coaching;</li>
                                        <li>Constelação Sistêmica Integrativa;</li>
                                        <li>Disciplina Positiva;</li>
                                        <li>Programação Neurolinguística.</li>
                                    </ul></p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    
                    </Accordion>
                </Col>
            </Row>
            </Container>
        <Footer />
    </div>
    );
}

export default Transformations;