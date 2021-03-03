"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpStatus = _interopRequireDefault(require("http-status"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UserController = function UserController(database) {
  return {
    list: function () {
      var _list = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var users, graduations, _list2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                users = database.users, graduations = database.graduations;
                _context.next = 4;
                return users.findAll({
                  include: [{
                    model: graduations
                  }]
                });

              case 4:
                _list2 = _context.sent;
                return _context.abrupt("return", res.status(_httpStatus["default"].OK).json({
                  status: true,
                  content: _list2
                }));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", res.status(_httpStatus["default"].INTERNAL_SERVER_ERROR).json({
                  status: false,
                  error: _context.t0.stack
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function list(_x, _x2) {
        return _list.apply(this, arguments);
      }

      return list;
    }(),
    index: function () {
      var _index = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var users, graduations, id, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                users = database.users, graduations = database.graduations;
                id = req.params.id;
                _context2.next = 5;
                return users.findByPk(id, {
                  include: [{
                    model: graduations
                  }]
                });

              case 5:
                user = _context2.sent;
                return _context2.abrupt("return", res.status(_httpStatus["default"].OK).json({
                  status: user !== null,
                  content: user
                }));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                return _context2.abrupt("return", res.status(_httpStatus["default"].INTERNAL_SERVER_ERROR).json({
                  status: false,
                  error: _context2.t0.stack
                }));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function index(_x3, _x4) {
        return _index.apply(this, arguments);
      }

      return index;
    }(),
    remove: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var users, id, user, flag;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                users = database.users;
                id = req.params.id;
                _context3.next = 5;
                return users.findByPk(id);

              case 5:
                user = _context3.sent;

                if (!(user === null)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", res.status(_httpStatus["default"].BAD_REQUEST).json({
                  status: false,
                  content: {}
                }));

              case 8:
                _context3.next = 10;
                return users.destroy({
                  where: {
                    id: id
                  }
                });

              case 10:
                flag = _context3.sent;

                if (user.photo !== null && user.photo !== "") {
                  _fs["default"].unlink(_path["default"].join(__dirname, '..', 'uploads', user.photo), function (err) {
                    if (err) console.error(err.stack);
                  });
                }

                return _context3.abrupt("return", res.status(_httpStatus["default"].OK).json({
                  status: flag === 1,
                  content: user
                }));

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                return _context3.abrupt("return", res.status(_httpStatus["default"].INTERNAL_SERVER_ERROR).json({
                  status: false,
                  error: _context3.t0.stack
                }));

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }));

      function remove(_x5, _x6) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }(),
    insert: function () {
      var _insert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var users, newUser, user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                users = database.users;
                newUser = _objectSpread(_objectSpread({}, req.body), {}, {
                  profile_pic: req.file ? req.file.filename : ''
                });
                _context4.next = 5;
                return users.create(newUser);

              case 5:
                user = _context4.sent;
                return _context4.abrupt("return", res.status(_httpStatus["default"].OK).json({
                  status: true,
                  content: user
                }));

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                return _context4.abrupt("return", res.status(_httpStatus["default"].INTERNAL_SERVER_ERROR).json({
                  status: false,
                  error: _context4.t0.stack
                }));

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function insert(_x7, _x8) {
        return _insert.apply(this, arguments);
      }

      return insert;
    }(),
    edit: function () {
      var _edit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var users, id, oldData, _yield$users$update, _yield$users$update2, flag, newData;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                users = database.users;
                id = req.params.id;
                _context5.next = 5;
                return users.findByPk(id);

              case 5:
                oldData = _context5.sent;

                if (!(oldData === null)) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return", res.status(_httpStatus["default"].BAD_REQUEST).json({
                  status: false,
                  msg: 'Instance not found.'
                }));

              case 8:
                if (req.file) {
                  if (oldData.photo !== null && oldData.photo !== "") {
                    _fs["default"].unlink(_path["default"].join(__dirname, '..', 'uploads', oldData.photo), function (err) {
                      if (err) console.error(err.stack);
                    });
                  }
                }

                _context5.next = 11;
                return users.update(_objectSpread(_objectSpread(_objectSpread({}, oldData), req.body), {}, {
                  photo: req.file ? req.file.filename : oldData.photo
                }), {
                  where: req.params
                });

              case 11:
                _yield$users$update = _context5.sent;
                _yield$users$update2 = _slicedToArray(_yield$users$update, 1);
                flag = _yield$users$update2[0];
                _context5.next = 16;
                return users.findByPk(id);

              case 16:
                newData = _context5.sent;
                return _context5.abrupt("return", res.status(_httpStatus["default"].CREATED).json({
                  status: flag === 1,
                  content: newData
                }));

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);
                return _context5.abrupt("return", res.status(_httpStatus["default"].INTERNAL_SERVER_ERROR).json({
                  status: false,
                  error: _context5.t0.stack
                }));

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 20]]);
      }));

      function edit(_x9, _x10) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  };
};

var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=users.js.map