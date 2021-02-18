const Express = require('express');
const multer = require('multer');

const database = require('./models');
const UserController = require('./controllers/userController');
const PostController = require('./controllers/postController');
const TestemonialController = require('./controllers/testemonialController');
const CourseController = require('./controllers/courseController');
const SectionController = require('./controllers/sectionController');
const ViewController = require('./controllers/viewController');
const MessageController = require('./controllers/messageController');
const security = require('./util/security');
const uploadConfig = require('./config/uploadConfig');
const MIMETYPES = require('./util/mimetypes.json');

const router = Express.Router();

// GET /api
router.get('/', (req, res) => { 
    res.json({
        "app": "Positive Treinamentos",
        "url": "http://www.positivetreinamentos.com.br/",
        "developer": {
            "name": "Matheus Ataide",
            "email": "webdev@matheusataide.com.br",
            "website": "http://matheusataide.com.br/"
        }
    });
});

const usersCtrl = UserController(database);
router.get('/users/:id', usersCtrl.get);
router.get('/users', usersCtrl.getAll);
let username = '';
router.post('/users', 
            security.authenticate,
            multer(uploadConfig(MIMETYPES.images)).single('profilePic'),
            usersCtrl.save);
router.put('/users/:id',
            security.authenticate,
            multer(uploadConfig(MIMETYPES.images)).single('profilePic'),
            usersCtrl.edit);
router.delete('/users/:id', usersCtrl.delete);
router.post('/login', usersCtrl.login);

const postsCtrl = PostController(database);
router.get('/posts/:id', postsCtrl.get);
router.get('/posts', postsCtrl.getAll);
router.post('/posts', postsCtrl.save);
router.put('/posts/:id', postsCtrl.edit);
router.delete('/posts/:id', postsCtrl.delete);

const testemonialsCtrl = TestemonialController(database);
router.get('/testemonials/:id', testemonialsCtrl.get);
router.get('/testemonials', testemonialsCtrl.getAll);
router.post('/testemonials', testemonialsCtrl.save);
router.put('/testemonials/:id', testemonialsCtrl.edit);
router.delete('/testemonials/:id', testemonialsCtrl.delete);

const coursesCtrl = CourseController(database);
router.get('/courses/:id', coursesCtrl.get);
router.get('/courses', coursesCtrl.getAll);
router.post('/courses',
            security.authenticate,
            multer(uploadConfig(MIMETYPES.images)).single('img'),            
            coursesCtrl.save);
router.put('/courses/:id', coursesCtrl.edit);
router.delete('/courses/:id', coursesCtrl.delete);

const sectionsCtrl = SectionController(database);
router.get('/sections/:sectionName/:key', sectionsCtrl.get);
router.post('/sections', sectionsCtrl.save);
router.put('/sections/:id', sectionsCtrl.edit);
router.delete('/sections/:id', sectionsCtrl.delete);

const viewsCtrl = ViewController(database);
router.get('/views/:pageType/:pageId', viewsCtrl.getByPage);
router.get('/views', viewsCtrl.getAll);
router.post('/views/:pageType/:pageId', viewsCtrl.save);

const messagesCtrl = MessageController(database);
router.get('/messages/:id', messagesCtrl.get);
router.get('/messages', messagesCtrl.getAll);
router.post('/messages', messagesCtrl.save);
router.put('/messages/:id', messagesCtrl.edit);
router.delete('/messages/:id', messagesCtrl.delete);

module.exports = router;    