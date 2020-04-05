import React, { Component } from 'react'
import { Col, Button, Form } from 'react-bootstrap'
import { observable, action, computed } from 'mobx'
import { observer, inject } from 'mobx-react'
import Api from '../Api'
import './SignUp.scss'

@inject(root => ({
  signup: root.SignupStore,
  auth: root.AuthStore,
}))

@observer
class SignUp extends Component {
  componentDidMount() {
      Api.userlist().then(
        res => {
          this.userlist = res
          console.log(this.userlist)
        },
        err => console.log(err)
      )
  }
  @observable username = ''
  @observable password1 = ''
  @observable password2 = ''
  @observable error = false
  

  @action handleUsername = e => { this.username = e.target.value }
  @action handlePassword1 = e => { this.password1 = e.target.value }
  @action handlePassword2 = e => { this.password2 = e.target.value }
  
  @computed get errorMessage() {
    let msg = ''
    if ((this.userlist || []).includes(this.username)) {
      msg = '이미 존재하는 아이디입니다.'
    } else if (this.password1 !== this.password2) {
      msg = '두 비밀번호가 다릅니다.'
    } else if ( this.password1.length < 8 || this.password1.lengthe > 16 ) {
      msg = '8자에서 16자 사이의 비밀번호를 설정해주세요.' 
    } else if (!(/[!@#$%^&*]+/i).test(this.password1)) {
      msg = '하나 이상의 특수문자를 포함해주세요.' 
    }
    return msg
  }
  
  handleClick = () => {
    if (this.errorMessage !== '') {
      return
    }
    const { signup, auth, history } = this.props
    Api.signup(
      this.username,
      this.password1,
      this.password2
    ).then(
      res => {
        if (res.status === 201) {
          auth.setState(
             this.username,
             this.password1
          )
          auth.login()
          history.push('/')
        }
      },
      err => console.log(err),
    )
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
              onChange = { this.handleUsername }
              type="text"  placeholder="아이디 입력" 
            />
            <hr/>
            <Form.Control 
              className="signup_input" 
              onChange = { this.handlePassword1 }
              type="password" placeholder="비밀번호" 
            />
            <Form.Control 
              className="signup_input" 
              onChange = { this.handlePassword2 }
              type="password" placeholder="비밀번호 확인" 
            />

            <Button
              onClick = { this.handleClick }
              className = "signup_submit" 
              variant="outline-info"
              disabled= { this.errorMessage !== ''}
            > 
              가입하기 
            </Button>
            
            <div className="error">
              { this.errorMessage !== '' && this.errorMessage }
            </div>
          </Form>
        </div>
      </Col>
    )
  }
}

export default SignUp;