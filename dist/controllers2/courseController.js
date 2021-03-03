"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var httpStatus = require('http-status');

var CourseController = function CourseController(database) {
  return {
    "delete": function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var courses, flag;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                courses = database.courses;
                _context.next = 4;
                return courses.destroy({
                  where: req.params
                });

              case 4:
                flag = _context.sent;
                return _context.abrupt("return", res.status(flag ? httpStatus.OK : httpStatus.BAD_REQUEST).json({
                  success: flag
                }));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                  msg: "Error: We can't delete this course!",
                  error: _context.t0
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function _delete(_x, _x2) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }(),
    get: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var courses, course;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                courses = database.courses;
                _context2.next = 4;
                return courses.findByPk(req.params.id);

              case 4:
                course = _context2.sent;

                if (!(course == null)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.status(httpStatus.BAD_REQUEST).json({
                  msg: "We can't find a course with this id!",
                  data: null
                }));

              case 7:
                return _context2.abrupt("return", res.status(httpStatus.OK).json(course));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                  msg: "Error: We can't recover this course!",
                  error: _context2.t0
                }));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));

      function get(_x3, _x4) {
        return _get.apply(this, arguments);
      }

      return get;
    }(),
    getAll: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var courses, transformations, _req$query, limit, offset, list;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                courses = database.courses, transformations = database.transformations;
                _req$query = req.query, limit = _req$query.limit, offset = _req$query.offset;
                _context3.next = 5;
                return courses.findAll({
                  order: [['created_at', 'DESC']],
                  limit: limit || 3,
                  offset: offset || 0,
                  include: [{
                    model: transformations
                  }]
                });

              case 5:
                list = _context3.sent;
                return _context3.abrupt("return", res.status(httpStatus.OK).json(list));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                  msg: "Error: We can't list the courses!",
                  error: _context3.t0
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function getAll(_x5, _x6) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }(),
    save: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var courses, data, newInstance;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                courses = database.courses;
                data = _objectSpread(_objectSpread({}, req.body), {}, {
                  img: req.file ? req.file.filename : '',
                  createdById: req.userId,
                  updatedById: req.userId
                });
                _context4.next = 5;
                return courses.create(data);

              case 5:
                newInstance = _context4.sent;
                return _context4.abrupt("return", res.status(httpStatus.CREATED).json(newInstance));

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                  msg: "Error: We can't save this course!",
                  error: _context4.t0
                }));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function save(_x7, _x8) {
        return _save.apply(this, arguments);
      }

      return save;
    }(),
    edit: function () {
      var _edit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var courses, course;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                courses = database.courses;
                _context5.next = 4;
                return courses.update(req.body, {
                  where: req.params
                });

              case 4:
                course = _context5.sent;
                return _context5.abrupt("return", res.status(httpStatus.CREATED).json(course));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                  msg: "Error: We can't update this course!",
                  error: _context5.t0
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function edit(_x9, _x10) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  };
};

module.exports = CourseController;
//# sourceMappingURL=courseController.js.map