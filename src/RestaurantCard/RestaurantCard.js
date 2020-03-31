import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { inject } from 'mobx-react'
import { IconButton, CardActions } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Api from '../Api'
import KakaoMap from '../KakaoMap'
import './RestaurantCard.scss'

@inject(root => ({
  RestaurantStore: root.RestaurantStore,
  AuthStore: root.AuthStore
}))

class RestaurantCard extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const a = this.props.restaurant.liked, b = nextProps.restaurant.liked
    if (a.length !== b.length) {
      return true
    } else {
      const len = a.length
      for (let i = 0; i < len; i++) {
        if (a[i] !== b[i]) {
          return true
        }
      }
      return false
    }
  }
  
  getStyle = () => {
    const c = this.props.restaurant.liked
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
		const { restaurant } = this.props
		return (
			<Card style={{ width: '18rem', flex: 1 }}>
				<KakaoMap 
					height={'200px'} 
          width={'100%'}
					lat={ Number(restaurant.lat) } 
					lng={ Number(restaurant.lng) }
					markers={
						[[restaurant.lat, restaurant.lng].map(Number)]
					}
				/>
				<Card.Body style={{textAlign: 'left'}}>
					<Card.Title> { restaurant.name } </Card.Title>
					<Card.Text> { restaurant.location } </Card.Text>
					
          <CardActions disableSpacing style={{paddingLeft: '0px'}}>
            <Link to={`/restaurant/${restaurant.id}`}>
              <Button variant="outline-success">더 알아보기</Button>
            </Link>

            <IconButton className="like-wrapper" onClick={this.handleClick}>
              <FavoriteIcon style={this.getStyle()} />
              <span className="likes"> { restaurant.liked.length } </span>
            </IconButton>
          </CardActions>
          
				</Card.Body>
			</Card>
		);
	}
}

export default RestaurantCard;
