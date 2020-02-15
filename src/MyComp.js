import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComp extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		number: 0
	}
	
	render() {
		return (
			<div>
				<p>name: { this.props.name }</p>
				<p>숫자: { this.state.number }</p>
				<button onClick={() => {
					this.setState({
						number: this.state.number + 1
					})
					}
				}>더하기</button>
			</div>
		)
	}
}

export default MyComp;