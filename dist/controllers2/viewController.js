"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var httpStatus = require('http-status');

var ViewController = function ViewController(database) {
  return {
    getByPage: function () {
      var _getByPage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var views, total;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                views = database.views;
                _context.next = 3;
                return views.count(req.params);

              case 3:
                total = _context.sent;
                return _context.abrupt("return", res.status(200).json({
                  total: total
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getByPage(_x, _x2) {
        return _getByPage.apply(this, arguments);
      }

      return getByPage;
    }(),
    getAll: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var views;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                views = database.views;
                _context2.t0 = res.status(httpStatus.OK);
                _context2.next = 4;
                return views.count();

              case 4:
                _context2.t1 = _context2.sent;
                return _context2.abrupt("return", _context2.t0.json.call(_context2.t0, _context2.t1));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAll(_x3, _x4) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }(),
    save: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var views, newView, total;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                views = database.views;
                _context3.next = 3;
                return views.create(req.body);

              case 3:
                newView = _context3.sent;
                _context3.next = 6;
                return views.count({
                  where: req.params
                });

              case 6:
                total = _context3.sent;
                return _context3.abrupt("return", res.status(httpStatus.OK).json({
                  total: total
                }));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function save(_x5, _x6) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  };
};

module.exports = ViewController;
//# sourceMappingURL=viewController.js.map