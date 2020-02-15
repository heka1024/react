import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import './Infos.scss';

const Infos = ({ restaurant }) => (
	<div className = "info">
		<Row className = "info_row">
			<Col className = "info_hd" xs={3} md={2}> 위치 </Col>
			<Col className = "info_tr" xs={9} md={10}> { restaurant.location } </Col>
		</Row>
		<Row className = "info_row">
			<Col className = "info_hd" xs = {3} md={2}> 전화번호 </Col>
			<Col className = "info_tr" xs = {9} md={10}> { restaurant.number } </Col>
		</Row>
	</div>
)

export default Infos;