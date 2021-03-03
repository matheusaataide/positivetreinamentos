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
              return queryInterface.bulkInsert('graduations', [{
                user_id: 1,
                content: 'Esposo da Patrícia'
              }, {
                user_id: 1,
                content: 'Pai da Alícia e da Lavínia'
              }, {
                user_id: 1,
                content: 'Administrador de Empresas com MBA em Gestão Comercial e Inteligência de Mercado'
              }, {
                user_id: 1,
                content: 'Practitioner em Programação Neurolinguística'
              }, {
                user_id: 1,
                content: 'Professional & Self Coach'
              }, {
                user_id: 1,
                content: 'Treinador Comportamental'
              }, {
                user_id: 1,
                content: 'Especialista em Inteligência Emocional (SBIE)'
              }, {
                user_id: 1,
                content: 'MBA Executivo em Gestão Comercial & Inteligência de Mercado. (IPOG)'
              }, {
                user_id: 2,
                content: 'Esposa do Rafael'
              }, {
                user_id: 2,
                content: 'Mãe da Alícia e da Lavínia'
              }, {
                user_id: 2,
                content: 'Administradora de Empresas com MBA em Gestão Empresarial, Gestão de Projetos, Finanças Corporativas e Gestão de Pessoas com Coaching'
              }, {
                user_id: 2,
                content: 'Master Practitioner em Programação Neurolinguística (INEXH)'
              }, {
                user_id: 2,
                content: 'Consteladora Sistêmica Integrativa (IBC)'
              }, {
                user_id: 2,
                content: 'Treinadora Comportamental (IFT)'
              }, {
                user_id: 2,
                content: 'Master Coach (IBC) para Pais, Adolescentes e Escolar (Parent Coaching)'
              }, {
                user_id: 2,
                content: 'Especialista em Inteligência Emocional (SBIE)'
              }, {
                user_id: 2,
                content: 'Educadora para Pais, Professores, Escolas e Empresas em Disciplina Positiva pela PDA (USA)'
              }, {
                user_id: 2,
                content: 'Consultora em Encorajamento (Lynn Lott)'
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
              return queryInterface.bulkDelete('graduations', null, {});

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
//# sourceMappingURL=20210227123713-graduations.js.map