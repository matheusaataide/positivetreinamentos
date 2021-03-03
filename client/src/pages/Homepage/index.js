import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import htmlParser from 'react-html-parser';
import axios from 'axios';

import baseUrl from '../../util/baseUrl';
import loadData from '../../util/loadData';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import ProfileCard from '../../components/ProfileCard';
import PostCard from '../../components/PostCard';
import BackToTop from '../../components/BackToTopButton';

import './styles.css';

const pristineForm = {
    name: '',
    email: '',
    whatsapp: '',
    content: '',
    helpText: ''
};

const Homepage = () => {
    const [intro, setIntro] = useState({});
    const [weBelieve, setWeBelieve] = useState({});
    const [courses, setCourses] = useState([]);
    const [ourStory, setOurStory] = useState({});
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [form, setForm] = useState(pristineForm);

    useEffect(() => {
        loadData('/sections/intro', setIntro);
        loadData('/sections/we-believe', setWeBelieve);
        loadData('/courses', setCourses);
        loadData('/sections/our-story', setOurStory);
        loadData('/users', setUsers);
        loadData('/posts', setPosts);
    }, []);

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const sendData = async e => {
        e.preventDefault();
    
        axios.post(`${baseUrl}/api/messages`, form)
            .then(res => {
                try {
                    const { status, content } = res.data;
                    if (status) setForm({
                        ...pristineForm,
                        helpText: 'Mensagem enviada com sucesso!'
                    });

                    setTimeout(() => {
                        setForm(pristineForm)
                    }, 3000);
                } catch (err) {
                    console.error(err);
                    setForm({
                        ...form,
                        helpText: 'Não conseguimos enviar no momento!'
                    });
                }
            });
    };

    return <div id="homepage" className="page homepage">
        <Navbar />

        <BackToTop />

        <header id="header" className="header">
			<div className="header-content">
				<Container>
					<Row>
						<Col sm={12} lg={6}>
							<div className="text-container">
                                <h1>{ htmlParser(intro.title) }</h1>
								<div className="text">
									{ htmlParser(intro.text) }
								</div>
							</div>
						</Col>
						<Col sm={12} lg={6}>
							<div className="image-container">
								<Image fluid 
									src={ `${baseUrl}/uploads/${intro.img}` } 
									alt="Família Positive" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</header>

        <section className="page-section we-believe" id="we-believe">
			<Container>
				<Row>
					<Col xs={12} lg={6}>
						<div className="image-absolute-box">
							<div className="box wow fadeInUp">
								<div className="icon-wrap"><span className="flaticon-vector"></span></div>
								
							</div>
                            <Image fluid 
                                src={`${baseUrl}/uploads/${weBelieve.img}`} 
                                alt="Em que acreditamos" 
                            />
						</div>
					</Col>
					<Col xs={12} lg={6}>
						<div className="mb-5">
							<span className="section-subtitle d-block">No que acreditamos</span>
							<h2 className="section-title">{ weBelieve.title }</h2>
							{ htmlParser(weBelieve.text) }	
						</div>					
					</Col>
				</Row>
			</Container>
        </section>

        <section className="page-section schedule" id="schedule">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title">Próximos eventos</h2>
                    </Col>
                </Row>
                <Row className={`has-${courses.length}` }>
                { 
                    courses.map(course => {
                        return (
                            <Col key={ course.id }>
                                <CourseCard course={course} />
                            </Col>
                        );
                    })
                }
                </Row>
            </Container>
        </section>

        <section className="page-section our-story" id="our-story">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <Image className="img-fluid cartoon" 
                            src={`${baseUrl}/uploads/caricatura-rafael.png`}
                            alt="Caricatura de Rafael" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="text-center h-100">
                            <div className="d-flex h-100">
                                <div className="transform-text w-100 text-center text-lg-left">
                                    <h2 className="section-title">Nossa história</h2>
                                    <div className="content">
                                        { htmlParser(ourStory.text) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="page-section about-us" id="about-us">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title">Quem somos nós</h2>
                    </Col>
                </Row>
                <Row>
                {
                    users.map((user, index) => {
                        return (
                        <Col key={index}>
                            <ProfileCard user={user} />
                        </Col>
                        );
                    })
                }
                </Row>
            </Container>
        </section>

        <section className="page-section learn-together">
            <Container>
                <Row>
                    <Col>
                        <h2 className="section-title">Vamos aprender juntos?</h2>
                    </Col>
                </Row>
                <Row>
                    { posts.map(post => (
                        <Col key={post.id} >
                            <PostCard post={post} />
                        </Col>
                    )) }
                </Row>
            </Container>
        </section>

        <section className="contact-us page-section bg-primary">
            <Container>
                <div className="section-wrapper">
                    <Row>
                        <Col xs={12} lg={{ span: 6, offset: 2}}>
                            <div className="form-container">
                                <h2 className="section-title">Fale conosco</h2>
                                <Form onSubmit={sendData}>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-name" className="label-control">Nome</Form.Label>
                                        <Form.Control required
                                            type="text"
                                            className="form-control-input" 
                                            id="contact-name" 
                                            name="name"
                                            placeholder="Seu nome" 
                                            value={form.name}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-email" className="label-control">E-mail</Form.Label>
                                        <Form.Control required
                                            type="email" 
                                            className="form-control-input" 
                                            id="contact-email" 
                                            name="email" 
                                            placeholder="Seu email"
                                            value={form.email}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-phone" className="label-control">Número de telefone</Form.Label>
                                        <Form.Control required
                                            type="text" 
                                            className="form-control-input" 
                                            id="contact-phone" 
                                            name="whatsapp"
                                            placeholder="Seu número de telefone/whatsapp"
                                            value={form.whatsapp}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="contact-msg" className="label-control">Mensagem</Form.Label>
                                        <Form.Control required 
                                            as="textarea"
                                            className="form-control-textarea" 
                                            id="msg" 
                                            name="content" 
                                            rows={3} 
                                            placeholder="Digite a mensagem..."
                                            value={form.content}
                                            onChange={updateField}
                                            />
                                    </Form.Group>
                                    <div className="form-group">
                                        <Button
                                            type="submit" 
                                            className="form-control-submit-button"
                                            style={{
                                                marginTop: '2em'
                                            }}>
                                                Enviar
                                        </Button>
                                    </div>
                                    <div className="form-message">
                                        <div id="contact-msgSubmit" className="h3 text-center">
                                            { form.helpText }
                                        </div>
                                    </div>
                                </Form>
                            </div> 
                        </Col>
                        <Col lg={3}>
                            <Image className="img-fluid cartoon" 
                                src={`${baseUrl}/uploads/caricatura-patricia.png`}
                                alt="Caricatura de Patrícia" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>

        <Footer />
    </div>;
};

export default Homepage;