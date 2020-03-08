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
            <Nav.Link as="li"><Link to="/" className="toplink">메뉴</Link></Nav.Link>
            <Nav.Link as="li"><Link to="/restaurants" className="toplink">식당</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          { auth.logged_in ?
            <Link to="/account"> [ { auth.username } ]님 </Link> :
            <Link to="/login"> 로그인 </Link>
          }
          
        </Navbar.Text>
      </Navbar.Collapse>
      </Navbar>
    )
  }
  
}

export default AppNavbar;