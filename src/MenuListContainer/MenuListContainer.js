import React, { Component } from 'react'
import MenuList from './MenuList'
import Api from '../Api'
import { inject } from 'mobx-react'
import { IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'
import './MenuListContainer.scss'

@inject(root => ({
  RestaurantStore: root.RestaurantStore,
  AuthStore: root.AuthStore
}))

class MenuListContainer extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   const a = this.props.restaurant.liked, b = nextProps.restaurant.liked
  //   if (a.length !== b.length) {
  //     return true
  //   } else {
  //     const len = a.length
  //     for (let i = 0; i < len; i++) {
  //       if (a[i] !== b[i]) {
  //         return true
  //       }
  //     }
  //     return false
  //   }
  // }
  
  getStyle = () => {
    const c = this.props.AuthStore.logged_in && this.props.restaurant.liked
      .some(i => i.username === this.props.AuthStore.username) ? 'red' : 'gray'
    return {color: c}
  }
  
  handleClick = () => {
    const { AuthStore, RestaurantStore, restaurant } = this.props
    if (AuthStore.logged_in) {
      Api.like(
        restaurant.id, 
        AuthStore.token
      ).then(
        res => {
          RestaurantStore.update(restaurant.id)
        },
        err => {
          console.log(err)
        }
      )
    }
  }

	render() {
		const { restaurant = {}, menus = [] } = this.props
		
		return(
			<div className= "menu_list_container">
				
				<p className = "menu_list_container_title">
					<Link to={`/restaurant/${restaurant.id}`}> { restaurant.name } </Link>
          
          <IconButton className="like-wrapper" onClick={this.handleClick}>
            <FavoriteIcon style={this.getStyle()} />
            <span className="likes"> { restaurant.liked.length } </span>
          </IconButton>
				</p>
				
				<p className = "menu_list_container_location"> { restaurant.location } </p>
				<MenuList menus = {menus}/>
				<hr/>
			</div>
		)
	}
}

export default MenuListContainer
