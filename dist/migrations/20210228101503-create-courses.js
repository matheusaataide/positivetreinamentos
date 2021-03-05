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
              return queryInterface.createTable('courses', {
                id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                title: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                content: {
                  type: Sequelize.TEXT,
                  allowNull: false
                },
                url_form: {
                  type: Sequelize.STRING,
                  defaultValue: ''
                },
                location: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                status: {
                  type: Sequelize.BOOLEAN,
                  defaultValue: true
                },
                image: {
                  type: Sequelize.STRING,
                  defaultValue: ''
                },
                date: {
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.NOW
                },
                transformation_id: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  references: {
                    model: 'transformations',
                    key: 'id'
                  }
                }
              });

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
              return queryInterface.dropTable('courses');

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
//# sourceMappingURL=20210228101503-create-courses.js.map