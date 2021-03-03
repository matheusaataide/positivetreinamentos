import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import slugify from 'slugify';

import './styles.css';
import img from '../../assets/img/workshops/para-pais.png';

const CourseCard = props => {
    const course = props.course;
    return (
        <Card className="course-card">
            <Card.Img 
                src={img} 
                variant="top" 
                alt={ course.title } />
            <Card.Body>
                <Card.Subtitle>Evento</Card.Subtitle>
                <Card.Title>{ course.title }</Card.Title>
                <p>
                    <i className="fas fa-map-marker-alt" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                    <span>{ course.location }</span>
                </p>
                <p>
                    <i className="fas fa-calendar" style={{ marginRight: '.65em', color: '#2ba2cc' }}></i> 
                    <span>{ format(
                                parseISO(course.date),
                                "dd' 'MMM', às 'HH:mm'h'",
                                { locale: ptBr })
                            }</span>
                </p>
            </Card.Body>
            <div className="button-container">
                <Link className="btn btn-primary" 
                    to={`agenda/${course.id}/${slugify(course.title)}`}>
                        Saber mais <span style={{ marginLeft: '.25em' ,fontSize: '1.5em' }}>»</span>
                </Link>
            </div>
        </Card>
    );
};

export default CourseCard;