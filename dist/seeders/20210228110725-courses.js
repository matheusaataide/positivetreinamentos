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
              return queryInterface.bulkInsert('courses', [{
                title: 'Workshop de Disciplina Positiva para Pais',
                content: '<div><p><b style="text-transform: uppercase;">Workshop indicado para:</b> Pais, mães, avós, profissionais da educação e todas as pessoas que tenham interesse em conhecer e desenvolver uma comunicação e educação positiva. </p><p> Como podemos contribuir com o desenvolvimento de habilidades sociais e de vida de nossos filhos? Como agir de maneira firme e respeitosa ao mesmo tempo? </p><p> Em nossos workshops oferecemos aos participantes oportunidades e ferramentas para melhor a comunicação com seus filhos, construir relacionamentos mais saudáveis, entender as crenças que influenciam o mau comportamento da criança. </p><p>Disciplina Positiva é uma abordagem desenvolvida pela <b>Dra. Jane Nelsen</b>, que se baseia em princípios não punitivos que ajudam as crianças, jovens e adultos a desenvolver cooperação, resolução de problemas, autodisciplina e responsabilidade. As ferramentas utilizadas são muito práticas e podem ser usadas no dia a dia em qualquer situação. Hoje já é aplicada com crianças, adolescentes, adultos, professores, escolas, empresas e está presente em mais de 60 países. </p><p> A Disciplina Positiva atua na aplicação do equilíbrio entre firmeza e gentileza, pois é percebido algumas dificuldades quando tendemos a ir mais para um lado ou outro. A Disciplina Positiva possui os seguintes critérios: </p><ul> <li>Respeito mútuo;</li><li>Desenvolve senso de aceitação e importância;</li><li>É efetiva a longo prazo;</li><li>Ensina habilidades sociais e de vida;</li><li>Nos incentiva a descobrir capacidades e poder pessoal.</li></ul></div>',
                url_form: 'https://docs.google.com/forms/d/e/1FAIpQLScJyArpCdpOgPmvMkGGqRCwQ8aFPQNxwb_P_DmifoFF9h-CSA/viewform',
                location: 'Plataforma Zoom',
                status: true,
                image: 'para-pais.png',
                date: new Date(2021, 2, 13, 14, 30, 0, 0),
                transformation_id: 2
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
              return queryInterface.bulkDelete('courses', null, {});

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
//# sourceMappingURL=20210228110725-courses.js.map