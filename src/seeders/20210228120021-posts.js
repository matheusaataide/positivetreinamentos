'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
    	await queryInterface.bulkInsert('posts', [
      		{
				title: 'Qual a medida certa entre tecnologia e educação?',
				status: true,
				image: 'post1.png',
				content: `<p class="mt-3 text-justify">Existe um tempo de uso ideal para celulares e jogos, como definir isso?</p><p>Como é difícil controlar o uso das telas, seja com crianças, adolescentes e até mesmo conosco, não é mesmo?</p><p>Segundo a Academia Americana de Pediatria, para crianças menores de 18 meses deve ser evitado o uso de telas, que sejam diferentes de bate-pai por vídeo ou chamadas por vídeo com parentes que moram longe, onde o objetivo é promover interação.</p><p>Já para as crianças de 2 a 5 anos, o uso deve ser limitado a uma hora por dia e com programas de qualidade, sempre com supervisão dos pais.</p><p>Para as crianças maiores de 6 anos é importante estabelecer limites para o tempo gasto com as mídias, para que seja preservado o tempo adequado de sono, atividade física e outros comportamentos essenciais à saúde, como por exemplo, refeições em família.</p><p>Que tal definir, junto com seu filho, o calendário de atividades dele da semana? Dessa forma, vocês podem organizar as atividades que ele irá fazer, bem como, o tempo de cada atividade para que consiga manter o equilíbrio entre tela, atividades físicas, tempo de sono e tempo em família, por exemplo.</p>`,
			},{
				title: 'Que tal repensar o cantinho do pensamento?',
				status: true,
				image: 'post2.jpeg',
				content: `<div><p class="mt-3 text-justify">Como é comum ouvirmos falar que pais e até mesmo professores utilizam o cantinho do pensamento para reflexão da criança que fez algo “errado”, não é verdade?</p><p>O que acontece é que quando uma criança é direcionada para o chamado Cantinho do Pensamento, ao invés de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela começa a se culpar pelo que fez, pensar que é uma criança incapaz de fazer as coisas certas, que ninguém gosta de ficar com ela, especialmente quanto pratica algo considerado errado.<br>Esse cantinho é tratado como um castigo, lá as crianças vão se sentir mal pelo que fizeram e não como um local propício para a criança buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o vínculo que você tem com ele.</p><p>E qual seria a melhora alternativa para os episódios de mau comportamento?<br>O ideal é criar um local, junto com seu filho, em um momento em que estejam todos bem, vocês darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p></div>`,
			},{
				title: 'Por que o cantinho do pensamento não é a melhor opção?',
				status: true,
				image: 'post3.jpeg',
				content: `<div><p class="mt-3 text-justify">Como é comum ouvirmos falar que pais e até mesmo professores utilizam o cantinho do pensamento para reflexão da criança que fez algo “errado”, não é verdade?</p><p>O que acontece é que quando uma criança é direcionada para o chamado Cantinho do Pensamento, ao invés de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela começa a se culpar pelo que fez, pensar que é uma criança incapaz de fazer as coisas certas, que ninguém gosta de ficar com ela, especialmente quanto pratica algo considerado errado.<br>Esse cantinho é tratado como um castigo, lá as crianças vão se sentir mal pelo que fizeram e não como um local propício para a criança buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o vínculo que você tem com ele.</p><p>E qual seria a melhora alternativa para os episódios de mau comportamento?<br>O ideal é criar um local, junto com seu filho, em um momento em que estejam todos bem, vocês darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p></div>`,
			}
		], {});
  	},
  	down: async (queryInterface, Sequelize) => {
    	await queryInterface.bulkDelete('posts', null, {});
	}
};
