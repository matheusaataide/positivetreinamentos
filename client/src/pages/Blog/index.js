import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import CustomNavbar from '../../components/CustomNavbar';
import Footer from '../../components/Footer';
import LearnTogether from '../../sections/LearnTogether';

class Blog extends React.Component {
    render () {
        return (
            <div className="page blog d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Blog</title>
                </Helmet>

                <CustomNavbar />
                <Container fluid className="flex-grow-1 flex-shrink-0">
                    <CustomNavbar />
                    <LearnTogether limit={4} />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Blog;