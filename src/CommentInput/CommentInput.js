import React, { Component } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap'
import './CommentInput.scss'

const CommentInput = () => (
	<div className = "info">
		<Form>
			<Row>
			<Col xs = {9}>
				<Form.Control style={{marginLeft:'10px'}} inline type="text" 
					placeholder="댓글을 입력하세요" />
			</Col>
			<Col xs = {3}>
				<Button inline variant="primary" type="submit">
					입력
				</Button>
			</Col>
			</Row>
		</Form>
	</div>
)

export default CommentInput;