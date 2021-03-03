"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var httpStatus = require('http-status');

var TestemonialController = function TestemonialController(database) {
  return {
    "delete": function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var testemonials, flag;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                testemonials = database.testemonials;
                _context.next = 3;
                return testemonials.destroy({
                  where: req.params
                });

              case 3:
                flag = _context.sent;
                return _context.abrupt("return", res.status(httpStatus.OK).json({
                  success: flag
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function _delete(_x, _x2) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }(),
    get: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var testemonials, testemonial;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                testemonials = database.testemonials;
                _context2.next = 3;
                return testemonials.findByPk(req.params.id);

              case 3:
                testemonial = _context2.sent;
                return _context2.abrupt("return", res.status(httpStatus.OK).json(testemonial));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function get(_x3, _x4) {
        return _get.apply(this, arguments);
      }

      return get;
    }(),
    getAll: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var testemonials;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                testemonials = database.testemonials;
                _context3.t0 = res.status(httpStatus.OK);
                _context3.next = 4;
                return testemonials.findAll();

              case 4:
                _context3.t1 = _context3.sent;
                return _context3.abrupt("return", _context3.t0.json.call(_context3.t0, _context3.t1));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAll(_x5, _x6) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }(),
    save: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var testemonials, newInstance;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                testemonials = database.testemonials;
                _context4.next = 3;
                return testemonials.create(req.body);

              case 3:
                newInstance = _context4.sent;
                return _context4.abrupt("return", res.status(httpStatus.CREATED).json(newInstance));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function save(_x7, _x8) {
        return _save.apply(this, arguments);
      }

      return save;
    }(),
    edit: function () {
      var _edit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var testemonials, post;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                testemonials = database.testemonials;
                _context5.next = 3;
                return testemonials.update(req.body, {
                  where: req.params
                });

              case 3:
                post = _context5.sent;
                return _context5.abrupt("return", res.status(httpStatus.CREATED).json(post));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function edit(_x9, _x10) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  };
};

module.exports = TestemonialController;
//# sourceMappingURL=testemonialController.js.map