"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("./models"));

var _users = _interopRequireDefault(require("./controllers/users"));

var _sections = _interopRequireDefault(require("./controllers/sections"));

var _courses = _interopRequireDefault(require("./controllers/courses"));

var _posts = _interopRequireDefault(require("./controllers/posts"));

var _emailSender = _interopRequireDefault(require("./util/email/emailSender"));

var _newMessageTemplate = _interopRequireDefault(require("./util/email/newMessageTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // rota GET /api


router.get('/', function (req, res) {
  res.status(200).json({
    "app": "Positive Treinamentos",
    "url": "http://www.positivetreinamentos.com.br/",
    "developer": {
      "name": "Matheus Ataide",
      "email": "webdev@matheusataide.com.br",
      "website": "http://matheusataide.com.br/"
    }
  });
});
var usersCtrl = (0, _users["default"])(_models["default"]);
router.get('/users', usersCtrl.list);
router.get('/users', usersCtrl.insert);
router.get('/users/:id', usersCtrl.index);
router["delete"]('/users/:id', usersCtrl.remove);
router.put('/users/:id', usersCtrl.edit);
var sectionsCtrl = (0, _sections["default"])(_models["default"]);
router.get('/sections/:name', sectionsCtrl.getByName);
router.get('/sections/:name/:key', sectionsCtrl.index);
var coursesCtrl = (0, _courses["default"])(_models["default"]);
router.get('/courses', coursesCtrl.list);
router.get('/courses/:id', coursesCtrl.index);
var postsCtrl = (0, _posts["default"])(_models["default"]);
router.get('/posts', postsCtrl.list);
router.get('/posts/:id', postsCtrl.index); //const msgsCtrl = MessageController(database);

router.post('/messages', function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      whatsapp = _req$body.whatsapp,
      content = _req$body.content;
  var to = [{
    "name": "Positive Treinamentos",
    "email": 'positivetreinamentos@gmail.com'
  }, {
    "name": "Matheus ",
    "email": 'webdev@matheusataide.com.br'
  }];

  _emailSender["default"].send(to, "Recebemos uma nova mensagem no site", (0, _newMessageTemplate["default"])(name, email, whatsapp, content));

  res.json({
    status: true,
    content: ''
  });
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map