import React, { Component } from 'react';
import MenuItem from './MenuItem'

class MenuList extends Component {
	render() {
		const { menus } = this.props
		const styles =  { listStyleType: 'none', padding: '0' }
		const menu_list = menus.map((menu, idx) => (
			<li key={idx}><MenuItem name = {menu.name} price = {menu.price}/></li>
		))
		console.log(menu_list)

		return(
			<div className = "menu_list">
				<ul style = {styles}> { menu_list } </ul>
			</div>
		)
	}
}

export default MenuList;
