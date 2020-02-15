import React, { Component } from 'react';
import { Col, Row, Form } from 'react-bootstrap'

const CommentInput = () => (
	<div className = "info">
		<Form>
			<Col md = {8}>
				<Form.Control type="text" 
					placeholder="댓글을 입력하세요" />
			</Col>
			<Col md = {4}>
				<Button variant="primary" type="submit">
					입력
				</Button>
			</Col>
		</Form>
	</div>
)

export default CommentInput;