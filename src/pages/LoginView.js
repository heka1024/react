import React, { Component } from 'react'
import Login from '../Login'
import ContentWrapper from '../ContentWrapper'

class LoginView extends Component {
	render() {
		return (
			<ContentWrapper>
				<center>
					<Login/>
				</center>
			</ContentWrapper>
		)
	}
}

export default LoginView