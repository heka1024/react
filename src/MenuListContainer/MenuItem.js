import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ name, price }) => (
	<div className = "menu_item">
		<span className = "menu_item_title"> { name } </span>
		<span className = "menu_item_price"> { price } </span>
	</div>
)

export default MenuItem;
