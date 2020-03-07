import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import KakaoMap from '../KakaoMap'
import './RestaurantCard.scss'

class RestaurantCard extends Component {
	render() {
		const { restaurant } = this.props
		return (
			<Card style={{ width: '18rem' }}>
				<KakaoMap 
					height={'200px'} 
					lat={ Number(restaurant.lat) } 
					lng={ Number(restaurant.lng) }
					markers={
						[[restaurant.lat, restaurant.lng].map(Number)]
					}
				/>
				<Card.Body style={{textAlign: 'left'}}>
					<Card.Title> { restaurant.name } </Card.Title>
					<Card.Text> { restaurant.location } </Card.Text>
					
					<Link to={`/restaurant/${restaurant.id}`}>
						<Button variant="outline-success">더 알아보기</Button>
					</Link>
					
					<span className="like-wrapper">
						<span className="heart"> { '\u2764' }</span>
						<span className="likes"> { restaurant.likes.length } </span>
					</span>
						
				</Card.Body>
			</Card>
		);
	}
}

export default RestaurantCard;
