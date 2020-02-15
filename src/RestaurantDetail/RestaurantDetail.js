import React, { Component } from 'react';
import Infos from './Infos'
import Menus from './Menus'
import Comment from '../Comment'
import KakaoMap from '../KakaoMap'
import { Container, Col, Row } from 'react-bootstrap'
import './RestaurantDetail.scss';

const menus = [
	{
		name: '라면',
		price: '3000',
		time: 'b'
	},
	{
		name: '국밥',
		price: '4500',
		time: 'l'
	},
	{
		name: '라면',
		price: '3000',
		time: 'l'
	}
]

class RestaurantDetail extends Component {
	render() {
		const { restaurant, user } = this.props
		const comments = restaurant.comments.map( comment =>
			<Row><Col md={12}><Comment comment = {comment} user = {user}/></Col></Row>
		)
		
		return(
			<div className = "restaurant_wrapper">
				<p className = "restaurant_name"> { restaurant.name } </p>
				<hr/>
				<Infos restaurant = {restaurant} />
				<hr/>
				<Menus menus = {menus}/>
				<hr/>
				<KakaoMap 
					lat = { restaurant.lat } 
					lng = { restaurant.lng } 
					markers = {
						 [[restaurant.lat, restaurant.lng].map(Number)]
					} 
				/>
				<hr/>
				<div className = "comments_wrapper">
					{ comments }
				</div>
			</div>
		)
	}
}

export default RestaurantDetail;
