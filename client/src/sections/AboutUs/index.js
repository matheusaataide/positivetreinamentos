import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import './styles.css';
import ProfileCard from '../../components/ProfileCard';
import baseURL from '../../util/baseUrl';

class AboutUs extends React.Component {
    constructor (props) {
        super(props);

        this.state = { 
            users: [],
            limit: props.limit || 2, 
            offset: props.offset || 0 
        };
    }

    componentDidMount () {
        axios.get(`${baseURL}/api/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            }); 
    }

    render() {
        const { users } = this.state;
        return (
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
        );
    }
};

export default AboutUs;