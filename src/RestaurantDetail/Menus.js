import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import './Menus.scss';

const sels = [
	['b', '아침'],
	['l', '점심'],
	['d', '저녁'],
]

const Menus = ({ menus }) => {
	const selectMenus = (sel_idx) => {
		const selected_menus = menus
			.filter(menu => menu.time == sels[sel_idx][0])
			.map(menu => (
				<div>
					<span className = "menu_title"> { menu.name } </span>
					<span className = "menu_price"> { menu.price } </span>
				</div>
			))
		return(
			<Row className="menu_row">
				<Col className = "menu_hd" md={2}> { sels[sel_idx][1] } </Col>
				<Col md={10}> { selected_menus == '' ? 
						<span className = "menu_title"> 정보가 없습니다. </span> :
						selected_menus
				} </Col>
			</Row>
		)
	}
	
	return (
		<div>
			{ [0, 1, 2].map(i => selectMenus(i)) } 
		</div>
	)
}

export default Menus

