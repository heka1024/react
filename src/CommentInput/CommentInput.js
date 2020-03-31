import React, { Component } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap'
import Api from '../Api'
import { observable, action, runInAction } from 'mobx'
import { inject, observer } from 'mobx-react'
import './CommentInput.scss'

@inject(root => ({
  AuthStore: root.AuthStore,
  CommentStore: root.CommentStore
}))

@observer
class CommentInput extends Component {
  @observable text = ''

  @action handleChange = (e) => { this.text = e.target.value }
  
  handleClick = () => {
    Api.postComment(
      this.props.id,
      this.text,
      this.props.AuthStore.token
    ).then(
      res => {
        console.log(res)
        runInAction( () => { this.text = '' })
        this.props.CommentStore.getComments(this.props.id)
      },
      err => console.log(err)
    )
  }
  
  render() {
    return(
      <div className = "info">
        <Form>
          <Row>
          <Col xs = {9}>
            <Form.Control 
              onChange = {this.handleChange}
              style={{marginLeft:'10px'}} 
              value = {this.text}
              inline 
              type="text" 
              placeholder="댓글을 입력하세요" />
          </Col>
          <Col xs = {3}>
            <Button inline variant="primary" onClick = {this.handleClick} >
              입력
            </Button>
          </Col>
          </Row>
        </Form>
      </div>
    )
  }
  
}
  
export default CommentInput