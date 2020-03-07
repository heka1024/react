import React, { Component } from 'react'
import SignUp from '../SignUp'
import ContentWrapper from '../ContentWrapper'

class SignUpView extends Component {
	render() {
		return (
			<ContentWrapper>
				<center>
					<SignUp/>
				</center>
			</ContentWrapper>
		)
	}
}

export default SignUpView