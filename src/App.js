import React, { Component } from 'react';
import RestaurantDetail from './RestaurantDetail';
import { Row, Col } from 'react-bootstrap'
import Header from './Header'

const menulist = [
	{name: '라면', price: '3000'},
	{name: '국밥', price: '4000'},
	{name: '진라면 매운맛', price: '2400'},
]

const res = {
	name: '3식당',
	location: '75동',
	number: '02-997-7488',
	lat: '37.45647',
	lng: '126.94851',
	comments: [
		{
			author: 'heka1024',
			date: '20-01-24',
			text: '학관조아',
		},
		{
			author: 'asd123',
			date: '20-01-24',
			text: '마시쏘',
		}
	]
}
const user = {
	username: 'heka1024'
}
class App extends Component {
	render() {
		const Footer = <Col md={12}><hr/><center>Footer</center></Col>
		return (
			<div>
				<Header/>
				<div className='body'>
					<Row className ="justify-content-md-center">
						<Col md={8}>
							<RestaurantDetail restaurant={res} user={user} />
						</Col>
					</Row>
				</div>
				{ Footer }
			</div>
		);
	}
}

export default App;
