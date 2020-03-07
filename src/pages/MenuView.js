import React, { Component } from 'react'
import Today from '../Today'
import ContentWrapper from '../ContentWrapper'

class MenuView extends Component {
	render() {
		return (
			<ContentWrapper>
				<Today/>
			</ContentWrapper>
		);
	}
}

export default MenuView;