'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
    	await queryInterface.bulkInsert('courses', [
      		{
				title: 'Workshop de Disciplina Positiva para Pais',
				content: '<div><p><b style="text-transform: uppercase;">Workshop indicado para:</b> Pais, mães, avós, profissionais da educação e todas as pessoas que tenham interesse em conhecer e desenvolver uma comunicação e educação positiva. </p><p> Como podemos contribuir com o desenvolvimento de habilidades sociais e de vida de nossos filhos? Como agir de maneira firme e respeitosa ao mesmo tempo? </p><p> Em nossos workshops oferecemos aos participantes oportunidades e ferramentas para melhor a comunicação com seus filhos, construir relacionamentos mais saudáveis, entender as crenças que influenciam o mau comportamento da criança. </p><p>Disciplina Positiva é uma abordagem desenvolvida pela <b>Dra. Jane Nelsen</b>, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países. </p><p> A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro. A Disciplina Positiva possui os seguintes critérios: </p><ul> <li>Respeito mútuo;</li><li>Desenvolve senso de aceitação e importância;</li><li>É efetiva a longo prazo;</li><li>Ensina habilidades sociais e de vida;</li><li>Nos incentiva a descobrir capacidades e poder pessoal.</li></ul></div>',
				url_form: 'https://docs.google.com/forms/d/e/1FAIpQLScJyArpCdpOgPmvMkGGqRCwQ8aFPQNxwb_P_DmifoFF9h-CSA/viewform',
				location: 'Plataforma Zoom',
				status: true,
				image: 'para-pais.png',
				date: new Date(2021, 2, 13, 14, 30, 0, 0),
				transformation_id: 2
			}
		], {});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('courses', null, {});
	}
};
