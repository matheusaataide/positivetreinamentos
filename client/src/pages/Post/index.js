import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';
import parseHtml from 'react-html-parser';
import slugify from 'slugify';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';
import loadData from '../../util/loadData';

import './styles.css';

const Post = props => {
    const [post, setPost] = useState({ title: '' });

    const { id } = useParams();

    useEffect(() => {
        loadData(`/posts/${ id }`, setPost);
    }, []);

    return (
        <div className="page post d-flex flex-column">
            <Helmet>
                <title>Positive Treinamentos - Blog - {post.title}</title>
            </Helmet>

            <Navbar />
            <Container className="content flex-grow-1 flex-shrink-0">
                <Row>
                    <Col style={{ textAlign: 'justify' }}>
                        <h2 className="page-subtitle">Artigo</h2>
                        <h1 className="page-title">{post.title}</h1>
                        <div className="info">
                            Por Positive Treinamentos, há um mês
                        </div>
                        
                        <Image fluid
                            className="post-image"
                            src={`${baseURL}/uploads/${post.image}`} 
                            alt={post.title} />
                        <div>{ parseHtml(post.content) }</div>           
                    </Col>
                </Row>
                <Row style={{ marginTop: '3em' }}>
                    <hr />
                    <div className="clearfix text-center" style={{width: '100%'}}>
                        <Link 
                            className={`btn btn-primary`}
                            to={`/blog`}>
                                <i className="fas fa-chevron-left mr-2"></i> Voltar 
                        </Link>
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Post;