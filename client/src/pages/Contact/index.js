import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import CustomNavbar from '../../components/CustomNavbar';
import ContactUs from '../../sections/ContactUs';
import Footer from '../../components/Footer';

import './styles.css';


class Contact extends React.Component {
    render () {
        return (
            <div className="page who-we-are d-flex flex-column">
                <Helmet>
                    <title>Positive Treinamentos - Entre em contato</title>
                </Helmet>

                <CustomNavbar />
                <Container fluid className="flex-grow-1 flex-shrink-0">
                    <CustomNavbar />
                    <ContactUs />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Contact;