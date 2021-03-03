'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
    	await queryInterface.bulkInsert('sections', [
			{
				name: 'we-believe',
				key: 'title',
				value: 'Desenvolvimento pessoal e familiar',  
     			status: true
			},{
				name: 'we-believe',
				key: 'img',
				value: 'rafael-e-patricia.jpg',  
     			status: true
			},{
				name: 'we-believe',
				key: 'text',
				value: `<p>Nós acreditamos que os pais são os maiores pilares emocionais e maiores incentivadores na educação de seus filhos e quando essa relação não se desenvolve bem, é preciso intervir para que o equilíbrio volte a prevalecer na família. Algumas vezes os pais não conseguem esse resultado sozinhos e buscam meios para resolver conflitos, melhorar a comunicação e ter práticas parentais mais positivas.</p><p>As escolas, por sua vez, ao utilizar abordagens de Disciplina Positiva e Coaching em todos os níveis da instituição, direção, coordenação e professores, estarão trabalhando seu autodesenvolvimento e vivendo uma abordagem de respeito entre escola, alunos e pais. Dessa forma, melhorando as habilidades sociais, emocionais e pensamento positivo de seus alunos, colaboradores e responsáveis.</p>`,  
     			status: true
			},{
				name: 'intro',
				key: 'title',
				value: `<span class="turquoise">Conhecimento</span> e <span class="turquoise">transformação</span><br/>para vida toda!`,  
     			status: true
			},{
				name: 'intro',
				key: 'img',
				value: 'familia-positive.jpg',  
				status: true
			},{
				name: 'intro',
				key: 'text',
				value: `<p class="p-large">Estamos completamente comprometidos em construir, junto com você, famílias mais estruturada e relacionamentos mais próximos entre pais, filhos e escola, criando ambientes mais harmoniosos e encorajadores, e assim, uma sociedade melhor e mais positiva.</p>`,  
				status: true
			},{
				name: 'our-story',
				key: 'text',
				value: `<p>A Positive Treinamentos surgiu com  ideias do casal Rafael e Patrícia, que, por possuírem seus maiores valores voltados para a Família, oferecem um trabalho de desenvolvimento pessoal com pais, casais, jovens e escolas.</p><p>Sempre trabalhando na área empresarial, percebemos a necessidade que muitas pessoas possuem de melhorar o seu relacionamento familiar, onde muitas vezes, por estarem em conflitos com família, dificuldade de lidar com filhos, escola, profissionais muito bons e competentes não conseguiam ser produtivos e não desempenhavam seus papéis como gostariam.</p><p>Entendemos a necessidade de nos atualizarmos sempre no âmbito profissionale acreditamos que a família é a base para nossa vida e nosso relacionamento, com isso precisamos estar conectados, em harmonia e realizados no segmento familiar para estarmos mais preparados e termos sucessos nos negócios.</p><p>A escola é a segunda casa de nossos filhos e é imprescindível que ela seja umambiente agradável, respeitoso e encorajador, além de ser responsável pela educação e produção de conhecimentos que levarão as crianças e jovens para a preparação profissional e para a vida.</p>`,  
				status: true
			},{
				name: 'contact',
				key: 'whatsapp',
				value: '55 82 99939 5433',  
				status: true
			},{
				name: 'positive-discipline',
				key: 'img',
				value: 'dp.jpg',  
				status: true
			},{
				name: 'positive-discipline',
				key: 'text',
				value: '<p> Muito se tem falado sobre uma nova abordagem para a educação de nossos filhos, a Disciplina Positiva. O que seria? Como podemos colocar em prática e o que ganhamos quando aplicamos em nossa vida?</p><p> Disciplina Positiva é uma abordagem desenvolvida pela Dra. Jane Nelsen, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países.</p><p> A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro, e possui os seguintes critérios:</p><ul><li>Respeito mútuo;</li><li>Desenvolve senso de aceitação e importância;</li><li>É efetiva a longo prazo;</li><li>Ensina habilidades sociais e de vida;</li><li>Nos incentiva a descobrir capacidades e poder pessoal.</li></ul>',  
				status: true
			}

			], {});
  	},

  	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('sections', null, {});
	}
};

