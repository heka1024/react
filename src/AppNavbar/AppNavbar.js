import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './AppNavbar.scss'

@inject(root => ({
  auth: root.AuthStore
}))

@observer
class AppNavbar extends Component {
  render() {
    const { auth } = this.props
    return(
      <Navbar expand="lg">
        <Link to="/"><Navbar.Brand>샤밥</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" as="ul">
            <Link to="/" className="toplink"><Nav.Link as="li">메뉴</Nav.Link></Link>
            <Link to="/restaurants" className="toplink"><Nav.Link as="li">식당</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end" as="ul">
            <Link to={ auth.logged_in ? "/account" : "/login"}>
                {
                  auth.logged_in ? 
                  <Nav.Link as="li">[ {auth.username} ] 님 </Nav.Link> : 
                  <Nav.Link as="li">로그인 </Nav.Link>
                }
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
}

export default AppNavbar;