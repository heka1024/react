import React, { Component } from 'react'
import { CardGroup, CardColumns, CardDeck } from 'react-bootstrap'
import axios from 'axios'
import RestaurantCard from '../RestaurantCard'
import './RestaurantView.scss'

class RestaurantView extends Component {
	state = {
		restaurants: []
	}
	componentDidMount() {
		this._getRestaurant() 
	} 
	_getRestaurant = () => {
		const url  ='http://rest-api.run.goorm.io/restaurants/'
		// const url = '/dummy/restaurants.json'
		
		axios.get(url)
			.then(res => {
				const data = res.data.results 
				console.log(data)
				this.setState({
					restaurants: data
				})
			})
			.catch(e => {
				console.log(e)
			})
	}

	render() {
		return(
			<ul className="cards">
				{ this.state.restaurants.map(res => (
						<li className="cards-item" key={res.name}>
							<RestaurantCard restaurant={res} className="cards-item"/>
						</li>
					)
				)}
			</ul>
		)
	}
}

export default RestaurantView