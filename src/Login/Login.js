import React, { Component } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.scss'
import { observer, inject } from 'mobx-react'

@inject(root => ({
  auth: root.AuthStore
}))

@observer
class Login extends Component {  
  handleClick = () => {
    const { auth, history } = this.props
    auth.login().then(
      res => { 
        if (res) {
          history.goBack() 
        }
      },
      err => { console.log(err) }
    )
  }
  
  handleLogout = () => {
    const { auth, history } = this.props
    auth.logout()
      .then(res => {
        if (res) {
          history.push('/')
        }
      })
  }

	render() {
    const { auth } = this.props
    
    const when_logout = (
      <div className="login">
          <p className="login_title">로그인</p>
          <hr/>
          <Form>
            <Form.Control 
              onChange = { auth.setUsername }
              className="login_input" type="text" placeholder="아이디" 
            />
            <Form.Control 
              onChange = { auth.setPassword }
              className="login_input" type="password" placeholder="비밀번호" 
            />
            
            <Button 
              onClick = { this.handleClick }
              className = "login_login" > 
              로그인 
            </Button>

            <Button className="link_to_signup" variant="outline-info">
              <Link to="/signup"><div className="signup_link"> 회원가입 </div></Link>
            </Button>
          </Form>
          { 
            auth.error && 
            <div className ="error">
                아이디나 비밀번호가 잘못되었습니다.
            </div>
          }
        </div>
    )
    
    const when_login = (
      <Button 
        onClick = { this.handleLogout }
        className = "login_logout" > 
        로그아웃 
      </Button>
    )

    return(
      <Col md ={6}>
        { auth.logged_in ? when_login : when_logout }
      </Col>
    )
  }
}

export default Login