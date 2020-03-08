import React, { Component } from 'react'
import Account from '../Account'
import ContentWrapper from '../ContentWrapper'

class AccountView extends Component {
	render() {
		return (
			<ContentWrapper>
				<Account history = {this.props.history}/>
			</ContentWrapper>
		);
	}
}

export default AccountView