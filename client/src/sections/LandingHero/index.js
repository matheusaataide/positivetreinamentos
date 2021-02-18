import React from 'react';
import axios from 'axios';
import htmlParser from 'react-html-parser';
import _ from 'lodash';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './styles.css';
import baseURL from '../../util/baseUrl';

class LandingHero extends React.Component {
	constructor (props) {
        super(props);

        this.state = {
			img: '', 
			title: '',
            text: ''
        };
    }

    componentDidMount () {
        axios.get(`${baseURL}/api/sections/intro/img`)
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					img: _.head(infos).value
				 });
			}); 
        axios.get(`${baseURL}/api/sections/intro/text`)
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					text: _.head(infos).value
				 });
			});
		axios.get(`${baseURL}/api/sections/intro/title`)
            .then(res => {
				const infos = res.data;

                this.setState({ 
					...this.state,
					title: _.head(infos).value
				 });
			});
    }
    
    render() {
        const { title, text, img } = this.state;

        return (
            <header id="header" className="header">
                <div className="header-content">
                    <Container>
                        <Row>
                            <Col sm={12} lg={6}>
                                <div className="text-container">
                                    <h1>{ htmlParser(title) }</h1>
                                    <div className="text">{ htmlParser(text) }</div>
                                </div>
                            </Col>
                            <Col sm={12} lg={6}>
                                <div className="image-container">
                                    <Image fluid src={ img } alt="Família Positive" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        );
    }
};

export default LandingHero;