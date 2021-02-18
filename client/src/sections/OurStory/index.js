import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import htmlParser from 'react-html-parser';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './styles.css';
import ImageCartoonRafael from "../../assets/img/caricaturas/rafael.png";
import baseURL from '../../util/baseUrl';


class OurStory extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    componentDidMount () {
        axios.get(`${baseURL}/api/sections/our-story/text`)
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					text: _.head(infos).value
				 });
            }); 
    }

    render() {
        const { text } = this.state;
         
        return (
        <section className="page-section our-story" id="our-story">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <Image className="img-fluid cartoon" 
                            src={ImageCartoonRafael}
                            alt="Caricatura de Rafael" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="text-center h-100">
                            <div className="d-flex h-100">
                                <div className="transform-text w-100 text-center text-lg-left">
                                    <h2 className="section-title">Nossa história</h2>
                                    <div className="content">
                                        <p>A Positive Treinamentos surgiu com  ideias do casal Rafael e Patrícia, que,
                                        por possuírem seus maiores valores voltados para a Família, oferecem
                                        um trabalho de desenvolvimento pessoal com pais, casais, jovens e escolas.
                                        </p>
                                        <p>Sempre trabalhando na área empresarial, percebemos a necessidade que
                                            muitas pessoas possuem de melhorar o seu relacionamento familiar, 
                                            onde muitas vezes, por estarem em conflitos com família, 
                                            dificuldade de lidar com filhos, escola, profissionais muito bons
                                            e competentes não conseguiam ser produtivos e não desempenhavam 
                                            seus papéis como gostariam.
                                        </p>
                                        <p>Entendemos a necessidade de nos atualizarmos sempre no âmbito profissional e acreditamos que a família é a base para nossa vida e nosso relacionamento, com isso precisamos estar conectados, em harmonia e realizados no segmento familiar para estarmos mais preparados e termos sucessos nos negócios.</p>
                                        <p>A escola é a segunda casa de nossos filhos e é imprescindível que ela seja um ambiente agradável, respeitoso e encorajador, além de ser responsável pela educação e produção de conhecimentos que levarão as crianças e jovens para a preparação profissional e para a vida.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }
}

export default OurStory;