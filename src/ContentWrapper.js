import React, { Component } from 'react';
import RestaurantDetail from './RestaurantDetail';
import { Row, Col } from 'react-bootstrap'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import Login from './Login'
import CommentInput from './CommentInput/CommentInput'
import { Route } from 'react-router-dom'

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