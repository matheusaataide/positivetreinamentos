"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var emailConfig = require('../config/emailConfig.json');

module.exports = {
  send: function () {
    var _send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, subject, contentHTML) {
      var api_user, api_key, reply_to, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              api_user = emailConfig.api_user, api_key = emailConfig.api_key, reply_to = emailConfig.reply_to;
              data = {
                api_user: api_user,
                api_key: api_key,
                to: to,
                from: {
                  name: "Positive Treinamentos",
                  email: api_user,
                  reply_to: reply_to
                },
                subject: subject,
                html: contentHTML,
                addheaders: {
                  "x-priority": "1"
                }
              };

              try {
                fetch('http://app1.iagentesmtp.com.br/api/v3/send', {
                  method: 'POST',
                  body: data
                }).then(function (res) {
                  console.log(res);
                });
              } catch (err) {
                console.log(err.stack);
              }

              return _context.abrupt("return", {
                success: true
              });

            case 4:
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
//# sourceMappingURL=emailSender.js.map