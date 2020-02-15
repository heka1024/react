import React, { Component } from 'react';

class Prac extends Component {
	state = {
		message: ''
	}
	render() { 
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					value = { this.state.message }
					placeholder="type anything"
					onChange = { e => {
							this.setState({ message: e.target.value })
						}
					}
					/>
				<button onClick = {() => {
						alert(this.state.message)
						this.setState({ message: '' })
					}
				}>확인</button>
			</div>
		);
	}
}

export default Prac;