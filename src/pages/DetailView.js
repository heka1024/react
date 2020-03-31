import React, { Component } from 'react'
import RestaurantDetail from '../RestaurantDetail'
import ContentWrapper from '../ContentWrapper'
import { date2query } from '../DateUtil'
import { observer, inject } from 'mobx-react'

@inject(root => ({
  RestaurantStore: root.RestaurantStore,
  MenuStore: root.MenuStore
}))

@observer
class DetailView extends Component {
	render() {
    const { RestaurantStore, MenuStore } = this.props
    const id = Number(this.props.match.params.id)
    const restaurant = RestaurantStore.restaurants
      .filter(r => r.id === id)[0]
    const menus = MenuStore.menus.filter(menu => 
      menu.date === date2query(new Date()) &&
      menu.rname === restaurant.name
    )

		return (
			<ContentWrapper>
				<RestaurantDetail 
          id = { id }
          history = { this.props.history }
					restaurant={ restaurant }
					menus={ menus }
				/>
			</ContentWrapper>
		)
	}
}

export default DetailView