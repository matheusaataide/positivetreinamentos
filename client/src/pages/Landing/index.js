import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import htmlParser from 'react-html-parser';

import Navbar from '../../components/CustomNavbar';
import WeBelieve from '../../sections/WeBelieve';
import OurStory from '../../sections/OurStory';
import AboutUs from "../../sections/AboutUs";
import LearnTogether from "../../sections/LearnTogether";
import NextEvents from "../../sections/NextEvents";
import ContactUs from "../../sections/ContactUs";
import Footer from "../../components/Footer";

import './styles.css';
import baseURL from "../../util/baseUrl";
import axios from "axios";

import heroImg from '../../assets/img/photos/familia-positive.jpg';

const Landing = () => (
	<div id="landing-page" className="page landing-page">
		<Navbar shrink />

		<header id="header" className="header">
			<div className="header-content">
				<Container>
					<Row>
						<Col sm={12} lg={6}>
							<div className="text-container">
								<h1><span className="turquoise">Conhecimento</span> e <span className="turquoise">transformação</span><br />para vida toda!</h1>
								<div className="text">
									<p className="p-large">Estamos completamente comprometidos em construir, junto com você, 
									famílias mais estruturada e relacionamentos mais próximos entre pais, filhos e escola, 
									criando ambientes mais harmoniosos e encorajadores, e assim, uma sociedade melhor e mais positiva.
									</p>
								</div>
							</div>
						</Col>
						<Col sm={12} lg={6}>
							<div className="image-container">
								<Image fluid 
									src={heroImg} 
									alt="Família Positive" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</header>

		<WeBelieve />
		
		<Row>
			<Col>
				<h2 className="section-title">Próximos eventos</h2>
			</Col>
		</Row>
		<NextEvents />
		
		<OurStory />
		<AboutUs />
		<LearnTogether />
		<div className="bg-primary">
			
		<ContactUs />
		</div>
		<Footer />
	</div>
	);

export default Landing;