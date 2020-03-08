import React, { Component } from 'react'
import { CardGroup, CardColumns, CardDeck } from 'react-bootstrap'
import axios from 'axios'
import RestaurantCard from '../RestaurantCard'
import './RestaurantView.scss'
import Api from '../Api'

class RestaurantView extends Component {
	state = { restaurants: [] }

	componentDidMount() {
		this._getRestaurant() 
	} 
	_getRestaurant = () => {
    console.log(Api)
		Api.getRestaurants()
		.then(res => {
      this.setState({
        restaurants: res 
      })
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