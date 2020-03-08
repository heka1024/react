import React, { Component } from 'react'
import Login from '../Login'
import ContentWrapper from '../ContentWrapper'

class LoginView extends Component {
	render() {
		return (
			<ContentWrapper>
				<center>
					<Login history = {this.props.history}/>
				</center>
			</ContentWrapper>
		)
	}
}

export default LoginView