import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import loadData from '../../util/loadData';

import './styles.css';
import ImageCartoonPatricia from '../../assets/img/caricaturas/patricia.png';

const Schedule = props => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        loadData('/courses', setCourses);
    }, []);

    return (
    <div className="page schedule d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Agenda</title>
        </Helmet>

        <Navbar />
        <Container  className="flex-grow-1 flex-shrink-0">
            <Row>
                <Col>
                    <h2 className="page-title">Próximos eventos</h2>
                </Col>
            </Row>
            <Row>
                <Col className={`has-${courses.length} pt-5` }>
                { 
                    courses.map(course => {
                        return (
                            <Col key={ course.id }>
                                <CourseCard course={course} />
                            </Col>
                        );
                    })
                }
                </Col>
                <Col style={{ textAlign: 'center', paddingLeft: '10em'}}>
                <Image className="img-fluid cartoon" 
                    src={ImageCartoonPatricia}
                    alt="Caricatura de Patrícia" />
                </Col>
            </Row>
            </Container>
        <Footer />
    </div>
    );
}

export default Schedule;