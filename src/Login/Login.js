import React, { Component } from 'react'
import axios from 'axios'
import { Col, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.scss'

class Login extends Component {
  state = {
    id: '',
    password: ''
  }

  handleIdChange = e => {this.setState({id: e.target.value})}
  handlePasswordChange = e => {this.setState({password: e.target.value})}
  
  handleSubmit = e => {
    const url = 'http://rest-api.run.goorm.io/rest-auth/login/'
    axios.post(url, {
        username: this.state.id,
        password: this.state.password
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

	render() {
    return(
      <Col md ={6}>
        <div className="login">
          <p className="login_title">로그인</p>
          <hr/>
          <Form>
            <Form.Control 
              onChange = {this.handleIdChange}
              className="login_input" type="text" placeholder="아이디" 
            />
            <Form.Control 
              onChange = {this.handlePasswordChange}
              className="login_input"  type="password" placeholder="비밀번호" 
            />
            <Button 
              onClick = {this.handleSubmit}
              className = "login_submit" > 
              제출 
            </Button>

            <Button className="link_to_signup" variant="outline-info">
              <Link to="/signup"><div className="signup_link"> 회원가입 </div></Link>
            </Button>
          </Form>
        </div>
      </Col>
    )
  }
}

export default Login;