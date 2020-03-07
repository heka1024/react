import React, { Component } from 'react'
import MenuList from './MenuList'
import { Link } from 'react-router-dom'
import './MenuListContainer.scss'

class MenuListContainer extends Component {
	render() {
		const { restaurant = {}, menus = [] } = this.props
		
		return(
			<div className= "menu_list_container">
				
				<p className = "menu_list_container_title">
					<Link to={`/restaurant/${restaurant.id}`}> { restaurant.name } </Link>
				</p>
				
				<p className = "menu_list_container_location"> { restaurant.location } </p>
				<MenuList menus = {menus}/>
				<hr/>
			</div>
		)
	}
}

export default MenuListContainer
