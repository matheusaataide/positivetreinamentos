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

var SectionController = function SectionController(database) {
  return {
    getByName: function () {
      var _getByName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var sections, list, section;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                sections = database.sections;
                _context.next = 4;
                return sections.findAll({
                  where: _objectSpread(_objectSpread({}, req.params), {}, {
                    status: true
                  }),
                  attributes: ['key', 'value']
                });

              case 4:
                list = _context.sent;
                section = {};
                list.forEach(function (item) {
                  section[item.key] = item.value;
                });
                return _context.abrupt("return", res.status(_httpStatus["default"].OK).json({
                  status: list !== [],
                  content: section
                }));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", res.status(_httpStatus["default"].INTERNAL_SERVER_ERROR).json({
                  status: false,
                  error: _context.t0.stack
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function getByName(_x, _x2) {
        return _getByName.apply(this, arguments);
      }

      return getByName;
    }(),
    index: function () {
      var _index = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var sections, _req$params, name, key, section;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                sections = database.sections;
                _req$params = req.params, name = _req$params.name, key = _req$params.key;
                _context2.next = 5;
                return sections.findOne({
                  where: {
                    name: name,
                    key: key
                  }
                });

              case 5:
                section = _context2.sent;
                return _context2.abrupt("return", res.status(_httpStatus["default"].OK).json({
                  status: section !== null,
                  content: section !== null ? section.value : ''
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
    edit: function () {
      var _edit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var sections, _req$params2, name, key, oldData, _yield$sections$updat, _yield$sections$updat2, flag, newData;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                sections = database.sections;
                _req$params2 = req.params, name = _req$params2.name, key = _req$params2.key;
                _context3.next = 5;
                return sections.findOne({
                  where: {
                    name: name,
                    key: key
                  }
                });

              case 5:
                oldData = _context3.sent;

                if (!(oldData === null)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", res.status(_httpStatus["default"].BAD_REQUEST).json({
                  status: false,
                  msg: 'Instance not found.'
                }));

              case 8:
                if (key === "img" && req.file) {
                  if (oldData.value !== null && oldData.value !== "") {
                    _fs["default"].unlink(_path["default"].join(__dirname, '..', 'uploads', oldData.value), function (err) {
                      if (err) console.error(err.stack);
                    });
                  }
                }

                _context3.next = 11;
                return sections.update(_objectSpread(_objectSpread(_objectSpread({}, oldData), req.body), {}, {
                  value: req.file ? req.file.filename : oldData.value
                }), {
                  where: req.params
                });

              case 11:
                _yield$sections$updat = _context3.sent;
                _yield$sections$updat2 = _slicedToArray(_yield$sections$updat, 1);
                flag = _yield$sections$updat2[0];
                _context3.next = 16;
                return sections.findByPk(id);

              case 16:
                newData = _context3.sent;
                return _context3.abrupt("return", res.status(_httpStatus["default"].CREATED).json({
                  status: flag === 1,
                  content: newData
                }));

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                return _context3.abrupt("return", res.status(_httpStatus["default"].INTERNAL_SERVER_ERROR).json({
                  status: false,
                  error: _context3.t0.stack
                }));

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 20]]);
      }));

      function edit(_x5, _x6) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  };
};

var _default = SectionController;
exports["default"] = _default;
//# sourceMappingURL=sections.js.map