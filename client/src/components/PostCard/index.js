import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import TimeAgo from 'react-time-ago';
import slugify from 'slugify';

import './styles.css';
import baseUrl from '../../util/baseUrl';

const PostCard = props => {
    const { post } = props;
 
    const date = new Date(post.createdAt);

    return (
        <Card className="post-card">
            <Card.Img src={`${baseUrl}/uploads/${post.img}`} variant="top" alt={post.title} />
            <Card.Body>
                <Row>
                    <Col><Card.Subtitle>Artigo</Card.Subtitle></Col>
                    <Col>
                        <div className="time">
                            <i className="far fa-clock"></i>
                            <TimeAgo date={date} timeStyle="round"/>
                        </div>
                    </Col>
                </Row>
                <Card.Title>{ post.title }</Card.Title>
                
            </Card.Body>
            <div className="button-container">
                <Link className="btn btn-primary" 
                    to={`blog/${post.id}/${slugify(post.title).toLowerCase()}`}>
                        <i>Ler este artigo <span style={{ marginLeft: '.25em' ,fontSize: '1.5em' }}>»</span></i>
                </Link>
            </div>
        </Card>
    );
};

export default PostCard;