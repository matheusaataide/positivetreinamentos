'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = {
  up: function () {
    var _up = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(queryInterface, Sequelize) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.bulkInsert('sections', [{
                name: 'we-believe',
                key: 'title',
                value: 'Desenvolvimento pessoal e familiar',
                status: true
              }, {
                name: 'we-believe',
                key: 'img',
                value: 'rafael-e-patricia.jpg',
                status: true
              }, {
                name: 'we-believe',
                key: 'text',
                value: "<p>N\xF3s acreditamos que os pais s\xE3o os maiores pilares emocionais e maiores incentivadores na educa\xE7\xE3o de seus filhos e quando essa rela\xE7\xE3o n\xE3o se desenvolve bem, \xE9 preciso intervir para que o equil\xEDbrio volte a prevalecer na fam\xEDlia. Algumas vezes os pais n\xE3o conseguem esse resultado sozinhos e buscam meios para resolver conflitos, melhorar a comunica\xE7\xE3o e ter pr\xE1ticas parentais mais positivas.</p><p>As escolas, por sua vez, ao utilizar abordagens de Disciplina Positiva e Coaching em todos os n\xEDveis da institui\xE7\xE3o, dire\xE7\xE3o, coordena\xE7\xE3o e professores, estar\xE3o trabalhando seu autodesenvolvimento e vivendo uma abordagem de respeito entre escola, alunos e pais. Dessa forma, melhorando as habilidades sociais, emocionais e pensamento positivo de seus alunos, colaboradores e respons\xE1veis.</p>",
                status: true
              }, {
                name: 'intro',
                key: 'title',
                value: "<span class=\"turquoise\">Conhecimento</span> e <span class=\"turquoise\">transforma\xE7\xE3o</span><br/>para vida toda!",
                status: true
              }, {
                name: 'intro',
                key: 'img',
                value: 'familia-positive.jpg',
                status: true
              }, {
                name: 'intro',
                key: 'text',
                value: "<p class=\"p-large\">Estamos completamente comprometidos em construir, junto com voc\xEA, fam\xEDlias mais estruturada e relacionamentos mais pr\xF3ximos entre pais, filhos e escola, criando ambientes mais harmoniosos e encorajadores, e assim, uma sociedade melhor e mais positiva.</p>",
                status: true
              }, {
                name: 'our-story',
                key: 'text',
                value: "<p>A Positive Treinamentos surgiu com  ideias do casal Rafael e Patr\xEDcia, que, por possu\xEDrem seus maiores valores voltados para a Fam\xEDlia, oferecem um trabalho de desenvolvimento pessoal com pais, casais, jovens e escolas.</p><p>Sempre trabalhando na \xE1rea empresarial, percebemos a necessidade que muitas pessoas possuem de melhorar o seu relacionamento familiar, onde muitas vezes, por estarem em conflitos com fam\xEDlia, dificuldade de lidar com filhos, escola, profissionais muito bons e competentes n\xE3o conseguiam ser produtivos e n\xE3o desempenhavam seus pap\xE9is como gostariam.</p><p>Entendemos a necessidade de nos atualizarmos sempre no \xE2mbito profissionale acreditamos que a fam\xEDlia \xE9 a base para nossa vida e nosso relacionamento, com isso precisamos estar conectados, em harmonia e realizados no segmento familiar para estarmos mais preparados e termos sucessos nos neg\xF3cios.</p><p>A escola \xE9 a segunda casa de nossos filhos e \xE9 imprescind\xEDvel que ela seja umambiente agrad\xE1vel, respeitoso e encorajador, al\xE9m de ser respons\xE1vel pela educa\xE7\xE3o e produ\xE7\xE3o de conhecimentos que levar\xE3o as crian\xE7as e jovens para a prepara\xE7\xE3o profissional e para a vida.</p>",
                status: true
              }, {
                name: 'contact',
                key: 'whatsapp',
                value: '55 82 99939 5433',
                status: true
              }, {
                name: 'positive-discipline',
                key: 'img',
                value: 'dp.jpg',
                status: true
              }, {
                name: 'positive-discipline',
                key: 'text',
                value: '<p> Muito se tem falado sobre uma nova abordagem para a educação de nossos filhos, a Disciplina Positiva. O que seria? Como podemos colocar em prática e o que ganhamos quando aplicamos em nossa vida?</p><p> Disciplina Positiva é uma abordagem desenvolvida pela Dra. Jane Nelsen, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países.</p><p> A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro, e possui os seguintes critérios:</p><ul><li>Respeito mútuo;</li><li>Desenvolve senso de aceitação e importância;</li><li>É efetiva a longo prazo;</li><li>Ensina habilidades sociais e de vida;</li><li>Nos incentiva a descobrir capacidades e poder pessoal.</li></ul>',
                status: true
              }], {});

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function () {
    var _down = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(queryInterface, Sequelize) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryInterface.bulkDelete('sections', null, {});

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};
//# sourceMappingURL=20210228123249-sections.js.map