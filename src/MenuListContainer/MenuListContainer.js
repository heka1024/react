import React, { Component } from 'react';
import MenuList from './MenuList';
import './MenuListContainer.scss'

class MenuListContainer extends Component {
	render() {
		const name = '학생회관', location = '학생회관 9층'
		const menus = [
			{name: '라면', price: '3000'},
			{name: '국밥', price: '4000'},
			{name: '진라면 매운맛', price: '2400'},
		]
		
		return(
			<div className= "menu_list_container">
				<p className = "menu_list_container_title"> { name } </p>
				<p className = "menu_list_container_location"> { location } </p>
				<hr/>
				<MenuList menus = {menus}/>
			</div>
		)
	}
}

export default MenuListContainer;
