import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './AppNavbar.scss'

const user = { username: '' }

const AppNavbar = () => (
	<Navbar expand="lg">
		<Link to="/"><Navbar.Brand>샤밥</Navbar.Brand></Link>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto" as="ul">
				<Nav.Link as="li"><Link to="/" className="toplink">메뉴</Link></Nav.Link>
				<Nav.Link as="li"><Link to="/restaurants" className="toplink">식당</Link></Nav.Link>
			</Nav>
		</Navbar.Collapse>
		<Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      <Link to="/login"> [ { user.username ? 'hello, ' + user.username : 'login' } ] </Link>
    </Navbar.Text>
  </Navbar.Collapse>
	</Navbar>
)

export default AppNavbar;