import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';

import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import NextEvents from '../../sections/NextEvents';
import baseURL from '../../util/baseUrl';

import './styles.css';
import ImageCartoonPatricia from '../../assets/img/caricaturas/patricia.png';


class Blog extends React.Component {
    render () {
        return (
            <div className="page schedule d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Agenda</title>
                </Helmet>

                <CustomNavbar shrink />
                <Container  className="flex-grow-1 flex-shrink-0">
                    <Row>
                        <Col>
                            <h2 className="page-title">Próximos eventos</h2>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            <NextEvents />
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
}

export default Blog;