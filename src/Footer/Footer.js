import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Footer.scss'

const user = { username: '' }

const Footer = () => {
	const items = ['샤밥', '|', 'heka1024'].map((item, i) =>
		(<span key={i} className = "footer-item"> { item } </span>)
	)
	
	return (
		<div className = "footer">
			<hr/>
			<center>
				{ items }
			</center>
		</div>
	)
}

export default Footer;