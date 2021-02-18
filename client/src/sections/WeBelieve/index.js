import React from 'react';
import _ from 'lodash';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './styles.css';

import weBelieveImg from '../../assets/img/photos/rafael-e-patricia.jpg';

class WeBelieve extends React.Component {
	render() {
		return (
		<section className="page-section we-believe" id="we-believe">
			<Container>
				<Row>
					<Col xs={12} lg={6}>
						<div className="image-absolute-box">
							<div className="box wow fadeInUp">
								<div className="icon-wrap"><span className="flaticon-vector"></span></div>
								
							</div>
							<Image fluid src={weBelieveImg} alt="Em que acreditamos" />
						</div>
					</Col>
					<Col xs={12} lg={6}>
						<div className="mb-5">
							<span className="section-subtitle d-block">No que acreditamos</span>
							<h2 className="section-title">Desenvolvimento pessoal e familiar</h2>
							<p>
								Nós acreditamos que os pais são os maiores pilares emocionais e maiores incentivadores 
								na educação de seus filhos e quando essa relação não se desenvolve bem, é preciso 
								intervir para que o equilíbrio volte a prevalecer na família. Algumas vezes os pais 
								não conseguem esse resultado sozinhos e buscam meios para resolver conflitos, melhorar 
								a comunicação e ter práticas parentais mais positivas.
							</p>
							<p>
								As escolas, por sua vez, ao utilizar abordagens de Disciplina Positiva e Coaching 
								em todos os níveis da instituição, direção, coordenação e professores, estarão 
								trabalhando seu autodesenvolvimento e vivendo uma abordagem de respeito entre escola, 
								alunos e pais. Dessa forma, melhorando as habilidades sociais, emocionais e pensamento 
								positivo de seus alunos, colaboradores e responsáveis.
							</p>	
						</div>					
					</Col>
				</Row>
			</Container>
        </section>
		);
	}
};

export default WeBelieve;