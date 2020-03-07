import React, { Component } from 'react'
import RestaurantDetail from '../RestaurantDetail'
import ContentWrapper from '../ContentWrapper'
import axios from 'axios'
import { date2query } from '../DateUtil'

class DetailView extends Component {
	state = {
		restaurant: {},
		menus: []
	}

	_getRestaurant = id => {
		const url = `http://rest-api.run.goorm.io/restaurants/${id}/`
		axios.get(url)
			.then(res => {
				const data = res.data
				this.setState({restaurant: data || []})
			})
			.catch(e => console.log(e))
	}

	_getMenus = () => {
		axios.get('/dummy/menus.json')
			.then(res => {
				const menus = res.data.menus.filter(menu =>
					menu.restaurant_name === this.state.restaurant.name &&
					menu.date === date2query(new Date())
				)
				this.setState({menus: menus})
			})
			.catch(e => console.log(e))
	}

	componentDidMount() {
		const res_id = this.props.match.params.id
		this._getRestaurant(res_id)
		this._getMenus()
	}
	
	render() {
		return (
			<ContentWrapper>
				<RestaurantDetail 
					restaurant={ this.state.restaurant }
					menus={ this.state.menus }
				/>
			</ContentWrapper>
		)
	}
}

export default DetailView