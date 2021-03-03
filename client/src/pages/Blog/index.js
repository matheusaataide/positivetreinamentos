import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap'; 

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import loadData from '../../util/loadData';

const Blog = props => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadData('/posts', setPosts);
    }, []);

    return (
    <div className="page blog d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Blog</title>
        </Helmet>

        <Navbar />
            
        <section className="page-section learn-together">
            <Container className="flex-grow-1 flex-shrink-0">
                <Row>
                    <Col>
                        <h2 className="section-title text-left">Vamos aprender juntos?</h2>
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
       
        <Footer />
    </div>
    );
}

export default Blog;