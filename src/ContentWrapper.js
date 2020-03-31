import React from 'react';
import { Col } from 'react-bootstrap'
import AppNavbar from './AppNavbar'
import Footer from './Footer'

const ContentWrapper = ({ children }) => (
	<div className = "content-wrapper">
		<AppNavbar/>
			<Col md={{offset:2, span:8}}>
				{ children }
			</Col>
		<Footer/>
	</div>
)

export default ContentWrapper