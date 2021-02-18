import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import axios from 'axios';

import './styles.css';
import baseURL from '../../util/baseUrl';
import PostCard from '../../components/PostCard';


export default class LearnTogether extends React.Component {
    constructor (props) {
        super(props);

        this.state = { 
            posts: [
                {
                    "id": 0,
                    "title": "Qual a medida certa entre tecnologia e educação?",
                    "content": "<p class=\"mt-3 text-justify\">Existe um tempo de uso ideal para celulares e jogos, como definir isso?</p>\n                        <p>Como é difícil controlar o uso das telas, seja com crianças, adolescentes e até mesmo conosco, não é mesmo?\n                       </p><p>                \n                        Segundo a Academia Americana de Pediatria, para crianças menores de 18 meses deve ser evitado o uso de telas, que sejam diferentes de bate-pai por vídeo ou chamadas por vídeo com parentes que moram longe, onde o objetivo é promover interação.\n                       </p><p>\n                        Já para as crianças de 2 a 5 anos, o uso deve ser limitado a uma hora por dia e com programas de qualidade, sempre com supervisão dos pais.\n                       </p><p>\n                        Para as crianças maiores de 6 anos é importante estabelecer limites para o tempo gasto com as mídias, para que seja preservado o tempo adequado de sono, atividade física e outros comportamentos essenciais à saúde, como por exemplo, refeições em família.\n                       </p><p>\n                        Que tal definir, junto com seu filho, o calendário de atividades dele da semana?\n                        Dessa forma, vocês podem organizar as atividades que ele irá fazer, bem como, o tempo de cada atividade para que consiga manter o equilíbrio entre tela, atividades físicas, tempo de sono e tempo em família, por exemplo.\n                       </p>",
                    "status": true,
                    "img": "post1.png",
                    "createdAt": "2021-01-18T06:09:46.000Z",
                    "updatedAt": "2021-01-18T06:09:46.000Z",
                    "createdById": 2,
                    "updatedById": 2
                },
                {
                    "id": 1,
                    "title": "Que tal repensar o cantinho do pensamento?",
                    "content": "<p class=\"mt-3 text-justify\">Como é comum ouvirmos falar que pais e até mesmo professores utilizam o cantinho do pensamento para reflexão da criança que fez algo “errado”, não é verdade?\n                       </p><p>\n                        O que acontece é que quando uma criança é direcionada para o chamado Cantinho do Pensamento, ao invés de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela começa a se culpar pelo que fez, pensar que é uma criança incapaz de fazer as coisas certas, que ninguém gosta de ficar com ela, especialmente quanto pratica algo considerado errado.\n                        <br>Esse cantinho é tratado como um castigo, lá as crianças vão se sentir mal pelo que fizeram e não como um local propício para a criança buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o vínculo que você tem com ele.\n                   </p><p>\n                        E qual seria a melhora alternativa para os episódios de mau comportamento?\n                        <br>O ideal é criar um local, junto com seu filho, em um momento em que estejam todos bem, vocês darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p>",
                    "status": true,
                    "img": "post3.jpeg",
                    "createdAt": "2021-01-18T06:09:46.000Z",
                    "updatedAt": "2021-01-18T06:09:46.000Z",
                    "createdById": 2,
                    "updatedById": 2
                },
                {
                    "id": 2,
                    "title": "Por que o cantinho do pensamento não é a melhor opção?",
                    "content": "<p class=\"mt-3 text-justify\">Como é comum ouvirmos falar que pais e até mesmo professores utilizam o cantinho do pensamento para reflexão da criança que fez algo “errado”, não é verdade?\n                       </p><p>\n                        O que acontece é que quando uma criança é direcionada para o chamado Cantinho do Pensamento, ao invés de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela começa a se culpar pelo que fez, pensar que é uma criança incapaz de fazer as coisas certas, que ninguém gosta de ficar com ela, especialmente quanto pratica algo considerado errado.\n                        <br>Esse cantinho é tratado como um castigo, lá as crianças vão se sentir mal pelo que fizeram e não como um local propício para a criança buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o vínculo que você tem com ele.\n                   </p><p>\n                        E qual seria a melhora alternativa para os episódios de mau comportamento?\n                        <br>O ideal é criar um local, junto com seu filho, em um momento em que estejam todos bem, vocês darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p>",
                    "status": true,
                    "img": "post2.jpeg",
                    "createdAt": "2021-01-18T06:09:46.000Z",
                    "updatedAt": "2021-01-18T06:09:46.000Z",
                    "createdById": 2,
                    "updatedById": 2
                }
            ],
            limit: props.limit || 3, 
            offset: props.offset || 0 
        };
    }

    render() {
        const posts = this.state.posts;
        
        return <section className="page-section learn-together">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title">Vamos aprender juntos?</h2>
                    </Col>
                </Row>
                <Row>
                    { posts.map(post => (
                        <Col key={post.id} >
                            <PostCard post={post} />
                        </Col>
                    )) }
                </Row>
            </Container>
        </section>;
    }
};