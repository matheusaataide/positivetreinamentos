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
              return queryInterface.bulkInsert('posts', [{
                title: 'Qual a medida certa entre tecnologia e educação?',
                status: true,
                image: 'post1.png',
                content: "<p class=\"mt-3 text-justify\">Existe um tempo de uso ideal para celulares e jogos, como definir isso?</p><p>Como \xE9 dif\xEDcil controlar o uso das telas, seja com crian\xE7as, adolescentes e at\xE9 mesmo conosco, n\xE3o \xE9 mesmo?</p><p>Segundo a Academia Americana de Pediatria, para crian\xE7as menores de 18 meses deve ser evitado o uso de telas, que sejam diferentes de bate-pai por v\xEDdeo ou chamadas por v\xEDdeo com parentes que moram longe, onde o objetivo \xE9 promover intera\xE7\xE3o.</p><p>J\xE1 para as crian\xE7as de 2 a 5 anos, o uso deve ser limitado a uma hora por dia e com programas de qualidade, sempre com supervis\xE3o dos pais.</p><p>Para as crian\xE7as maiores de 6 anos \xE9 importante estabelecer limites para o tempo gasto com as m\xEDdias, para que seja preservado o tempo adequado de sono, atividade f\xEDsica e outros comportamentos essenciais \xE0 sa\xFAde, como por exemplo, refei\xE7\xF5es em fam\xEDlia.</p><p>Que tal definir, junto com seu filho, o calend\xE1rio de atividades dele da semana? Dessa forma, voc\xEAs podem organizar as atividades que ele ir\xE1 fazer, bem como, o tempo de cada atividade para que consiga manter o equil\xEDbrio entre tela, atividades f\xEDsicas, tempo de sono e tempo em fam\xEDlia, por exemplo.</p>"
              }, {
                title: 'Que tal repensar o cantinho do pensamento?',
                status: true,
                image: 'post2.jpeg',
                content: "<div><p class=\"mt-3 text-justify\">Como \xE9 comum ouvirmos falar que pais e at\xE9 mesmo professores utilizam o cantinho do pensamento para reflex\xE3o da crian\xE7a que fez algo \u201Cerrado\u201D, n\xE3o \xE9 verdade?</p><p>O que acontece \xE9 que quando uma crian\xE7a \xE9 direcionada para o chamado Cantinho do Pensamento, ao inv\xE9s de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela come\xE7a a se culpar pelo que fez, pensar que \xE9 uma crian\xE7a incapaz de fazer as coisas certas, que ningu\xE9m gosta de ficar com ela, especialmente quanto pratica algo considerado errado.<br>Esse cantinho \xE9 tratado como um castigo, l\xE1 as crian\xE7as v\xE3o se sentir mal pelo que fizeram e n\xE3o como um local prop\xEDcio para a crian\xE7a buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o v\xEDnculo que voc\xEA tem com ele.</p><p>E qual seria a melhora alternativa para os epis\xF3dios de mau comportamento?<br>O ideal \xE9 criar um local, junto com seu filho, em um momento em que estejam todos bem, voc\xEAs darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p></div>"
              }, {
                title: 'Por que o cantinho do pensamento não é a melhor opção?',
                status: true,
                image: 'post3.jpeg',
                content: "<div><p class=\"mt-3 text-justify\">Como \xE9 comum ouvirmos falar que pais e at\xE9 mesmo professores utilizam o cantinho do pensamento para reflex\xE3o da crian\xE7a que fez algo \u201Cerrado\u201D, n\xE3o \xE9 verdade?</p><p>O que acontece \xE9 que quando uma crian\xE7a \xE9 direcionada para o chamado Cantinho do Pensamento, ao inv\xE9s de refletir sobre o que aconteceu e sobre o que poderia melhorar, ela come\xE7a a se culpar pelo que fez, pensar que \xE9 uma crian\xE7a incapaz de fazer as coisas certas, que ningu\xE9m gosta de ficar com ela, especialmente quanto pratica algo considerado errado.<br>Esse cantinho \xE9 tratado como um castigo, l\xE1 as crian\xE7as v\xE3o se sentir mal pelo que fizeram e n\xE3o como um local prop\xEDcio para a crian\xE7a buscar melhoria em seu comportamento futuro. Seu filho vai se sentir inseguro, incompreendido, vai afastar o v\xEDnculo que voc\xEA tem com ele.</p><p>E qual seria a melhora alternativa para os epis\xF3dios de mau comportamento?<br>O ideal \xE9 criar um local, junto com seu filho, em um momento em que estejam todos bem, voc\xEAs darem o nome que mais gostarem, como: Cantinho da calma, da paz, do relaxamento.</p></div>"
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
              return queryInterface.bulkDelete('posts', null, {});

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
//# sourceMappingURL=20210228120021-posts.js.map