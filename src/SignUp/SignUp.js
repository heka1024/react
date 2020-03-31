import React, { Component } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import './SignUp.scss'

@inject(root => ({
  signup: root.SignupStore,
  auth: root.AuthStore,
}))

@observer
class SignUp extends Component {
  handleClick = () => {
    const { signup, auth, history } = this.props
    signup.signup()
      .then(res => {
        if (res) {
          auth.setState(
            signup.username,
            signup.password1
          )
          auth.login()
          history.push('/')
        }
      })
  }     
  render() {
    const { signup } = this.props 
    return(
      <Col md ={6}>
        <div className="login">
          <p className="login_title">회원가입</p>
          <hr/>
          <Form>
            <Form.Control 
              className="signup_input"
              onChange = { signup.setUsername }
              type="text"  placeholder="아이디 입력" 
            />
            <hr/>
            <Form.Control 
              className="signup_input" 
              onChange = { signup.setPassword1 }
              type="password" placeholder="비밀번호" 
            />
            <Form.Control 
              className="signup_input" 
              onChange = { signup.setPassword2 }
              type="password" placeholder="비밀번호 확인" 
            />

            <Button
              onClick = { this.handleClick }
              className = "signup_submit" 
              variant="outline-info"> 
              가입하기 
            </Button>
            
            { 
              signup.error &&
              <div className="error">
                잘못된 입력입니다.  
              </div>
            }
          </Form>
        </div>
      </Col>
    )
  }
}

export default SignUp;