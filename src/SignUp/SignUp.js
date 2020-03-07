import React, { Component } from 'react'
import { Col, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SignUp.scss'

const SignUp = () => {
	return(
		<Col md ={6}>
			<div className="login">
				<p className="login_title">회원가입</p>
				<hr/>
				<Form>
					<Form.Control className="signup_input" type="text" placeholder="아이디 입력" />
					<hr/>
					<Form.Control className="signup_input" type="text" placeholder="비밀번호" />
					<Form.Control className="signup_input" type="text" placeholder="비밀번호 확인" />

					<Button className = "signup_submit" variant="outline-info" type="submit"> 가입하기 </Button>
				</Form>
			</div>
		</Col>
	)
}

export default SignUp;