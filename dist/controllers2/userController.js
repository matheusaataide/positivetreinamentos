"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var httpStatus = require('http-status');

var path = require('path');

var fs = require('fs');

var security = require('../util/security');

var UserController = function UserController(database) {
  return {
    "delete": function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var users, user, flag;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                users = database.users;
                _context.next = 4;
                return users.findByPk(req.params.id);

              case 4:
                user = _context.sent;

                if (!(user === null)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(httpStatus.BAD_REQUEST).json({
                  success: false,
                  msg: 'Instance not found.'
                }));

              case 7:
                if (user.profilePic !== null && user.profilePic !== "") {
                  fs.unlink(path.join(__dirname, '..', 'uploads', user.profilePic), function (err) {
                    if (err) console.error(err.stack);
                  });
                }

                _context.next = 10;
                return users.destroy({
                  where: req.params
                });

              case 10:
                flag = _context.sent;
                return _context.abrupt("return", res.status(httpStatus.OK).json({
                  success: true,
                  data: user
                }));

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                  success: false,
                  msg: 'Internal server error.'
                }));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      function _delete(_x, _x2) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }(),
    get: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var users, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                users = database.users;
                _context2.next = 3;
                return users.findByPk(req.params.id);

              case 3:
                user = _context2.sent;
                return _context2.abrupt("return", res.status(httpStatus.OK).json(user));

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
        var users, graduations, list;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                users = database.users, graduations = database.graduations;
                _context3.next = 3;
                return users.findAll({
                  include: [{
                    model: graduations,
                    order: [['createdAt', 'ASC']]
                  }]
                });

              case 3:
                list = _context3.sent;
                return _context3.abrupt("return", res.status(httpStatus.OK).json(list));

              case 5:
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
        var users, newUser;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                users = database.users;
                newUser = _objectSpread(_objectSpread({}, req.body), {}, {
                  profilePic: req.file ? req.file.filename : ''
                });
                _context4.next = 4;
                return users.create(newUser);

              case 4:
                newUser = _context4.sent;
                return _context4.abrupt("return", res.status(httpStatus.CREATED).json(newUser));

              case 6:
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
        var users, oldData, result, newData;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                users = database.users;
                _context5.next = 4;
                return users.findByPk(req.params.id);

              case 4:
                oldData = _context5.sent;

                if (!(oldData === null)) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", res.status(httpStatus.BAD_REQUEST).json({
                  success: false,
                  msg: 'Instance not found.'
                }));

              case 7:
                if (req.file) {
                  if (oldData.profilePic !== null && oldData.profilePic !== "") {
                    fs.unlink(path.join(__dirname, '..', 'uploads', oldData.profilePic), function (err) {
                      if (err) console.error(err.stack);
                    });
                  }
                }

                _context5.next = 10;
                return users.update(_objectSpread(_objectSpread(_objectSpread({}, oldData), req.body), {}, {
                  profilePic: req.file ? req.file.filename : oldData.profilePic
                }), {
                  where: req.params
                });

              case 10:
                result = _context5.sent;
                _context5.next = 13;
                return users.findByPk(req.params.id);

              case 13:
                newData = _context5.sent;
                return _context5.abrupt("return", res.status(httpStatus.CREATED).json({
                  success: result[0] === 1,
                  data: newData
                }));

              case 17:
                _context5.prev = 17;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);
                return _context5.abrupt("return", res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                  success: false,
                  msg: 'Internal server error'
                }));

              case 21:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 17]]);
      }));

      function edit(_x9, _x10) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }(),
    // Funcão responsável pela autenticação
    login: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var users, _req$body, username, password, user;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                users = database.users;
                _req$body = req.body, username = _req$body.username, password = _req$body.password;
                _context6.next = 4;
                return users.findOne({
                  where: {
                    username: username
                  }
                });

              case 4:
                user = _context6.sent;

                if (!(user === null)) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", res.status(httpStatus.BAD_REQUEST).json({
                  auth: false
                }));

              case 7:
                return _context6.abrupt("return", res.status(httpStatus.OK).json(security.login(user, password)));

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function login(_x11, _x12) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  };
};

module.exports = UserController;
//# sourceMappingURL=userController.js.map