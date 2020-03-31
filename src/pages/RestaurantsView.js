import React, { Component } from 'react'
import RestaurantView from '../RestaurantView'
import ContentWrapper from '../ContentWrapper'

class RestaurantsView extends Component {
	render() {
		return (
			<ContentWrapper>
				<RestaurantView/>
			</ContentWrapper>
		);
	}
}

export default RestaurantsView