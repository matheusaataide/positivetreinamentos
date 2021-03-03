import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';
import htmlParser from 'react-html-parser';

import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import BackToTopButton from '../../components/BackToTopButton';
import Footer from '../../components/Footer';
import baseURL from '../../util/baseUrl';
import loadData from '../../util/loadData';

import './styles.css';

const WhoWeAre = () => {
    const [ourStory, setOurStory] = useState({});
    const [weBelieve, setWeBelieve] = useState({});
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        loadData('/sections/our-story', setOurStory);
        loadData('/sections/we-believe', setWeBelieve);
        loadData('/users', setUsers);
    }, []);

    const { text } = ourStory;
    const { img } = weBelieve;

    return (
    <div id="top" className="page who-we-are d-flex flex-column">
        <Helmet>
            <title>Positive Treinamentos - Quem somos</title>
        </Helmet>

        <Navbar />
        <Container className="flex-grow-1 flex-shrink-0">
            <Row>
                <Col style={{ textAlign: 'justify' }}>
                    <h1 className="page-title">Quem somos nós</h1>
                    <Image 
                        className="img-hero"
                        src={`${baseURL}/uploads/${ img }`} 
                        alt="Rafael e Patrícia" />
                    <div class="content">
                        { htmlParser(text) }
                    </div>      
                </Col>
            </Row>
            <section className="page-section">
                <Row>
                    <h2 className="section-title">Estamos prontos para te ajudar</h2>
                </Row>
                <Row>
                    { users.map((user, index) => (
                        <Col key={index}
                            xs={12}
                            lg={{ span: 5, offset: index === 0 ? 1 : 0 }}>
                            <ProfileCard user={user} />
                        </Col>
                    ))}
                </Row>
            </section>
            <BackToTopButton />
        </Container>
        <Footer />
    </div>
    );
}

export default WhoWeAre;