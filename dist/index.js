"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

require("regenerator-runtime");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
var pathEnv = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

_dotenv["default"].config({
  path: _path["default"].resolve(__dirname, '..', pathEnv)
}); // middlewares


server.use(_bodyParser["default"].urlencoded({
  limit: '25mb',
  extended: true
}), _bodyParser["default"].json(), (0, _cors["default"])(), (0, _morgan["default"])(process.env.NODE_ENV === "development" ? "dev" : "combined"), function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); // Disponibilizando API

server.use('/api', _routes["default"]); // Front end

var baseDir = "".concat(__dirname, "/../client/build/");
server.use(_express["default"]["static"]("".concat(baseDir)));
server.use('/uploads', _express["default"]["static"]('./uploads'));
server.get('/', function (req, res) {
  return res.sendFile('index.html', {
    root: baseDir
  });
});
server.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: baseDir
  });
});
var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log("[".concat(process.env.NODE_ENV.toUpperCase(), "] Server is running on ").concat(process.env.HOST, ":").concat(port));
});
var _default = server;
exports["default"] = _default;
//# sourceMappingURL=index.js.map