import React from 'react';
import Infos from './Infos'
import Menus from './Menus'
import Comment from '../Comment'
import KakaoMap from '../KakaoMap'
import { Container, Col, Row } from 'react-bootstrap'
import './RestaurantDetail.scss';

const RestaurantDetail = props => {
	const { restaurant } = props, { user = {} } = props
	const { menus = [] } = props
	const comments = (restaurant.comments || []).map((comment, i) =>
		<Row key={i}><Col md={12}><Comment comment = {comment} user = {user}/></Col></Row>
	)

	return(
		<div className = "restaurant_wrapper">
			<p className = "restaurant_name"> { restaurant.name } </p>
			<hr/>
			<Infos restaurant = {restaurant} />
			<hr/>
			<Menus menus = {menus}/>
			<hr/>
			{console.log("why", restaurant.lat)}
			<KakaoMap 
				height={'400px'} 
				lat = { Number(restaurant.lat) } 
				lng = { Number(restaurant.lng) } 
				markers = {
					 [[restaurant.lat, restaurant.lng].map(Number)]
				} 
			/>
			<hr/>
			<div className = "comments_wrapper">
				{ comments.length > 0 ? comments : '댓글이 없습니다' }
			</div>
		</div>
	)
}

export default RestaurantDetail;
