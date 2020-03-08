import React, { Component } from 'react'
import SignUp from '../SignUp'
import ContentWrapper from '../ContentWrapper'

class SignUpView extends Component {
	render() {
		return (
			<ContentWrapper>
				<center>
					<SignUp history = {this.props.history}/>
				</center>
			</ContentWrapper>
		)
	}
}

export default SignUpView