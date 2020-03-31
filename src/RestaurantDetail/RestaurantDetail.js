import React, { Component } from 'react'
import Infos from './Infos'
import Menus from './Menus'
import Comment from '../Comment'
import CommentInput from '../CommentInput'
import KakaoMap from '../KakaoMap'
import { Col, Row } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import './RestaurantDetail.scss'

@inject(root => ({
  AuthStore: root.AuthStore,
  MenuStore: root.MenuStore,
  CommentStore: root.CommentStore
}))

@observer
class RestaurantDetail extends Component {
  componentDidMount() {
    this.props.MenuStore.reset()
    this.props.MenuStore.getMenus()
  }
  
  render() {
    const { id, restaurant = {} } = this.props

    return(
      <div className = "restaurant_wrapper">
        <p className = "restaurant_name"> { restaurant.name } </p>
        <hr/>
        <Infos restaurant = {restaurant} />
        <hr/>
        <Menus menus = { 
          this.props.MenuStore.menus.filter(menu => menu.res_id == id) 
        } />
        <hr/>
        {console.log("why", restaurant.lat)}
        <KakaoMap 
          height={'400px'} 
          lat = { Number(restaurant.lat) } 
          lng = { Number(restaurant.lng) } 
          markers = {
             [[restaurant.lat, restaurant.lng].map(Number)]
          } 
        />
        <hr/>
          { this.props.AuthStore.logged_in ? 
              <CommentInput id={this.props.id} history={this.props.history}/> : 
              '댓글을 달려면 로그인해주세요' }
        <hr/>
        <div className = "comments_wrapper">
          <CommentRenderView id = {id}/>
        </div>
      </div>
    )
  }
}


@inject(root => ({ CommentStore: root.CommentStore }))
@observer
class CommentRenderView extends Component {
  componentDidMount() {
    this.props.CommentStore.getComments(this.props.id)
    console.log(this.props)
  }
  
  render() {
    const comments = this.props.CommentStore.comments.map((comment, i) =>
      <Row key={i}><Col md={12}><Comment comment = {comment}/></Col></Row>
    )
    return(
      <div>
        { this.props.CommentStore.comments.length > 0 ? comments : '댓글이 없습니다.' }
      </div>
    )
  }
}

export default RestaurantDetail
