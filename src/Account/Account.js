import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Api from '../Api'
import './Account.scss'

@inject(root => ({
  auth: root.AuthStore
}))

@observer
class Account extends Component {
  handleLogout = () => {
    const { auth, history } = this.props
    auth.logout()
      .then(res => {
        if (res) {
          history.push('/')
        }
      })
  }
  
  handleDeleteUser = () => {
    const { history, auth } = this.props
    Api.deleteUser(auth.token).then(
      res => {
        auth.logout()
        history.push('/')
      },
      err => console.log(err)
    )
  }
  
  render() {
    const { auth } = this.props
    
    const when_login = (
      <div className="account">
        <h2> { auth.username }님, 안녕하세요! </h2>
        <hr/>
        <Button 
          onClick={ this.handleLogout }
          variant="outline-secondary">
          로그아웃
        </Button>
        <br/>
        <br/>
        <Button 
          onClick={ this.handleDeleteUser }
          variant="outline-danger">
          회원탈퇴
        </Button>
      </div>
    )
    
    const when_logout = (
      <div className="error">
        <h4> 계정 정보가 없습니다. </h4>
        <hr/>
        <Link to='/login'>
          <Button variant="outline-success">
            로그인 하기
          </Button>
        </Link>
      </div>
    )
    
    return(
      <div className ="account-wrapper">
        {  auth.logged_in ? when_login : when_logout }
      </div>
    )
  }
}

export default Account