"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  send: function () {
    var _send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, subject, contentHTML) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                _axios["default"].post('http://app1.iagentesmtp.com.br/api/v3/send/', {
                  "api_user": "contato@positivetreinamentos.com.br",
                  "api_key": "j9ir6b0v5jt5666m4339r1o2f56670el3701t4mc22l047ln9",
                  to: to,
                  "from": {
                    "name": "Positive Treinamentos",
                    "email": "contato@positivetreinamentos.com.br",
                    "reply_to": "positivetreinamentos@gmail.com"
                  },
                  subject: subject,
                  "html": contentHTML,
                  "addheaders": {
                    "x-priority": "1"
                  }
                }).then(function (response) {
                  console.log("Email enviado para <".concat(to[0], ">"));
                }, function (error) {
                  console.log(error);
                });
              } catch (err) {
                console.log(err.stack);
              }

              return _context.abrupt("return", {
                success: true
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function send(_x, _x2, _x3) {
      return _send.apply(this, arguments);
    }

    return send;
  }()
};
exports["default"] = _default;
//# sourceMappingURL=emailSender.js.map