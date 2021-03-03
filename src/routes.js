import express from 'express';

import database from './models';
import UserController from './controllers/users';
import SectionController from './controllers/sections';
import CourseController from './controllers/courses';
import PostController from './controllers/posts';

import emailSender from './util/email/emailSender';
import newMsgTemplate from './util/email/newMessageTemplate';

const router = express.Router();

// rota GET /api
router.get('/', (req, res) => { 
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

const usersCtrl = UserController(database);
router.get('/users', usersCtrl.list);
router.get('/users', usersCtrl.insert);
router.get('/users/:id', usersCtrl.index);
router.delete('/users/:id', usersCtrl.remove);
router.put('/users/:id', usersCtrl.edit);

const sectionsCtrl = SectionController(database);
router.get('/sections/:name', sectionsCtrl.getByName);
router.get('/sections/:name/:key', sectionsCtrl.index);

const coursesCtrl = CourseController(database);
router.get('/courses', coursesCtrl.list);
router.get('/courses/:id', coursesCtrl.index);

const postsCtrl = PostController(database);
router.get('/posts', postsCtrl.list);
router.get('/posts/:id', postsCtrl.index);

//const msgsCtrl = MessageController(database);
router.post('/messages', (req, res) => {
    console.log(req.body);
    const { name, email, whatsapp, content } = req.body;
    
    const to = [
        { 
            "name": "Positive Treinamentos",
            "email": 'positivetreinamentos@gmail.com'
        },{
            "name": "Matheus ",
            "email": 'webdev@matheusataide.com.br'
        }];

    emailSender.send(
        [to],
        "Recebemos uma nova mensagem no site",
        newMsgTemplate(name, email, whatsapp, content)
    );
    res.json({ status: true, content: '' })
});

export default router;